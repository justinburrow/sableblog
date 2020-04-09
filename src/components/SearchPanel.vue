<template>
  <transition name="search" v-on:after-enter="openPanel" v-on:after-leave="closePanel">
    <div class="search-panel only-mobile-tablet" v-if="$store.searchOpen" v-click-outside="closeMenu" v-scroll-lock="$store.searchOpen">
      <div class="close-search" @click="$actions.closeSearch()">  
        <img src="~@/assets/images/close-icon.svg" alt="Close" />
      </div>
      <div class="container">
        <div class="search">
          <input id="mobile-search" type="text" v-model="searchTerm" class="input" placeholder="Search">
        </div>

        <ul class="post-list" v-if="this.showSearchResults == true">
          <li v-for="post in searchResultPosts" class="post" :key="post.id"> 
            <div class="image">
              <g-link :to="post.path"><g-image :src="post.featuredMedia.sourceUrl"></g-image></g-link>
            </div>
            <div class="post-info">
            <g-link :to="post.path"><h4>{{post.title}}</h4></g-link>
              <g-link :to="post.path" class="read-more">Read More</g-link> 
            </div>
          </li>
          <li v-if="this.searchResultPosts == 0">Sorry, no posts were found</li>
        </ul>

      </div>
    </div>
  </transition>
</template>

<static-query>
query {
  allPosts: allWordPressPost {
    edges {
      node {
        id
        title
        path
        dateGmt
        excerpt
        categories {
          title
        }
        featuredMedia {
          sourceUrl
          altText
          caption
        }
      }
    }
  }
}
</static-query>

<script>
import ClickOutside from 'vue-click-outside'
import Flexsearch from 'flexsearch'

export default {
  name: 'SearchPanel',
  data() {
    return {
      searchResultPosts: [],    
      searchTerm: '',
      showSearchResults: false
    }
  },
  beforeMount() {
    this.index = new Flexsearch({
      tokenize: 'forward',
      doc: {
        id: 'id',
        field: [
          'title',
          'excerpt'
        ]
      }
    })
    this.index.add(this.$static.allPosts.edges.map(e => e.node));
  },
  methods: {
    closeMenu: function(el) {
      if (this.open == true) {
        this.$actions.closeSearch();
      } else {
        return
      }
    },
    openPanel: function(el) {
      this.open = true;
    },
    closePanel: function(el) {
      this.open = false;
    }
  },
  watch: {
    searchResults(results) {
      this.searchResultPosts = results;
      if (results.length > 0) {
        this.showSearch = true;
      }
    },
    searchTerm(query) {
      this.searchTerm = query;
      if (query.length >= 3) {
        this.showSearchResults = true;
      }
      if (query == '') {
        this.showSearchResults = false;
      }
    }
  },
  computed: {
    searchResults() {
      if (this.index === null || this.searchTerm.length < 3) return [];
      return this.index.search({
        query: this.searchTerm,
        limit: 10
      });
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">
  .search-panel {
    position: absolute;
    top: 0;
    height: 100%;
    background: black;
    box-shadow: -7px 0 5px 0 rgba(0,0,0,0.5);
    z-index: 100;
    right: 0;
    width: 95vw;
    
    &.search-enter-to, &.search-leave {
      transition: right .4s ease-in-out;
    }

    &.search-enter, &.search-leave-to {
      transition: right .4s ease-in-out;
      right: -100vw;
    }

    .close-search {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 10px;
      img {
        filter: invert(1);
        width: 25px;
        @media screen and (max-width: $breakpoint-lg) {
         width: 4vw;
        }
        @media screen and (max-width: $breakpoint-md) {
          width: 4vw;
        }
        @media screen and (max-width: $breakpoint-sm) {
          width: 5vw;
        }
      }
    }
    .container {
      @media screen and (max-width: $breakpoint-lg) {
        margin-top: 12vw;
        padding: 0 4vw;
      }
      @media screen and (max-width: $breakpoint-md) {
        margin-top: 10vw;
      }
      @media screen and (max-width: $breakpoint-sm) {
        margin-top: 18vw;
      }
      .search {
        input {
          border: none;
          border-bottom: 1px solid white;
          width: 100%;
          background: transparent;
          line-height: 1.5;
          color: white;
          letter-spacing: .3vw;
          @media screen and (max-width: $breakpoint-lg) {
            font-size: 5vw;
          }
          @media screen and (max-width: $breakpoint-lg) {
            font-size: 5vw;
          }
          @media screen and (max-width: $breakpoint-md) {
            font-size: 5vw;
          }
        }
      }
    }
    .post-list {
      li {
        width: 70%;
        margin: 0 auto;
        display: block;
        color: white;
        .image a {
          display: block;
          position: relative;
          padding-top: 66%;
          width: 100%;
          img {
            object-fit: contain;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
</style>