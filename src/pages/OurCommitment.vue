<template>
  <Layout>
    <div class="page our-commitment">
      <div class="interior">
        <div class="image-container">
          <img src="~@/assets/images/conservation-international.jpg" alt="Conservation International">
        </div>
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
  metaInfo: {
    title: 'S\'able Labs | Our Commitment'
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  .page {
    padding-bottom: 120px;
    max-width: 950px;
    margin: 30px auto 0 auto;
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
    font-size: 20px;
    margin: 0 0 10px 0;
    padding: 0;
    letter-spacing: 1.5px;
    font-weight: 400;
    @media screen and (max-width: $breakpoint-md) {
      font-size: 3.5vw;
    }
  }
  h1 {
    font-family: acumin-pro-extra-condensed, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    font-size: 60px;
    margin: 0 0 30px;
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
    font-size: 18px;
    line-height: 1.5;
    h2, h3, h4, h5, h6 {
      text-align: left;
      margin: 0 0 20px 0;
      padding: 0 0 0 0;
      @media screen and (max-width: $breakpoint-lg) {
        margin: 0 0 2vw 0;
        padding: 0;
      }
    }
    hr {
      margin: 40px 0;
      height: 1px;
      border: none;
      background: black;
    }
    h2 {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 40px;
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
    p, li {
      font-size: 18px;
      line-height: 1.4;
      margin-bottom: 20px;
      @media screen and (max-width: $breakpoint-md) {
        font-size: 3vw;
      }
      @media screen and (max-width: $breakpoint-sm) {
        font-size: 4vw;
      }
    }
  }
</style>
