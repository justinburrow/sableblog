<template>
  <Layout class="page interior">
    <div class="container coupledom">

      <div class="hero" v-if="!isMobile">
        <img src="~@/assets/images/coupledom-page-banner-dt.jpg" alt="Coupledom">
      </div>

      <div class="hero" v-show="isMobile">
        <img src="~@/assets/images/coupledom-page-banner-mob.jpg" alt="Coupledom">
      </div>

      <div class="introduction">
        <div class="content interior">
          <div class="video">
            <video poster="~@/assets/images/coupledom-video-poster.jpg" controls playsinline><source src="~@/assets/video/Sable-Labs-Coupledom-Launch_021420.mp4" type="video/mp4" /></video>
          </div>
          <div class="copy">
            <h2>
              We want to tell the world our story through the voice of the people,<br />because our story isn't just about us. It's about a shared dream<br />and making it real through the power of coupledom.
            </h2>
            <p>
              We're insatiably curious about coupledom -- the realm of shared experiences in life or business.<br />We want to know about people that partner together to make those shared goals become reality.
            </p>
            <p>
              Whether your goals are about romance, business, or life,<br />we want to know.  So, we're asking people to submit videos about their<br />stories and how they make their shared dreams come true through the power of coupledom.
            </p>
            <a class="button" href="/sable_coupledom_instructions_22820.pdf" target="_blank">Get Instructions</a>
            <p class="disclaimer">
              By downloading these instructions, you agree to S'able Labs terms of use,<br />agree to receive emails from S’able Labs, and our <g-link to="/pages/privacy-policy/">privacy</g-link> and <g-link to="/pages/cookie-policy">cookie policy</g-link>
            </p>
          </div>
        </div>

      </div>

      <div class="interior">

        <div class="shared-dreams">
          <h3>Shared Dreams</h3>
          <div class="videos">
            <ClientOnly>
              <hooper :settings="hooperSettings">
                <slide v-for="(video, i) in videos" :key="i" :index="i">
                  <div class="">
                    <div class="video-holder">
                      <iframe :src="'https://www.youtube.com/embed/' + video.id.videoId" frameborder="0" allowfullscreen height="100%" width="100%"></iframe>
                    </div>
                    <p v-html="video.snippet.title"></p>
                  </div>
                </slide>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
              </hooper>
            </ClientOnly>
          </div>
        </div>

      </div>
    </div>
  </Layout>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
import axios from 'axios';

export default {
  metaInfo() {
    return {
      title: 'Coupledom',
      meta: [
        {
          name: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: 'Coupledom | S\'able Labs'
        },
        {
          key: 'twitter:title',
          property: 'twitter:title',
          content: 'Coupledom | S\'able Labs'
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: `We want to tell the world our story through the voice of the people, because our story isn't just about us. It's about a shared dream and making it real through the power of coupledom.`
        },
        {
          key: 'twitter:description',
          property: 'twitter:description',
          content: `We want to tell the world our story through the voice of the people, because our story isn't just about us. It's about a shared dream and making it real through the power of coupledom.`
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: '~@/assets/images/coupledom-hero-background.jpg'
        },
        {
          key: 'twitter:image',
          property: 'twitter:image',
          content: '~@/assets/images/coupledom-hero-background.jpg'
        }
      ]
    }
  },
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  data() {
    return {
      videos: [],
      isMobile: this.$store.isMobile,
      hooperSettings: {
        itemsToShow: 1,
        centerMode: false,
        infiniteScroll: true,
        autoPlay: false,
        mouseDrag: false,
        breakpoints: {
          500: {
            itemsToSlide: 2,
            itemsToShow: 2
          },
          768: {
            itemsToSlide: 3,
            itemsToShow: 3
          },
          1000: {
            itemsToSlide: 4,
            itemsToShow: 4
          },
          1400: {
            itemsToSlide: 5,
            itemsToShow: 5
          }
        }
      }
    }
  },
  async mounted() {
    try {
      const res = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyB20rDjpH2wWyZsGnLCcdANfIgZHjVWaHI&channelId=UCfraKhLpIm5MbXmOeyybf7g&part=snippet,id&order=date&maxResults=50')
      this.videos = res.data.items;
    } catch (err) {
      console.error(err);
    }
  }
}
</script>

