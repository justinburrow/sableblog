<template>
  <Layout class="interior">
    <div class="page">
      <div class="interior">
        <h1 v-html="$page.wordPressPage.title"></h1>
        <div class="page-image" v-if="$page.wordPressPage.featuredMedia != null">
         <img
          v-if="$page.wordPressPage.featuredMedia != null"
          :src="$page.wordPressPage.featuredMedia.sourceUrl"
          :alt="$page.wordPressPage.featuredMedia.altText"
        />
        </div>
        <div class="page-details" v-if="$page.wordPressPage.featuredMedia != null">
          <span class="author" v-if="$page.wordPressPage.featuredMedia != null">Photography: {{$page.wordPressPage.featuredMedia.caption | removeHTML}}</span>
        </div>
        <div class="page-content" v-html="$page.wordPressPage.content"></div>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query WordPressPage ($id: ID!) {
  wordPressPage(id: $id) {
    title
    content
    date
    featuredMedia {
      sourceUrl
      altText
      caption
    }
  }
}
</page-query>

<script>

export default {
  metaInfo () {
    return {
      title: this.$page.wordPressPage.title.replace(/&#8217;/, "'"),
      date: this.$page.wordPressPage.date,
      meta: [
        {
          name: 'og:type',
          name: 'og:type',
          content: 'article'
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.wordPressPage.title.replace(/&#8217;/, "'") + ' | S\'able Labs'
        },
        {
          key: 'twitter:title',
          property: 'twitter:title',
          content: this.$page.wordPressPage.title.replace(/&#8217;/, "'") + ' | S\'able Labs'
        }
      ]
    }
  },
  methods: {
    headingFilter(slug) {
      slug = slug.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
      return slug.replace(/-/g, ' ')
    }
  },
  filters: {
    removeHTML: function (val) {
      let regex = /(<([^>]+)>)/ig;
      return val.replace(regex, "");
    }
  }
}
</script>

<style lang="scss">
  .page {
    padding-top: 60px !important;
    max-width: 950px !important;
    @media screen and (max-width: $breakpoint-lg) {
      padding-bottom: 10vw;
      width: 100%;
    }
    @media screen and (max-width: $breakpoint-md) {
      padding-top: 3vw !important;
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
    margin: 0 0 20px;
    padding: 0;
    @media screen and (max-width: $breakpoint-md) {
      font-size: 9vw;
      line-height: 1.2;
      margin: 3vw 0;
      padding: 0;
    }
  }
  .page-image {
    padding-bottom: 61%;
    position: relative;
    @media screen and (max-width: $breakpoint-md) {
      padding-bottom: 75%;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .page-details {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 40px 0;
    color: #B2B2B2;
    .date {
      font-style: italic;
      @media screen and (max-width: $breakpoint-lg) {
        font-size: 3vw;
      }
    }
    @media screen and (max-width: $breakpoint-md) {
      margin: 2vw 0 4vw 0;
    }
    .author {
      font-size: 14px;
      @media screen and (max-width: $breakpoint-md) {
        font-size: 3vw;
      }
    }
  }
  .page-content {
    font-size: 17px;
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
    ul {
      list-style-type: none;
    }
  }

</style>
