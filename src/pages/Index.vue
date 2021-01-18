<template>
  <Layout class="interior">
    <div class="interior">
      <section class="featured-posts">
          <ul>
            <span v-if="!isMobile" class="post-list">
              <li v-for="(post, index) in this.uniquePosts" :key="post.id" v-bind:class="{'wide-banner': index == 6}">
                <div class="coupledom-movement only-desktop" v-if="!isMobile && index == 6">
                  <button><a href="/coupledom/">Read More</a></button>
                </div>
                <HomePost v-else :post="post"/>
              </li>
            </span>

          <span v-if="isMobile" class="post-list">
            <li v-for="(post, index) in this.uniquePosts" :key="post.id" v-bind:class="{'wide-banner': index == 8}">
              <div class="coupledom-movement only-mobile" v-if="isMobile && index == 8">
                <button><a href="/coupledom/">Read More</a></button>
              </div>
              <HomePost v-else :post="post"/>
            </li>
          </span>
        </ul>
      </section>
    </div>
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

export default {
  metaInfo() {
    return {
      title: this.siteName,
      titleTemplate: ''
    }
  },
  components: {
    HomePost
  },
  data() {
    return {
      filteredPosts: [],
      uniquePosts: []
    }
  },
  methods: {
    filterPosts() {
      let that = this;
      this.$page.allWordPressPost.edges.filter(function(post) {
        post.node.categories.filter(function(cat) {
          if (cat.slug !== 'homepage-hero-banners' && cat.slug !== 'uncategorized') {
            that.filteredPosts.push(post);
          }
        })
      })
    },
    uniquePostFilter(data, key) {
      console.log('wee');
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
    this.uniquePosts.slice(0, 20);
  }
}
</script>

<style lang="scss" scoped>
  .featured-posts {
    margin: 48px 0 0 0;
    @media screen and (max-width: $breakpoint-md) {
      margin: 5.3vw 0 0 0;
    }
    h3 {
      text-align: center;
      text-transform: uppercase;
      font-family: 'acumin-pro-extra-condensed', 'Helvetica Neue', sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 45px;
      letter-spacing: 1px;
      @media screen and (max-width: $breakpoint-md) {
        font-size: 9vw;
      }
    }
    .coupledom-movement {
      width: 100%;
      max-width: 100%;
      padding-top: 23%;
      background: url(~@/assets/images/coupledom-movement-dt.jpg) no-repeat;
      background-size: contain;
      background-position: center top;
      flex: 0 0 1;
      position: relative;
      @media screen and (max-width: $breakpoint-md) {
        background: url(~@/assets/images/coupledom-movement-mob.jpg) no-repeat;
      }
      button {
        display: block;
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        bottom: 18%;
        font-size: 25px;
        letter-spacing: 2px;
      }
    }
  }
</style>
