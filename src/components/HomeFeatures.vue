<template>
  <div>

    <div class="hero-banners">
<!-- HARDCODING FOR NOW
      <div v-if="!isMobile">

      </div>


      <div v-if="isMobile">
        <agile :autoplay="true" :nav-buttons="false" :speed="500" :autoplay-speed="8000" :dots="false">
          <div v-for="(banner, index) in $static.allWordPressCategory.edges[0].node.belongsTo.edges">
            <a :href="banner.node.acf.bannerLink" v-if="banner.node.acf.bannerLink"><img :src="banner.node.acf.mobBannerImage" /></a>
            <img v-else :src="banner.node.acf.mobBannerImage" />
          </div>
        </agile>
      </div>
    </div>
  -->

  <div class="announcement">

  </div>

  <div class="desktop-banner" v-if="!isMobile">
    <agile :autoplay="true" :nav-buttons="true" :speed="500" :autoplay-speed="10000" :dots="false">
      <section>
        <div class="headlines">
          <h1 class="black">We believe that the greatest outcomes are created when people come together</h1>
          <h2 class="black">An experience for partnerships of all kinds</h2>
          <a href="#" class="button__primary">Read About Coupledom ></a>
        </div>
        <img src="https://blog.sablelabs.co/wp-content/uploads/2021/06/banner-1-dt-scaled.jpg" />
      </section>
      <section>
        <div class="headlines">
          <h1 class="white">Head to Audible now to listen to our brand new podcast; Coupledom</h1>
          <a href="#" class="button__primary">Listen Now ></a>
        </div>
        <img src="https://blog.sablelabs.co/wp-content/uploads/2021/06/banner-2-dt-scaled.jpg" />
      </section>
    </agile>
  </div>

  <div class="mobile-banner" v-if="isMobile">

  </div>

    <div class="marquee">
      <dynamic-marquee direction="row">
        <div class="text">Subscribe below for more updates from our S'able Labs Team</div>
      </dynamic-marquee>
    </div>

  </div>
</div>
</template>

<!--<static-query>
  query {
    allWordPressPage(filter: {slug: {eq: "homepage-settings"}}) {
      edges {
        node {
          acf {
            announcement
            announcementLink
            carouselImage1Desktop
            carouselImage1Mobile
            carousel1TextColor
            carousel1Headline
            carousel1Subheading
            carousel1ButtonText
            carousel1ButtonLink
            carouselImage2Desktop
            carouselImage2Mobile
            carousel2TextColor
            carousel2Headline
            carousel2Subheading
            carousel2ButtonText
            carousel2ButtonLink
          }
        }
      }
    }
  }

</static-query>-->


<script>
import { VueAgile } from 'vue-agile';
import DynamicMarquee from 'vue-dynamic-marquee';
import {isMobile} from 'mobile-device-detect';

export default {
  name: 'HomeFeatures',
  data() {
    return {
      isMobile
    }
  },
  components: {
    agile: VueAgile
  }
}
</script>
