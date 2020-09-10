<template>
  <Layout class="interior">
    <div class="category interior">
      <h1>{{ $page.wordPressCategory.title }}</h1>
      <ul class="post-list">
        <li v-for="{ node } in $page.wordPressCategory.belongsTo.edges" :key="node.id" :class="$page.wordPressCategory.title | lowercase">
          <HomePost :post="{ node }" />
        </li>
      </ul>
      <Pager :info="$page.wordPressCategory.belongsTo.pageInfo"/>
    </div>
  </Layout>
</template>

<page-query>
query WordPressCategory ($id: ID!, $page: Int) {
  wordPressCategory(id: $id) {
    title
    belongsTo(page: $page, perPage: 10) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
            id
            title
            path
            excerpt
            featuredMedia {
              sourceUrl
              caption
              altText
            }
        	}
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import HomePost from '~/components/HomePost.vue'

export default {
  components: {
    Pager,
    HomePost
  },
  metaInfo () {
    return {
      title: this.$page.wordPressCategory.title
    }
  },
    filters: {
    lowercase: function (val) {
      return val.toLowerCase();
    }
  }
}
</script>

<style lang="scss">
.category {
  h1 {
    margin-top: 24px;
    font-family: 'acumin-pro-extra-condensed';
    font-weight: 500;
    font-size: 1.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    border-bottom: 1px solid black;
    padding-bottom: 5px;
    margin-bottom: 30px;
    color: black;
    @media screen and (max-width: $breakpoint-md) {
      font-size: 5vw;
      margin-bottom: 5vw;
    }
  }
  a {
    color: black;
  }
}
</style>
