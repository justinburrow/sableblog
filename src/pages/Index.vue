<template>
  <Layout>
    <section class="featured-posts">
      <h3>Features</h3>
        <ul class="post-list">
          <li v-for="node in $page.allWordPressPost.edges" :key="node.node.id" :class="node.node.categories[0].title | lowercase">
            {{ node.id }}
            <HomePost :post="node" />
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
          path
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
  mounted() {
    let flockler = document.createElement('script');
    flockler.setAttribute('src', 'https://flockler.embed.codes/KAn5xj');
    flockler.setAttribute('async', true);
    document.head.appendChild(flockler);
  }
}
</script>s

<style lang="scss">
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
