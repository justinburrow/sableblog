<template>
  <Layout class="interior">
    <div class="interior">
      <section class="search-results">
        <h1>Searching For: "{{this.searchingBy}}"</h1>
        <ul class="post-list">
          <li v-for="post in searchResults" class="post" :key="post.id" v-if="searchResults.length > 0">
            <SearchPost :post="post" />
          </li>
          <li class="holder" v-if="searchResults % 3 !== 0"></li>
          <li class="no-results" v-if="searchResults.length == 0">Sorry, no posts were found</li>
        </ul>
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
        }
      }
    }
  }
}
</page-query>

<script>
import SearchPost from '~/components/SearchPost.vue'
import Flexsearch from 'flexsearch'

export default {
  data() {
    return {
      index: null,
      searchingBy: '',
      searchResults: {}
    }
  },
  components: {
    SearchPost
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
    this.index.add(this.$page.allWordPressPost.edges.map(e => {
      let validPost = 0;
      e.node.categories.forEach(function(s) {
        if (s.slug == 'homepage-hero-banners' || 'uncategorized') {
          validPost++;
        }
      })
      if (validPost == 0) {
        return e.node;
      } else {
        return false;
      }
    }));
    console.log(this.index);
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

<style lang="scss">
.search-results {
  h1 {
    margin-top: 30px;
    font-family: 'acumin-pro-extra-condensed';
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
  }
  .post-list {
    li {
      &.no-results {
        text-align: center;
      }
    }

    @media screen and (max-width: $breakpoint-lg) {
      margin-bottom: 7vw;
      padding-bottom: 7vw;
    }
    .read-more a {
      color: white;
    }
  }
}
</style>
