<template>
  <Layout class="interior">
    <div class="video-banner only-desktop">
      <video v-if="!isMobile" src="~@/assets/video/trees-movie-cropped.mp4" autoplay poster="posterimage.jpg" loop>
      </video>
      <img src="~@/assets/images/ci_logo.png" alt="Conservation International">
    </div>
    <div class="video-banner only-mobile">
      <img src="~@/assets/images/ci_mob_logo.jpg" alt="Conservation International">
    </div>
    <div class="page our-commitment">
      <div class="interior">
        <h1>{{$page.allWordPressPage.edges[0].node.title}}</h1>
        <div class="page-content" v-html="$page.allWordPressPage.edges[0].node.content">
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    allWordPressPage(filter: { slug: { eq: "our-commitment" }}) {
      edges {
        node {
          content
          title
        }
      }
    }
  }
</page-query>

<script>

export default {
  metaInfo() {
    return {
      title: this.$page.allWordPressPage.edges[0].node.title,
      meta: [
        {
          name: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.allWordPressPage.edges[0].node + ' | S\'able Labs'
        },
        {
          key: 'twitter:title',
          property: 'twitter:title',
          content: this.$page.allWordPressPage.edges[0].node + ' | S\'able Labs'
        }
      ]
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  .video-banner {
    height: 22vw;
    margin: 0 calc(50% - 50vw) 42px;
    position: relative;
    z-index: 1;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-width: 700px;
    }
    @media screen and (max-width: $breakpoint-md) {
      width: 100vw;
      max-width: 100vw;
      height: 40vw;
      margin-bottom: 5vw;
    }
  }
  .page {
    max-width: 900px;
    @media screen and (max-width: $breakpoint-md) {
      padding-top: 3vw;
    }
    .image-container {
      padding: 0 30px 30px;
      border-bottom: 1px solid black;
      border-top: 1px solid black;
      margin-bottom: 30px;
      padding-top: 30px;
      img {
        width: 100%;
        max-width: 100%;
      }
    }
    @media screen and (max-width: $breakpoint-lg) {
      padding-bottom: 10vw;
      width: 100%;
    }
  }
  .page-heading {
    font-size: 14px;
    border-bottom: 1px solid black;
    margin: 0 0 30px 0;
    padding: 0 0 30px 0;
    text-transform: uppercase;
    text-align: center;
  }
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 20px !important;
    margin: 0 0 10px 0;
    padding: 0;
    letter-spacing: 1px !important;
    line-height: 1.4;
    font-weight: 400;
    @media screen and (max-width: $breakpoint-lg) {
      br { content: ' ';
        &:after {
          content: ' ';
        }
      }
    }
    @media screen and (max-width: $breakpoint-md) {
      font-size: 3.5vw;
    }
  }
  h1 {
    font-family: acumin-pro-extra-condensed, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    font-size: 45px;
    margin: 0 0 23px;
    padding: 0;
    line-height: 1.1;
    @media screen and (max-width: $breakpoint-md) {
      font-size: 9vw;
      line-height: 1.2;
      margin: 3vw 0;
      padding: 0;
    }
  }
  .page-content {
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    p {
      font-size: 16px;
    }
    h2, h3, h4, h5, h6 {
      text-align: center !important;
      margin: 0 0 20px 0;
      padding: 0 0 0 0;
      text-transform: none;
      @media screen and (max-width: $breakpoint-lg) {
        margin: 0 0 2vw 0;
        padding: 0;
      }
    }
    hr {
      margin: 50px 0;
      height: 1px;
      border: none;
      background: black;
    }
    h2 {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 20px !important;
      @media screen and (max-width: $breakpoint-lg) {
        font-size: 3vw;
        line-height: 1.2;
        margin-bottom: 2vw;
      }
      @media screen and (max-width: $breakpoint-md) {
        font-size: 5vw;
        margin-bottom: 6vw;
      }
    }
    h3 {
      margin-top: 30px;
      @media screen and (max-width: $breakpoint-lg) {
        font-size: 2vw;
        line-height: 1.2;
        margin-top: 2vw;
      }
      @media screen and (max-width: $breakpoint-md) {
        font-size: 4.5vw;
      }
    }
  }
</style>
