<template>
  <div class="category interior">
  </div>


</template>

<static-query>
    query {
        categories: allWordPressCategory(order: ASC, filter: { slug: { ne: "homepage-hero-banners"}}) {
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
    name: 'Categories',
    components: {

    },
    props: ['searchResults', 'searchTerm'],
    data () {
      return {
        searchResultPosts: [],
        query: this.searchTerm,
        showSearch: false
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
