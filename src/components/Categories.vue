<template>
  <div class="category-holder">
    <ul class="categories">
        <li v-for="cat in $static.categories.edges" :key="cat.id">
          <div class="header-cat" @mouseover="showCatPosts(cat.node.id, cat.node.title, cat.node.path)">
              <div class="title" @click="$actions.hideDropdown()"><g-link :to="cat.node.path">{{cat.node.title}}</g-link></div>
          </div>  
        </li>
    </ul>
    <Dropdown :current-cat="this.currentCat" :current-cat-title="this.currentCatTitle" :cat-path="this.catPath" :dropdown-state="$store.dropdownShow" @hideDropdown="$actions.hideDropdown()" :search-results="this.searchResultPosts" :show-search="showSearch" :search-term="query"/>
  </div>
    
</template>

<static-query>
    query {
        categories: allWordPressCategory(order: ASC) {
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
import Dropdown from "~/components/Dropdown.vue"
export default {
    name: 'Categories',
    components: {
      Dropdown
    },
    props: ['searchResults', 'searchTerm'], 
    data () {
      return {
        currentCat: Number,
        currentCatTitle: '',
        searchResultPosts: [],
        query: this.searchTerm,
        showSearch: false,
        catPath: ''
      }
    },
    methods: {
      showCatPosts(catId, catTitle, path) {
        this.showSearch = false;
        this.currentCat = catId;
        this.currentCatTitle = catTitle;
        this.$actions.showDropdown();
        this.catPath = path;
       } 
    },
    watch: {
      searchResults(results) {
        this.searchResultPosts = results;
        if (results.length > 0) {
          this.showSearch = true;
          this.$actions.showDropdown();
        }
      },
     searchTerm(query) {
       this.query = query;
        if (query.length >= 3) {
          this.$actions.showDropdown();
        }
        if (query == '') {
          this.$actions.hideDropdown();
          this.showSearch = false;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .category-holder {
    position: relative;
  }
  .categories {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-between; 
      li {
        list-style-type: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 14px;
        position: relative;
        a {
          color: black;
          text-decoration: none;
        }
        &:after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: black;
          margin-top: 3px;
          transition: width 0.3s ease;
          position: absolute;
          bottom: -4px;
        }
        &:hover {
          &:after {
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          background: black;
          margin-top: 3px;
        }
        }
      }
  }
</style>