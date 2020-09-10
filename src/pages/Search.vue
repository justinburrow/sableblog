<template>
  <Layout class="interior">
    <div class="interior">
      <section class="search-results">
        <h1>Searching For: "{{this.searchingBy}}"</h1>
        <ul class="post-list">
          <li v-for="post in searchResults" class="post" :key="post.id" v-if="searchResults.length > 0">
            <SearchPost :post="post" />
          </li>
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
      searchingBy: ''
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
  mounted() {
    this.searchingBy = this.$route.query.s;
    this.index = new Flexsearch({
      tokenize: "forward",
      doc: {
        id: "id",
        field: [
          "title",
          "excerpt"
        ]
      }
    });
    this.index.add(this.$page.allWordPressPost.edges.map(e => e.node));
  },
  computed: {
    searchResults() {
      if (this.index === null || this.searchingBy.length < 3) return [];
      return this.index.search({
        query: this.searchingBy,
        limit: 15
      })
    }
  }
}
</script>

<style lang="scss">
.search-results {
  h1 {
    margin-top: 30px;
    font-family: 'acumin-pro-extra-condensed';
    font-size: 1.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    border-bottom: 1px solid black;
    padding-bottom: 5px;
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
