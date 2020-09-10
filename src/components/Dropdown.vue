<template>
  <div >
    <div class="dropdown" ref="dropdown" @mouseleave="!showDropdown">
      <ul class="categories" v-if="this.showSearchBar == false && this.showCategories == false">
        <li v-for="cat in $static.allWordPressCategory.edges" class="cat" :key="cat.node.id" v-if="cat.node.count > 0" @click="hideDropdown()">
          <div class="image">
            <g-link :to="cat.node.path"><g-image :src="filterCatImage(cat.node.id)" alt="cat.node.title"></g-image></g-link>
          </div>
           <g-link :to="cat.node.path" class="title"><h2>{{cat.node.title}}</h2></g-link>
        </li>
      </ul>

      <div class="search-container" v-if="this.showSearchBar == true && this.showCategories == false">
        <span>Search</span>
        <input id="search" type="text" v-model="searchingBy" class="input" @keyup.enter="search">
        <div class="search-button">
          <button @click="search">Submit</button>
        </div>
      </div>

      <div class="mobile-categories" v-if="this.showCategories == true">
        <ul>
          <li v-for="cat in $static.allWordPressCategory.edges" @click="hideDropdown()">
            <g-link :to="cat.node.path">{{cat.node.title}}</g-link>
          </li>
          <li @click="hideDropdown()"><g-link to="/pages/about-us/">About</g-link></li>
          <li @click="hideDropdown()"><g-link to="/our-commitment/">Our Commitment</g-link></li>
          <li><a href="#" @click="$store.showPopup = true">Subscribe</a></li>
        </ul>
      </div>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<static-query>
  query {
    allCategoryImages {
      edges {
        node {
          id
          acf {
            categoryImage
          }
        }
      }
    }

    allWordPressCategory(order: ASC, filter: { slug: { ne: "homepage-hero-banners"}} ) {
      edges {
        node {
          id
          title
          path
          count
        }
      }
    }
  }
</static-query>

<script>
export default {
    name: 'Dropdown',
    props: ['dropdownState', 'searchResults', 'showSearch', 'mobileCatTrigger'],
    data() {
        return {
          showDropdown: false,
          results: [],
          showSearchBar: this.showSearch,
          searchingBy: '',
          showCategories: this.mobileCatTrigger
        }
    },
    watch: {
      dropdownState: function(state) {
        this.showDropdown = state;
      },
      showSearch(state) {
        this.showSearchBar = state;
      },
      mobileCatTrigger(state) {
        this.showCategories = state;
      }
    },
    methods: {
      filterCatImage(id) {
        const catImages = this.$static.allCategoryImages.edges;
        let newArr = [];
        catImages.forEach(({node}) => {
          newArr.push({
            id: node.id,
            imageUrl: node.acf.categoryImage
          })
        });
        let catImage = null;
        newArr.filter((cat) => {
          if (cat.id == id) {
            catImage = cat.imageUrl
          }
        });
        return catImage;
      },
      hideDropdown() {
        this.$emit('hideDropdown')
      },
      search() {
        this.$emit('updateViewKey');
        this.$emit('hideDropdown');
        this.$store.searchQuery = this.searchingBy;
        this.$router.push({
          path: '/search/',
          query: { s: this.searchingBy }
        });
        this.searchingBy = '';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dropdown {
    background: rgba(0,0,0,0.87);
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    z-index: 1;
    height: 100%;
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
    margin: 0;
    ul.categories {
      display: flex;
      justify-content: space-between;
      align-content: center;
      height: 100%;
      list-style-type: none;
      margin: 0;
      padding: 45px 20px;
      li {
        list-style-type: none;
        margin: 0 10px;
        padding: 0;
        width: 24%;
        color: white;
        text-align: center;
        position: relative;
        align-content: center;
        height: 100%;
        &:hover {
          h2 {
            border-bottom: 1px solid white;
            padding-bottom: 1px;
          }
        }
        .image {
          overflow: hidden;
          padding-bottom: 100%;
          position: relative;
          margin-bottom: 15px;
        }
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          object-fit: cover;
        }
        a.title {
          font-size: 20px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: white;
          text-decoration: none;
          font-family: 'acumin-pro-extra-condensed', 'Helvetica Neue', sans-serif;
          font-weight: 600;
          font-style: normal;
          text-align: center;
          h2 {
            margin: 0;
            padding: 0;
            font-size: 20px;
            display: inline;
          }
          p {
            margin: 5px 0 0 0;
            letter-spacing: 0;
            font-size: 12px;
            text-decoration: underline;
          }
        }
        h3 {
          position: absolute;
          top: 50%;
          left: 25%;
          transform: translate(-50%);
          font-size: 26px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
      }
      &.search {
        justify-content: space-between;
        li {
          width: 24%;
          h3 {
            font-size: 16px;
            position: relative;
            top: auto;
            left: auto;
            text-align: center;
            transform: none;
          }
        }
      }
    }
    .search-container {
      padding: 45px 0 20px 0;
      max-width: 700px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      @media screen and (max-width: $breakpoint-md) {
        padding: 45px 20px;
      }

      span {
        color: white;
        font-family: 'acumin-pro-condensed', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        font-style: normal;
        font-size: 20px;
        text-transform: uppercase;
        margin-right: 10px;
      }
      input {
        flex-grow: 1;
        padding: 5px 40px 5px 5px;
        font-family: acumin-pro, sans-serif;
        font-weight: 300;
        font-size: 14px;
        background: url('~@/assets/images/search-icon.svg') right 10px center no-repeat;
        background-color: white;
        background-size: 17px;
      }
      .search-button {
        flex-basis: 100%;
        text-align: right;
      }
    }
    .mobile-categories {
      padding: 5vw 0;
      background: black;
      width: 100%;
      ul {
        margin: 0 auto;
        padding: 0;
        width: 90vw;
      }
      li {
        font-family: 'acumin-pro-condensed';
        font-size: 5vw;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .3vw;
        border-bottom: 1px solid #666;
        margin-bottom: 3vw;
        padding-bottom: 3vw;
      }
      a {
        color: white;
        text-decoration: none;
        padding: 2px 0;
        display: block;
      }
    }
  }
  .spacer {
    height: 100px;
    width: 100%;
    background: transparent;
  }
  .post-info {
      width: 100%;
      display: flex;
      a {
        text-decoration: none;
        flex-grow: 1;
        &.title {
          width: 60%;
        }
        &.read-more {
          flex-grow: 0;
          margin-left: 10px;
        }
      }
      h4 {
        font-family: 'acumin-pro-extra-condensed', Helvetica, sans-serif;
        text-align: left;
        font-size: 22px;
        text-transform: uppercase;
        margin: 0 10px 0 0;
        line-height: 1;
      }
      a {
        color: white;
        font-size: 12px;
        text-transform: uppercase;
        text-decoration: none;
        &.read-more {
          text-decoration: underline;
          flex-shrink: 0;
        }
      }
    }
</style>
