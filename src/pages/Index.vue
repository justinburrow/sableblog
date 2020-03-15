<template>
  <Layout>
    <div class="home-post">
        <ul class="post-list">
          <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
            <HomePost :post="node" />
          </li>
        </ul>
    </div>
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
</style>
