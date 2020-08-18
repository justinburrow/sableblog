<template>
  <Layout>
    <section class="featured-posts">
      <h3>Features</h3>
        <ul class="post-list">
          <li v-for="cat in $page.allWordPressCategory.edges" :key="cat.node.id" v-if="cat.node.count > 0">
            <HomePost :post="newestPost(cat.node.id)" />
          </li>
        </ul>
    </section>
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
  components: {
    HomePost
  },
  metaInfo: {
    title: 'S\'able Labs'
  },
  mounted() {
    /*let flockler = document.createElement('script');
    flockler.setAttribute('src', 'https://flockler.embed.codes/KAn5xj');
    flockler.setAttribute('async', true);
    document.head.appendChild(flockler);*/
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
</script>s

<style lang="scss" scoped>
  .featured-posts {
    margin: 60px 0 0 0;
    border-bottom: 8px solid #f2f2f2;
    h3 {
      text-align: center;
      text-transform: uppercase;
      font-family: 'acumin-pro-extra-condensed', 'Helvetica Neue', sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 4rem;
      letter-spacing: 1px;
    }
  }
  .post-list {
    padding: 0;
    list-style-type: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: $breakpoint-md) {
      margin-top: 7vw;
    }
    li {
      width: calc(33% - 13px);
      margin-bottom: 50px;
      @media screen and (max-width: $breakpoint-lg) {
        width: calc(50% - 15px);
      }
      @media screen and (max-width: $breakpoint-md) {
        width: calc(100%);
      }
    }
  }
</style>
