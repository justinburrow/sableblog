<template>
  <Layout>
    <div class="header">
      <img :src="$page.categoryImages.acf.mainImage" :alt="$page.wordPressCategory.title">
      <div class="caption">
        <h1>{{ $page.wordPressCategory.title }}</h1>
        <h2>{{ $page.wordPressCategory.content }}</h2>
      </div>
    </div>

    <div class="catPostList">
      <ul class="post-list" :class="{needSpacer: 'addSpacer'}">
        <li v-for="{ node } in $page.wordPressCategory.belongsTo.edges" :key="node.id" :class="$page.wordPressCategory.title | lowercase">
          <MainPost :post="{ node }" />
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
    id
    content
    belongsTo(page: $page, perPage: 30) @paginate {
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
  categoryImages(id: $id) {
    acf {
      mainImage
    }
  }
}

</page-query>

<script>
import { Pager } from 'gridsome'
import MainPost from '~/components/MainPost.vue'

export default {
  data () {
    return {
      nextCat: {}
    }
  },
  components: {
    Pager,
    MainPost
  },
  mounted() {

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
