<template>
  <Layout>
    <div class="interior">
      <section class="featured-posts">
        <h3>Features</h3>
          <ul class="post-list">
            <li v-for="cat in $page.allWordPressCategory.edges" :key="cat.node.id" v-if="cat.node.count > 0">
              <HomePost :post="newestPost(cat.node.id)" />
            </li>
          </ul>
      </section>
    </div>
  </Layout>
</template>

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
        }
        featuredMedia {
          sourceUrl
          altText
          caption
        }
      }
    }
  }

  allWordPressCategory(order: ASC, filter: { slug: { ne: "homepage-hero-banners"}} ) {
    edges {
      node {
        id
        count
        slug
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
  methods: {
    newestPost(id) {
      const posts = this.$page.allWordPressPost.edges;
      let postArr = [];
      let newestPostContent = posts.find((post) => {
        return post.node.categories[0].id == id;
      });
      return newestPostContent;
    }
  }
}
</script>

<style lang="scss" scoped>
  .featured-posts {
    margin: 60px 0 0 0;
    @media screen and (max-width: $breakpoint-md) {
      margin: 5vw 0 0 0;
    }
    h3 {
      text-align: center;
      text-transform: uppercase;
      font-family: 'acumin-pro-extra-condensed', 'Helvetica Neue', sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 55px;
      letter-spacing: 1px;
      @media screen and (max-width: $breakpoint-md) {
        font-size: 9vw;
      }
    }
  }
</style>
