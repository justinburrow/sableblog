<template>
  <Layout class="interior">
    <div class="interior">
      <section class="featured-posts">
          <ul class="post-list">
            <li v-for="post in this.filteredPosts" :key="post.id">
              <HomePost :post="post"/>
            </li>
          </ul>
      </section>
    </div>
  </Layout>
</template>
e
<page-query>
  query Home {
    allWordPressPost(sortBy: "date", order: DESC) {
      edges {
        node {
          id
          title
          path
          date
          excerpt
          categories {
            id
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
  metaInfo() {
    return {
      title: this.siteName,
      titleTemplate: ''
    }
  },
  components: {
    HomePost
  },
  data() {
    return {
      filteredPosts: []
    }
  },
  methods: {
    filterPosts() {
      let that = this;
      this.$page.allWordPressPost.edges.filter(function(post) {
        if (post.node.categories.filter(function (cat) {
          if (cat.slug !== 'homepage-hero-banners' && cat.slug !== 'uncategorized') {
            that.filteredPosts.push(post)
          }
        }));
      });
      this.filteredPosts = this.filteredPosts.slice(0, 20);
    },
  },
  mounted() {
    this.filterPosts();
    console.log(this.filteredPosts);
  }
}
</script>

<style lang="scss" scoped>
  .featured-posts {
    margin: 48px 0 0 0;
    @media screen and (max-width: $breakpoint-md) {
      margin: 5.3vw 0 0 0;
    }
    h3 {
      text-align: center;
      text-transform: uppercase;
      font-family: 'acumin-pro-extra-condensed', 'Helvetica Neue', sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 45px;
      letter-spacing: 1px;
      @media screen and (max-width: $breakpoint-md) {
        font-size: 9vw;
      }
    }
  }
</style>