<style lang="scss">
.page.interior {
  padding: 0 !important;
  width: 100%;
  max-width: 100% !important;
}
  .coupledom {
    width: 100%;
    img {
      width: 100%;
      max-width: 100%;
    }
    .hero {
      margin: 0 calc(50% - 50vw) 80px;
      width: 100%;
      margin-bottom: 50px;
      @media screen and (max-width: $breakpoint-md) {
        margin-bottom: 5vw;
      }
      h1 {
        position: absolute;
        bottom: 2.865vw;
        text-align: center;
        font-weight: 200;
        color: white;
        left: 0;
        font-size: 21px;
        width: 100%;
        padding: 0 30px;
        @media screen and (max-width: $breakpoint-lg) {
          font-size: 1.7vw;
          padding: 0 2vw;
        }
        @media screen and (max-width: $breakpoint-md) {
          bottom: 0;
        }
        span {
          font-weight: 600;
          font-size: 21px;
          margin-right: 10px;
          @media screen and (max-width: $breakpoint-lg) {
            font-size: 1.7vw;
          }
        }
      }
    }

    .introduction {
      background-color: #f2f2f2;
      padding: 30px 0;
      box-shadow: 0px 10px 14px 0px rgba(0,0,0,0.3);
      padding: 30px 0;
      color: black;
      @media screen and (max-width: $breakpoint-xl) {
        padding: 15px 0;
      }
      @media screen and (max-width: $breakpoint-md) {
        box-shadow: none;
        padding: 0;
      }
      .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .video {
        width: 46.8%;
        @media screen and (max-width: $breakpoint-xl) {
          width: 100%;
        }
        @media screen and (max-width: $breakpoint-md) {
          width: 100%;
          margin: 3vw 0;
        }
        video {
          width: 100%;
        }
      }
      .copy {
        text-align: center;
        width: 45%;
        margin-right: 4%;
        @media screen and (max-width: 1400px) {
          br {
            content: ' ';
            &:after {
              content: ' ';
            }
          }
        }
        @media screen and (max-width: $breakpoint-xl) {
          width: 100%;
          margin-right: 0;
        }
        @media screen and (max-width: $breakpoint-md) {
          margin-top: 2vw;
        }
        h2 {
          font-size: 21px;
          line-height: 1.2;
          text-transform: uppercase;
          letter-spacing: .7px;
          @media screen and (max-width: $breakpoint-md) {
            font-size: 5.8vw;
          }
        }

        p {
          font-size: 16px;
          &.disclaimer {
            margin-top: 30px;
            font-size: 12px;
          }
        }

        a {
          color: black;
          &.button {
            display: inline-block;
            text-decoration: none;
            font-family: 'acumin-pro-condensed', 'Helvetica Neue', sans-serif;
            font-weight: 600;
            background: linear-gradient(0deg, #18413c 50%, #224c45 50%);
            color: white;
            border-radius: 0;
            border: none;
            text-transform: uppercase;
            font-size: 15px;
            padding: 12px 34px;
            margin-top: 5px;
          }
        }
      }
    }

    .shared-dreams {
      overflow: hidden;

      h3 {
        text-transform: uppercase;
        font-weight: 600;
        font-style: normal;
        font-size: 45px;
        letter-spacing: 1px;
        @media screen and (max-width: $breakpoint-md) {
          padding: 2vw 1vw;
          line-height: 1;
          width: 100%;
          margin-bottom: 0;
          font-size: 9vw;
        }
      }

      .videos {
        margin-bottom: 80px;
        @media screen and (max-width: $breakpoint-md) {
          margin-bottom: 4vw;
        }
        .video-holder {
          position: relative;
          padding-bottom: 56.25%;
          width: 100%;
          height: 100%;
          overflow: hidden;
          iframe, object, embed {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        li {
          padding-left: 15px;
          &:first-child {
            padding-left: 0;
          }
          p {
            color: black;
            text-transform: uppercase;
            margin-top: 5px;
            font-size: 20px;
          }
        }

        .hooper {
          height: auto;
          .hooper-list {
            overflow: visible;
          }
        }

        .hooper-pagination {
          bottom: 0;
          .hooper-indicator {
            background-color: rgba(0,0,0,0.2);
            &.is-active {
              background-color: #124734;
            }
          }
        }
      }

    }
  }
</style>
