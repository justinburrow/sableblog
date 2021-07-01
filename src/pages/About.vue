<template>
  <Layout class="interior">
    <div class="page about">
      <div class="container">
        <h1>Welcome to S'able Labs</h1>
          <div class="video">
            <AdBanner/>
            <video poster="~@/assets/images/video-poster.jpg" controls playsinline><source src="~@/assets/video/sable-labs-home-video.mp4" type="video/mp4" /></video>
          </div>
          <div class="content">
            <div class="image">
              <img src="~@/assets/images/from-the-elbas.jpg" alt="From The Elba's">
            </div>
            <div class="copy">
              <h2>From the Elba's</h2>
              <p>When we started out in this relationship as a new couple, we noticed that there was a missing space for couples to go to for dialogue, support and inspiration. We wanted to fill that space with a community of people who understand the importance of partnerships…a community for ‘coupledom’.</p>

              <p>The coupledom community is an open space for not just romantic couples but any partnerships between two people, whether it be familial, business related, or romantic. Both of us being ambitious dreamers, we realized that we could dream together and combine our efforts as partners to help each other achieve our goals. This is the realization we want to share with the world.</p>

              <p>
                We would like people to walk away not only learning but teaching
                and contributing to the community as well. We look forward to watching our coupledom community grow as we grow with it. Coupledom is an ever-expanding space, lets watch it expand together.
              </p>
              <div class="signature">
                <img src="~@/assets/images/elba-signature.gif" alt="Elba Signature">
              </div>
            </div>
        </div>
        <div class="mission">
          <h3>OUR MISSION</h3>
          <p><strong>S’able Labs is a community delivering quality lifestyle products and uplifting content built with integrity, transparency, and love to help in your everyday experiences.</strong></p>
<p>We have built our foundation on 4 key pillars; Sustainability, Transparency, Diversity and Self Care.</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    allWordPressPage(filter: { slug: { eq: "about" }}) {
      edges {
        node {
          content
        }
      }
    }
  }
</page-query>

<script>
import axios from 'axios';

export default {
  metaInfo() {
    return {
      title: `About Us - S'able Labs`,
      description: "When we started out in this relationship as a new couple, we noticed that there was a missing space for couples to go to for dialogue, support and inspiration. We wanted to fill that space with a community of people who understand the importance of partnerships…a community for ‘coupledom’."
    }
  },
  data() {
    return {
      isMobile: this.$store.isMobile
    }
  },
  components: {
    AdBanner
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="scss">
  .interior {
    width: 100%;
    margin-top: 70px;
    @media screen and (max-width: $breakpoint-lg) {
      margin-top: 5vw;
    }
    .page.about {
      width: 100%;
      max-width: 1024px;
      margin: 0 auto;
      position: relative;
      .video {
        margin-bottom: 60px;
        position: relative;
        @media screen and (max-width: $breakpoint-md) {
          margin-bottom: 8vw;
        }
        video {
          max-width: 100%;
          height: auto;
        }
      }
      .content {
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: $breakpoint-md) {
          flex-direction: column-reverse;
          flex-wrap: wrap;
        }
        .image {
          width: 47%;
          @media screen and (max-width: $breakpoint-md) {
            width: 100%;
          }
          img {
            width: 100%;
            max-width: 100%;
          }
        }
        .copy {
          width: 50%;
          @media screen and (max-width: $breakpoint-md) {
            width: 100%;
          }
          h2 {
            text-align: left;
            font-weight: 600;
            font-size: 26px;
            margin-bottom: 10px;
            padding: 0;
            line-height: 1;
            @media screen and (max-width: $breakpoint-md) {
              font-size: 7vw !important;
            }
          }
          .signature {
            text-align: center;
            margin: 30px 0;
            @media screen and (max-width: $breakpoint-md) {
              text-align: right;
              margin: 2vw 8vw 8vw;
            }
            img {
              max-height: 140px;
              @media screen and (max-width: $breakpoint-md) {
                max-height: 20vw;
              }
            }
          }
        }
      }
      .mission {
        margin-top: 20px;
        border-top: 1px solid black;
        text-align: center;
        @media screen and (max-width: $breakpoint-md) {
          margin-top: 10vw;
        }
        h3 {
          font-size: 26px;
          font-weight: 600;
          text-align: center;
          margin-top: 50px;
          letter-spacing: .5px;
          @media screen and (max-width: $breakpoint-md) {
            margin-top: 10vw;
            margin-bottom: 3vw;
          }
        }
      }
    }
  }
</style>
