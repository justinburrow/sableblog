<template>
  <Layout class="interior">
    <ul class="home-posts">
      <li v-for="post in $page.allWordPressPost.edges" class="post">
        <HomePost :post="post.node" />
      </li>
    </ul>

    <div class="coupledom_feature">
      <div class="content">
        <h5>Coupledom / (‘Kapaldam)</h5>
        <h4>THE COUPLEDOM MOVEMENT</h4>
        <p>The realm of shared experiences between two partners in life or business, creating extraordinary outcomes.</p>
        <a href="#" class="button__primary">Read About Coupledom ></a>
      </div>
    </div>

    <div class="whats-trending">
      <h3>what's trending</h3>
    </div>

  </Layout>
</template>

<page-query>
  query Home {
    allWordPressPost(sortBy: "date", order: DESC, limit: 9) {
      edges {
        node {
          id
          title
          path
          date
          excerpt
          slug
          categories {
            id
            title
            slug
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
import {isMobile} from 'mobile-device-detect'

export default {
  metaInfo() {
    return {
      title: this.siteName,
      titleTemplate: '',
      postCount: this.$page.allWordPressPost.edges.length,
    }
  },
  components: {
    HomePost,
  },
  data() {
    return {
      filteredPosts: [],
      uniquePosts: [],
      isMobile: null,
    }
  },
  methods: {
    filterPosts() {
      let that = this;
      this.$page.allWordPressPost.edges.filter(function(post) {
        post.node.categories.filter(function(cat) {
          if (cat.slug !== 'Uncategorized') {
            that.filteredPosts.push(post);
          }
        })
      })
    },
    uniquePostFilter(data, key) {
      return [
        ...new Map(
          data.map(x => [key(x), x])
        ).values()
      ]
    }
  },
  mounted() {
    this.filterPosts();
    this.uniquePosts = this.uniquePostFilter(this.filteredPosts, post => post.node.id);
    this.uniquePosts = this.uniquePosts.slice(0, 9);
  }
}
</script>
