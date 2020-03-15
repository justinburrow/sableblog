<template>
  <Layout>
    <section class="home-posts">
        <ul class="post-list">
          <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
            <HomePost :post="node" />
          </li>
        </ul>
    </section>
    <section class="instagram">
      <h3>Join the Movement</h3>
    </section>
  </Layout>
</template>

<page-query>
query Home {
  allWordPressPost(limit: 4, sortBy: "date", order: DESC) {
    edges {
      node {
        id
        title
        path
        excerpt
        categories {
          title
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
import HomePost from '~/components/HomePost.vue'

export default {
  components: {
    HomePost
  },
  metaInfo: {
    title: 'S\'able Labs'
  }
}
</script>

<style lang="scss">
  .post-list {
    padding: 0;
    list-style-type: none;
    width: 100%;
    li {
      margin: 0;
      padding: 0;
      margin-bottom: 80px;
      padding-bottom: 80px;
      border-bottom: 1px solid black;
      &:last-child {
        border: none;
      }
    }
  }
  .instagram {
    h3 {
      background: #005851;
      width: 645px;
      margin: 80px auto 20px auto;
      text-transform: uppercase;
      font-size: 15px;
      text-align: center;
      padding: 8px 0 6px 0;
      color: white;
      letter-spacing: 1px;
      font-weight: 300;
    }
  }
</style>
