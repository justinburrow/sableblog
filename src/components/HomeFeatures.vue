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
    <div class="home-features">
      <div class="content">
        <div class="video">
          <video poster="~@/assets/images/video-poster.jpg" controls playsinline><source src="~@/assets/video/sable-labs-home-video.mp4" type="video/mp4" /></video>
          <h4>Our Story</h4>
        </div>
        <div class="coupledom">
          <div class="coupledom-image">
            <div class="coupledom-content">
              <h3>Coupledom Movement</h3>
              <h4>Coupledom / (‘Kapaldam)</h4>
              <p>The realm of shared experiences between two partners in life or business, creating extraordinary outcomes.</p>
              <g-link to="/coupledom"><a href="#">Read More</a></g-link>
            </div>
          </div>
          <h4>Coupledom Around The World</h4>
        </div>
      </div>
    </div>
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
    background-color: #f2f2f2;
    padding: 25px 0;
    box-shadow: 0px 10px 14px 0px rgba(0,0,0,0.3);
    .content, .titles {
      display: flex;
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      justify-content: space-between;
      flex-wrap: wrap;
      @media screen and (max-width: 1599px) {
        padding: 0 20px;
      }
      div, h4 {
        width: calc(50% - 15px);
        @media screen and (max-width: $breakpoint-xl) {
          width: 100%;
        }
      }
      .video {
        position: relative;
        video {
          object-fit: fill;
          display: block;
          width: 100%;
        }
        @media screen and (max-width: $breakpoint-xl) {
          margin-bottom: 5vw;
        }
      }
      .coupledom {
        .coupledom-image {
          background-image: url('~@/assets/images/coupledom-background.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          width: 100%;
          padding-top: 56%;
          .coupledom-content {
            font-family: 'acumin-pro', 'Helvetica Neue', sans-serif;
            font-weight: 300;
            font-style: normal;
            text-align: center;
            padding: 0 18px;
            width: 100%;
            color: white;
            position: absolute;
            top: 50%;
            transform: translateY(-45%);
          }
          h3, h4 {
            margin: 0;
            padding: 0;
          }
          h3 {
            font-family: 'acumin-pro-extra-condensed', 'Helvetica Neue', sans-serif;
            font-weight: 600;
            font-style: normal;
            text-transform: uppercase;
            font-size: 44px;
            letter-spacing: 1px;
            @media screen and (max-width: $breakpoint-md) {
              font-size: 7vw;
            }
          }
          h4 {
            font-family: 'acumin-pro', 'Helvetica Neue', sans-serif;
            width: 100%;
            font-size: 16px;
            font-weight: 300;
            text-transform: none;
            letter-spacing: .5px;
            margin-bottom: 8px;
            @media screen and (max-width: $breakpoint-md) {
              font-size: 3vw;
            }
          }
          p {
            max-width: 400px;
            margin: 0 auto 45px auto;
            @media screen and (max-width: $breakpoint-md) {
              margin-bottom: 4vw !important;
              font-size: 3vw !important;
            }
          }
          a {
            display: inline-block;
            text-decoration: none;
            font-family: 'acumin-pro-condensed', 'Helvetica Neue', sans-serif;
            font-weight: 600;
            background: linear-gradient(0deg, #18413c 50%, #224c45 50%);
            color: white;
            border-radius: 0;
            border: none;
            text-transform: uppercase;
            font-size: 20px;
            padding: 3px 25px;
            @media screen and (max-width: $breakpoint-md) {
              font-size: 3.2vw;
              padding: 1vw 5vw;
            }
          }
        }
      }
      h4 {
        text-transform: uppercase;
        font-family: 'acumin-pro-condensed', 'Helvetica Neue', sans-serif;
        font-weight: 300;
        font-style: normal;
        margin: 5px 0 0 0;
        padding: 0;
        font-size: 15px;
      }
    }
  }

</style>
