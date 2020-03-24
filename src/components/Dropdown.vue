<template>
    <div class="dropdown" ref="dropdown" :class="showDropdown ? 'show' : 'hide'" @mouseleave="hideDropdown()"> 
      <ul class="items" v-if="this.showSearchResults == false">
        <li class="title"><h3 class="title">{{ currentCatTitle }}</h3></li>
        <li v-for="post in catPosts" class="post" :key="post.node.id">
          <div class="image">
            <g-link :to="post.node.path"><g-image :src="post.node.featuredMedia.sourceUrl" v-on:click="hideDropdown()"></g-image></g-link>
          </div>
          <div class="post-info">
           <g-link :to="post.node.path"><h4>{{post.node.title}}</h4></g-link>
            <g-link :to="post.node.path" class="read-more">Read More</g-link> 
          </div>
        </li>
      </ul>

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

<static-query>
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
        }
      }
    }
  }
}
</static-query>

<script>
export default {
    name: 'Dropdown',
    props: ['currentCat', 'currentCatTitle', 'dropdownState', 'searchResults', 'showSearch', 'searchTerm'],
    data() {
        return {
          catPosts: [],
          category: this.currentCat,
          showDropdown: false,
          results: [],
          showSearchResults: this.showSearch,
          searchingBy: this.searchTerm,
          hasResults: false
        }
    },
    watch: {
      currentCat: function(id) {
        this.category = id;
        this.filterPosts();
      },
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
        }
      }
    },
    methods: {
      filterPosts() {
        this.catPosts = [];
        this.$static.catPosts.edges.forEach((post) => {
          const postCats = [];
          post.node.categories.forEach((cat) => {
            postCats.push(cat.id)
          });
          if (postCats.indexOf(this.category) > -1) {
            this.catPosts.push(post);
          }
          if (this.catPosts.length > 3) {
            this.catPosts = this.catPosts.slice(0, 3);
          }
        });
      },
      hideDropdown: function() {
        this.$emit('hideDropdown');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dropdown {
    background: rgba(0, 0, 0, 0.9);
    position: absolute;
    width: 100vw;
    left: -80px;
    top: 43px;
    z-index: 100;
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
        h3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%);
          font-size: 26px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
      }
      &.search {
        justify-content: space-between;
        li {
          width: 48%;
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
        flex-shrink: 0;
        text-decoration: none;
        &.read-more {
          text-decoration: underline;
        }
      }
    }  
</style>