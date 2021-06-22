<template>
  <Layout class="interior">
    <!--<div class="category interior">
      <h1>{{ $page.wordPressCategory.title }}</h1>
      <ul class="post-list" :class="{needSpacer: 'addSpacer'}">
        <li v-for="{ node } in $page.wordPressCategory.belongsTo.edges" :key="node.id" :class="$page.wordPressCategory.title | lowercase">
          <HomePost :post="{ node }" />
        </li>
      </ul>
      <Pager :info="$page.wordPressCategory.belongsTo.pageInfo"/>
    </div>-->

    <div class="header">
      <img src="" alt="">
      <div class="caption">
        <h1></h1>
        <h2></h2>
      </div>
    </div>


  </Layout>
</template>

<page-query>
query WordPressCategory ($id: ID!, $page: Int) {
  wordPressCategory(id: $id) {
    title
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
}
</page-query>

<script>
import { Pager } from 'gridsome'
import HomePost from '~/components/HomePost.vue'

export default {
  data () {
    return {
      needSpacer: false
    }
  },
  components: {
    Pager,
    HomePost
  },
  mounted() {
    if (this.$page.wordPressCategory.belongsTo.edges % 3 != 0) {
      this.needSpacer = true;
    }
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
