<template>
  <Layout>
    <section class="search-results">
      <h1>Searching For: "{{this.searchingBy}}"</h1>
      <ul class="post-list">
        <li v-for="post in results" class="post" :key="post.id" v-if="results.length > 0">
          <HomePost :post="post" />
        </li>
        <li v-if="results.length == 0">Sorry, no posts were found</li>
      </ul>

    </section>
  </Layout>
</template>

<page-query>
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
          slug
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
</page-query>

<script>
import HomePost from '~/components/HomePost.vue'

export default {
  data() {
    return {
      searchingBy: this.$store.searchQuery,
      results: []
    }
  },
  components: {
    HomePost
  },
  metaInfo: {
    title: 'S\'able Labs'
  },
  filters: {
    lowercase: function (val) {
      return val.toLowerCase();
    }
  },
  beforeMount() {

  },
  beforeRouteUpdate(to, from, next) {

  },
  mounted() {
    this.$page.allPosts.edges.forEach((post) => {
      if (((post.node.title.includes(this.searchingBy)) || (post.node.excerpt.includes(this.searchingBy))) && !post.node.categories[0].slug.includes('homepage-hero-banners')) {
        this.results.push(post);
      }
    })
  },
  computed: {

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
    margin: 60px 0 0 0;
    padding: 0;
    list-style-type: none;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width: $breakpoint-md) {
      margin-top: 7vw;
    }
    li {
      margin: 0;
      padding: 0;
      width: calc(33% - 15px);
      .image {
        position: relative;
        padding-top: 40%;
        img {
          width: 100%;
          max-width: 100%;
          position: absolute;
          top: 0;
          left: 0;
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
}
</style>
