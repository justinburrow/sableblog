<template>
  <div>
    <div class="hero-banners">

      <!-- desktop banners -->
      <div v-if="isMobile == false">
        <agile :autoplay="true" :nav-buttons="false" :speed="500" :autoplay-speed="8000" :dots="true">
          <div v-for="(banner, index) in $static.allWordPressCategory.edges[0].node.belongsTo.edges">
            <a :href="banner.node.acf.bannerLink" v-if="banner.node.acf.bannerLink"><img :src="banner.node.acf.dtBannerImage" /></a>
            <img v-else :src="banner.node.acf.dtBannerImage" />
          </div>
        </agile>
      </div>

      <div v-else>
        <!-- mobile banners -->
        <agile :autoplay="true" :nav-buttons="false" :speed="500" :autoplay-speed="8000" :dots="true">
          <div v-for="(banner, index) in $static.allWordPressCategory.edges[0].node.belongsTo.edges" v-if="isMobile">
            <a :href="banner.node.acf.bannerLink" v-if="banner.node.acf.bannerLink"><img :src="banner.node.acf.mobBannerImage" /></a>
            <img v-else :src="banner.node.acf.mobBannerImage" />
          </div>
        </agile>
      </div>

    </div>
    <a href="/coupledom/" class="home-features">
      Coupledom Is
    </a>
  </div>
</template>

<static-query>
  query {
    allWordPressCategory(order: ASC, filter: {slug: {eq: "homepage-hero-banners"}}) {
      edges {
        node {
          title
          slug
          belongsTo {
            edges {
              node {
                ... on WordPressPost {
                  acf {
                    dtBannerImage
                    mobBannerImage
                    bannerLink
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</static-query>


<script>
import { VueAgile } from 'vue-agile'

export default {
  name: 'HomeFeatures',
  components: {
    agile: VueAgile
  },
  data() {
    return {
      isMobile: this.$store.isMobile
    }
  }
}
</script>

<style lang="scss">
  .hero-banners {
    width: 100%;
    max-width: 100%;
    margin: 0 auto 25px auto;
    @media screen and (max-width: $breakpoint-md) {
      margin-bottom: 0;
    }
    img {
      width: 100vw;
      height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  }
  .agile__dots {
    @media screen and (max-width: $breakpoint-md) {
      margin: 2vw 0;
      padding: 0;
    }
    li {
      margin-bottom: 0;
      margin-right: 8px;
      &:last-child {
        margin-right: 0;
      }
    }
    button {
      border-radius: 50%;
      height: 12px;
      width: 12px;
      line-height: 12px;
      border: none;
      background: rgba(0,0,0,0.2);
      margin: 0;
      padding: 0;
      @media screen and (max-width: $breakpoint-md) {
        height: 2.6vw;
        width: 2.6vw;
      }
    }
    .agile__dot--current {
      button {
        background: rgba(0,0,0,0.7);
      }
    }
  }
  .home-features {
    display: block;
    position: relative;
    padding-top: 15%;
    background-image: url(~@/assets/images/coupledom-is.gif);
    background-size: cover;
    background-position: center center;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  }

</style>
