<template>
    <div class="dropdown" ref="dropdown" :class="showDropdown ? 'show' : 'hide'">
      <!--<ul class="items" v-if="this.showSearchResults == false">
        <li class="title">
          <g-link :to="this.catPath" class="cat-title">
            <h2>{{ currentCatTitle }}</h2>
            <p>View All Posts</p>
          </g-link>
        </li>
        <li v-for="post in catPosts" class="post" :key="post.node.id">
          <div class="image">
            <g-link :to="post.node.path"><g-image :src="post.node.featuredMedia.sourceUrl" v-on:click="hideDropdown()"></g-image></g-link>
          </div>
          <div class="post-info">
           <g-link :to="post.node.path" class="title"><h4>{{post.node.title}}</h4></g-link>
            <g-link :to="post.node.path" class="read-more">Read More</g-link>
          </div>
        </li>
      </ul>-->

      <ul class="items search" v-if="this.showSearchResults == true">
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
      </ul>
    </div>
</template>

<!--<static-query>
  query {
  catPosts: allWordPressPost(sortBy: "date") {
    edges {
      node {
        title
        link
        path
        featuredMedia {
          sourceUrl
          altText
        }
        categories {
          id
          path
        }
      }
    }
  }
}
</static-query>-->

<script>
export default {
    name: 'Dropdown',
    props: ['dropdownState', 'searchResults', 'showSearch', 'searchTerm'],
    data() {
        return {
          showDropdown: true,
          results: [],
          showSearchResults: this.showSearch,
          searchingBy: this.searchTerm,
          hasResults: false
        }
    },
    watch: {
      dropdownState: function(state) {
        this.showDropdown = state
      },
      searchResults: function(results) {
        this.showSearchResults = true;
        this.results = results;
        if (results.length > 0) {
          this.hasResults = true;
        }
      },
      showSearch(state) {
        this.showSearchResults = state;
      },
      searchTerm(searchTerm) {
        this.searchingBy = searchTerm;
        if (searchTerm >=3) {
          this.showSearchResults = true;
          console.log('show search');
        }
        if (searchTerm == '') {
          this.hideDropdown();
        }
      }
    },
    methods: {
      filterPosts() {
        console.log('wee');
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
    z-index: 100;
    min-height: 450px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
    margin: 0;
    &.hide {
      opacity: 0;
      pointer-events: none;
    }
    &.show {
      z-index: 100;
      transition: opacity 0.6s ease;
      opacity: 1;
      pointer-events: default;
    }
    ul.items {
      display: flex;
      justify-content: space-between;
      align-content: center;
      height: 100%;
      list-style-type: none;
      margin: 0;
      padding: 45px 150px;
      li {
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 24%;
        color: white;
        text-align: center;
        position: relative;
        align-content: center;
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
        a.cat-title {
          position: absolute;
          top: 50%;
          left: 25%;
          transform: translate(-50%);
          font-size: 26px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: white;
          text-decoration: none;
          h2 {
            margin: 0;
            padding: 0;
            font-size: 30 px;
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
