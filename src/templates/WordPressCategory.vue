<template>
  <Layout>
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
    margin-top: 30px;
    font-family: 'acumin-pro-extra-condensed';
    font-size: 1.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    border-bottom: 1px solid black;
    padding-bottom: 5px;
  }
  a {
    color: black;
  }
}
.post-list {
    margin: 60px 0 0 0;
    padding: 0;
    list-style-type: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    @media screen and (max-width: $breakpoint-md) {
      margin-top: 7vw;
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: $breakpoint-sm) {
      margin-top: 7vw;
      grid-template-columns: repeat(1, 1fr);
    }
    li {
      margin: 0;
      padding: 0;
      width: 100%;
      margin-bottom: 50px;
      @media screen and (max-width: $breakpoint-lg) {
        margin-bottom: 7vw;
        padding-bottom: 7vw;
      }
    }
  }
</style>
