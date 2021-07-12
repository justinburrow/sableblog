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
        <a href="Coupledom with Idris and Sabrina Elba Audiobook | Idris Elba, Sabrina Elba | Audible.co.uk" target="_blank" class="button__primary">Read About Coupledom ></a>
      </div>
    </div>

   <div class="whats-trending">
      <h3>what's trending</h3>
      <ul class="trending-posts">
        <agile :options="trendingPostOptions">
          <li v-for="post in $page.allWordPressPost.edges" :post="post.node">
            <TrendingFeatures :post="post.node" />
          </li>
        </agile>
      </ul>


    <div class="porte-noire">
      <a href="https://www.portenoire.co.uk/" target="_blank">
        <g-image src="~/assets/images/porte-noire.gif" alt="Porte Noire Chmapagne" width="546" height="182"></g-image>
      </a>
    </div>
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
          tags {
            title
          }
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

import HomePost from '~/components/HomePost.vue';
import TrendingFeatures from '~/components/TrendingFeatures.vue'
import { VueAgile } from 'vue-agile';

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
    TrendingFeatures,
    agile: VueAgile
  },
  data() {
    return {
      filteredPosts: [],
      uniquePosts: [],
      isMobile: null,
      trendingPostList: [],
      trendingPostOptions: {
        dots: false,
        mobileFirst: true,
        speed: 3000,
        slidesToShow: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              initialSlide: 0,
            }
          },
          {
            breakpoint: 1023,
              settings: {
                initialSlide: .25,
                slidesToShow: 3.5,
            }
          }
        ]
      }
    }
  },
  methods: {
    getTrendingPosts() {
      let that = this;
      this.$page.allWordPressPost.edges.filter(function(post) {
        post.node.tags.filter(function(tag) {
          if (tag == 'trending' || 'Trending') {
            that.trendingPostList.push(post);
          }
        });
      });
    },
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
    },
    countLines() {
      var headers = document.querySelectorAll('.post h3');
      headers.forEach(function(el) {
        let divHeight = el.offsetHeight;
        let divStyles = window.getComputedStyle(el);
        let lineHeight = divStyles.getPropertyValue("line-height").match(/\d+/)[0];
        var padding_top = parseInt(divStyles.getPropertyValue("padding-top"));
        var padding_bottom = parseInt(divStyles.getPropertyValue("padding-bottom"));
        divHeight = divHeight - padding_top - padding_bottom;
        let lines = Math.floor(divHeight / lineHeight);
        if (lines > 2) {
          el.closest('.post').classList.add('long-title');
        } else if (lines < 2) {
          el.closest('.post').querySelector('.image').style.paddingBottom = '40%';
        }
      })
   }
  },
  mounted() {
    this.filterPosts();
    this.getTrendingPosts();
    this.uniquePosts = this.uniquePostFilter(this.filteredPosts, post => post.node.id);
    this.uniquePosts = this.uniquePosts.slice(0, 9);
    this.trendingPostList = this.uniquePostFilter(this.trendingPostList, post => post.node.id);
    this.trendingPostList = this.trendingPostList.slice(0, 5);
    this.countLines();
  }
}
</script>
