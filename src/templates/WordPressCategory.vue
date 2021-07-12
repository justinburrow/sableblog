<template>
  <Layout>
    <div class="header">
      <img :src="mainImage" :alt="$page.wordPressCategory.title">
      <div class="caption">
        <h1>{{ $page.wordPressCategory.title }}</h1>
        <h2>{{ $page.wordPressCategory.content }}</h2>
      </div>
    </div>

    <PostList :posts="$page.wordPressCategory.belongsTo.edges"/>

    <!--<div class="catPostList">
      <ul class="post-list">
        <li v-for="{ node } in $page.wordPressCategory.belongsTo.edges" :key="node.id" :class="$page.wordPressCategory.title | lowercase">
          <MainPost :post="{ node }" />
        </li>
      </ul>
      <Pager :info="$page.wordPressCategory.belongsTo.pageInfo"/>
    </div>-->


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
            categories {
              title
              path
            }
            featuredMedia {
              sourceUrl
              caption
              altText
              mediaDetails {
                width
                height
              }
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
import PostList from '~/components/PostList.vue'

export default {
  data () {
    return {
      nextCat: {},
      mainImage: null
    }
  },
  components: {
    Pager,
    PostList
  },
  methods: {
    setCatImage() {
      if (this.$page.categoryImages.acf.mainImage) {
        this.mainImage = this.$page.categoryImages.acf.mainImage;
      } else {
        this.mainImage = null;
      }
    }
  },
  mounted() {
    this.setCatImage();
  },
  beforeRouteUpdate (to, from, next) {
    console.log('wee');
    this.$forceUpdate();
    next();
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
