<template>
    <div class="dropdown" ref="dropdown">
      <ul class="categories" v-if="this.showSearchResults == false">
        <li v-for="cat in $static.allWordPressCategory.edges" class="cat" :key="cat.node.id">
          <div class="image">
            <g-link :to="cat.node.path"><g-image :src="filterCatImage(cat.node.id)" v-on:click="hideDropdown()"></g-image></g-link>
          </div>
           <g-link :to="cat.node.path" class="title"><h2>{{cat.node.title}}</h2></g-link>
        </li>
      </ul>

      <!--<ul class="items search" v-if="this.showSearchResults == true">
        <div v-if="this.results > 0"></div>
        <li class="title"><h3>Searching For: "{{this.searchingBy}}"</h3></li>
        <li v-for="post in results" class="post" :key="post.id">
          <div class="image">
            <g-link :to="post.path"><g-image :src="post.featuredMedia.sourceUrl" v-on:click="hideDropdown()"></g-image></g-link>
          </div>
          <div class="post-info">
          <g-link :to="post.path"><h4>{{post.title}}</h4></g-link>
            <g-link :to="post.path" class="read-more">Read More</g-link>
          </div>
        </li>
        <li v-if="this.results == 0">Sorry, no posts were found</li>
      </ul>-->
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

    allWordPressCategory(order: ASC ) {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</static-query>

<script>
export default {
    name: 'Dropdown',
    props: ['dropdownState', 'searchResults', 'showSearch', 'searchTerm'],
    data() {
        return {
          showDropdown: false,
          results: [],
          showSearchResults: this.showSearch,
          searchingBy: this.searchTerm,
          hasResults: false,
        }
    },
    watch: {
      searchResults: function(results) {
        //this.showSearchResults = true;
        this.results = results;
        if (results.length > 0) {
          this.hasResults = true;
        }
      },
      showSearch(state) {
        //this.showSearchResults = state;
      },
      searchTerm(searchTerm) {
        this.searchingBy = searchTerm;
        if (searchTerm >=3) {
          this.showSearchResults = true;
        }
        if (searchTerm == '') {
          this.hideDropdown();
        }
      }
    },
    methods: {
      filterCatImage(id) {
        this.catImages = this.$static.allCategoryImages.edges;
        const matchedImage = this.catImages.filter(obj => {
          return obj.node.id == id;
        });
        return matchedImage[0].node.acf.categoryImage;
      },
      hideDropdown: function() {
        this.$emit('hideDropdown');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dropdown {
    background: black;
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
    transition: opacity 0.3s ease;
    &.hide {
      opacity: 0;
      height: 0;
    }
    &.show {
      opacity: 1;
      height: 100%;
    }
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
        font-family: acumin-pro-extra-condensed, Helvetica, sans-serif;
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
