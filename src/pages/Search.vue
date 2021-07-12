<template>
  <Layout class="interior">
    <div>
      <section>
        <h1>({{searchResults.length}}) result<span v-if="searchResults.length > 1">s</span> for: "{{this.searchingBy}}"</h1>
        <SearchPostList :posts="searchResults" />
        <div class="no-results" v-if="searchResults.length == 0">Sorry, no posts were found</div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query {
  allWordPressPost {
    edges {
      node {
        id
        title
        path
        excerpt
        categories {
          title
          slug
        }
        featuredMedia {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
}
</page-query>

<script>
import SearchPostList from '~/components/SearchPostList.vue'
import Flexsearch from 'flexsearch'

export default {
  data() {
    return {
      index: null,
      searchingBy: '',
      searchResults: {},
      validPosts: []
    }
  },
  components: {
    SearchPostList
  },
  metaInfo: {
    title: 'S\'able Labs'
  },
  beforeRouteUpdate(to, from, next) {
    this.searchingBy = to.query.s;
    next();
  },
  created() {
    this.searchingBy = this.$route.query.s;
    this.index = new Flexsearch({
      tokenize: "forward",
      doc: {
        id: "id",
        field: [
          "title",
          "excerpt",
          "categories"
        ]
      }
    });
    this.validPosts = this.$page.allWordPressPost.edges.filter(item => {
      return item.node.categories.some(cat => {
        return cat.slug != 'homepage-settings';
      });
    });
    this.index.add(this.validPosts.map(e => {
      return e.node;
    }));
  },
  mounted() {
    this.getSearchResults();
  },
  watch: {
    searchingBy: function() {
      this.getSearchResults();
    }
  },
  methods: {
    getSearchResults: function() {
      this.searchingBy = this.$route.query.s;
      var that = this;
      if (this.index === null || this.searchingBy.length < 3) return [];
      this.searchResults = this.index.search({
        query: this.searchingBy,
        limit: 60
      }, function(results) {
        return results
      });
      this.$forceUpdate();
    }
  }
}
</script>
