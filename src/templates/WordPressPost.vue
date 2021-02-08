<template>
  <Layout class="interior">
    <div>
      <div id="single-post" class="post interior">

        <div class="post-category">
          <g-link :to="$page.wordPressPost.categories[0].path" class="category">
            <h2 v-html="$page.wordPressPost.categories[0].title"></h2>
          </g-link>
        </div>
        <h1 v-html="$page.wordPressPost.title"/>
        <div class="post-image">
         <img
          v-if="$page.wordPressPost.featuredMedia"
          :src="$page.wordPressPost.featuredMedia.sourceUrl"
          :alt="$page.wordPressPost.featuredMedia.altText"
        />
        </div>

        <div class="post-details">
          <AdBanner />
          <div class="social-share">
            <ShareNetwork
              network="facebook"
              url="https://www.sablelabs.co/2020/09/08/the-alternative-exodus/"
              :title="$page.wordPressPost.title"
              :description="excerpt"
            >
                <i class="fab fah fa-lg fa-facebook-f"></i>
            </ShareNetwork>
            <ShareNetwork
              network="twitter"
              :url="fullPath"
              :title="$page.wordPressPost.title"
              :description="$page.wordPressPost.excerpt"
            >
                <i class="fab fah fa-lg fa-twitter"></i>
            </ShareNetwork>
            <ShareNetwork
              network="pinterest"
              :url="fullPath"
              :title="$page.wordPressPost.title"
              :description="$page.wordPressPost.excerpt"
              :media="featuredImage"
            >
                <i class="fab fah fa-lg fa-pinterest-p"></i>
            </ShareNetwork>

          </div>
          <span class="author" v-if="$page.wordPressPost.featuredMedia"> {{$page.wordPressPost.featuredMedia.caption | removeHTML}}</span>
        </div>
        <div ref="postContent" class="post-content" v-html="$page.wordPressPost.content"></div>
      </div>

      <div class="you-may-also-like" v-if="$page.wordPressPost.categories[0].belongsTo.edges.length > 0">
        <div class="title">
          <div class="background"></div>
          <div class="content">
            You May Also Like
          </div>
        </div>

        <div v-for="node in $page.wordPressPost.categories[0].belongsTo.edges">
          <g-link :to="node.path"><HomePost :post="node" /></g-link>
        </div>
      </div>
    </div>


  </Layout>
</template>

<page-query>
  query WordPressPost ($id: ID!) {
    metadata {
      siteUrl
    }
    wordPressPost(id: $id) {
      title
      content
      date
      excerpt
      path
      link
      featuredMedia {
        sourceUrl
        altText
        caption
        link
      }
      categories {
        id
        title
        path
        belongsTo(sortBy: "dateGmt", limit: 3, filter: { id: { ne: $id } }) {
        	edges {
            node {
              ...on WordPressPost {
              	title
                dateGmt
                path
                excerpt
                featuredMedia {
                  sourceUrl
                  altText
                }
            	}
            }
          }
      	}
      }
    }
  }
</page-query>

<script>
import moment from 'moment'
import HomePost from '~/components/HomePost.vue'
import AdBanner from '~/components/AdBanner.vue'

export default {
  metaInfo () {
    let image = this.$page.wordPressPost.featuredMedia;

    return {
      title: this.$page.wordPressPost.title,
      date: this.$page.wordPressPost.date,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.excerpt
        },
        {
          key: 'og:type',
          name: 'og:type',
          content: 'article'
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: this.$page.metadata.siteUrl + this.$page.wordPressPost.path
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.wordPressPost.title + ' | S\'able Labs'
        },
        {
          key: 'twitter:title',
          property: 'twitter:title',
          content: this.$page.wordPressPost.title + ' | S\'able Labs'
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: image ? image.sourceUrl : ''
        },
        {
          key: 'twitter:image',
          property: 'twitter:image',
          content: image ? image.sourceUrl : ''
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.excerpt
        },
        {
          key: 'twitter:description',
          property: 'twitter:description',
          content: this.excerpt
        }
      ]
    }
  },
  components: {
    HomePost,
    AdBanner
  },
  methods: {
    formatDate(postDate) {
      return moment(postDate).format('MMM Do, YYYY')
    },
    removeHTML: function (val) {
      let regex = /(<([^>]+)>)/ig;
      return val.replace(regex, "");
    }
  },
  data() {
    return {
      fullPath: '',
      excerpt: '',
      featuredImage: ''
    }
  },
  mounted() {
    let pCount = this.$refs.postContent.getElementsByTagName('p').length;
    pCount = Math.floor(pCount/2);

    this.fullPath = this.$page.metadata.siteUrl + this.$page.wordPressPost.path;
    if (this.$page.wordPressPost.excerpt) {
      this.excerpt = this.removeHTML(this.$page.wordPressPost.excerpt);
    }
    if (this.$page.wordPressPost.featuredMedia) {
      this.featuredImage = this.$page.wordPressPost.featuredMedia.sourceUrl;
    }
    let parNum = document.querySelectorAll(':p > strong');
    parNum = Math.floor(parNum/2);
    console.log(parNum);

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
  #single-post {
    padding-bottom: 40px;
    margin: 0 auto;
    @media screen and (max-width: $breakpoint-lg) {
      padding-bottom: 7.5vw;
      width: 100%;
    }
    a {
      color: black;
      &.category {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  .post-category {
    a {
      color: #b2b2b2;
    }
    h2 {
      margin-top: 25px;
      font-family: 'acumin-pro-extra-condensed';
      font-weight: 500;
      font-size: 24px;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-align: center;
      border-bottom: 1px solid black;
      padding-bottom: 5px;
      margin-bottom: 20px;
      color: black;
      @media screen and (max-width: $breakpoint-md) {
        font-size: 5vw;
        margin-bottom: 5vw;
      }
    }
  }
  h1 {
    font-family: acumin-pro-extra-condensed, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    font-size: 40px;
    margin: 0 0 23px;
    padding: 0;
    line-height: 1;
    @media screen and (max-width: $breakpoint-md) {
      font-size: 9.5vw;
      line-height: 1.2;
      margin: 3vw 0;
      padding: 0;
    }
  }
  .post-image {
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
  .post-details {
    display: flex;
    justify-content: space-between;
    margin: 15px 0 32px 0;
    color: #B2B2B2;
    .ad-banner {
      top: 120px;
    }
    .author {
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 10px;
      margin-top: 0;
      @media screen and (max-width: $breakpoint-md) {
        font-size: 3vw;
        margin-bottom: 2vw;
      }
      @media screen and (max-width: $breakpoint-sm) {
        font-size: 3.5vw;
        margin-bottom: 2.5vw;
      }
    }
    .social-share {
      opacity: .35;
      flex-shrink: 0;
      margin-right: 15px;
      a {
        margin-right: 10px;
        cursor: pointer;
        padding: 8px;
      }
      @media screen and (max-width: $breakpoint-md) {

      }
    }
  }
  .post-content {
    font-family: 'acumin-pro', sans-serif;
    padding: 0;
    @media screen and (max-width: $breakpoint-lg) {
      padding: 0;
      margin-left: 0;
    }
    h2, h3, h4, h5, h6 {
      text-align: left;
      margin: 0 0 20px 0;
      padding: 0;
      font-weight: 400;
      @media screen and (max-width: $breakpoint-lg) {
        margin: 0 0 1.8vw 0;
        padding: 0;
      }
    }
    h2 {
      font-family: 'acumin-pro-condensed', sans-serif;
      text-transform: uppercase;
      font-size: 24px;
      margin-bottom: 30px;
      font-weight: 400;
      line-height: 1.2;
      @media screen and (max-width: $breakpoint-lg) {
        font-size: 2.7vw;
        line-height: 1.2;
        margin-bottom: 2vw;
      }
      @media screen and (max-width: $breakpoint-md) {
        font-size: 5vw;
        margin-bottom: 6vw;
      }
    }
    h3 {
      margin-top: 23px;
      font-size: 18px;
      @media screen and (max-width: $breakpoint-lg) {
        font-size: 2vw;
        line-height: 1.2;
        margin-top: 2vw;
      }
      @media screen and (max-width: $breakpoint-md) {
        font-size: 4vw;
      }
    }
    li {
      font-size: 16px;
      line-height: 1.5;
      @media screen and (max-width: $breakpoint-md) {
        font-size: 3vw;
      }
      @media screen and (max-width: $breakpoint-sm) {
        font-size: 4vw;
      }
    }
    ol {
      margin: 0;
      padding: 0;
      list-style-position: inside;
      li {
        margin-bottom: 20px;
      }
    }
    #article-ad {
      background: #f2f2f2;
      padding: 20px;
      width: 100vw;
      left: calc(50% - 100px);
      position: relative;
      margin: 60px 0 60px -50vw;
      @media screen and (max-width: $breakpoint-md) {
        margin: 7vw 0 7vw -30px;
      }
      .content {
        width: 100%;
        max-width: 1000px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    figcaption,
    .wp-caption-text {
    	color: #6d6d6d;
    	display: block;
    	font-size: 1.5rem;
    	font-weight: 500;
    	line-height: 1.2;
    	margin-top: 1.5rem;
    }

    figcaption a,
    .wp-caption-text a {
    	color: inherit;
    }

    .wp-block-archives:not(.alignwide):not(.alignfull),
    .wp-block-categories:not(.alignwide):not(.alignfull),
    .wp-block-code,
    .wp-block-columns:not(.alignwide):not(.alignfull),
    .wp-block-cover:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.aligncenter),
    .wp-block-embed:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.aligncenter),
    .wp-block-gallery:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.aligncenter),
    .wp-block-group:not(.has-background):not(.alignwide):not(.alignfull),
    .wp-block-image:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.aligncenter),
    .wp-block-latest-comments:not(.aligncenter):not(.alignleft):not(.alignright),
    .wp-block-latest-posts:not(.aligncenter):not(.alignleft):not(.alignright),
    .wp-block-media-text:not(.alignwide):not(.alignfull),
    .wp-block-preformatted,
    .wp-block-pullquote:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright),
    .wp-block-quote,
    .wp-block-quote.is-large,
    .wp-block-quote.is-style-large,
    .wp-block-verse,
    .wp-block-video:not(.alignwide):not(.alignfull) {
    	margin-bottom: 3rem;
    	margin-top: 3rem;
    }


    /* Block: Shared Nesting Alignment Resets ---- */

    [class*="__inner-container"] .wp-block-group:not(.alignfull):not(.alignwide):not(.alignleft):not(.alignright),
    [class*="__inner-container"] .wp-block-cover:not(.alignfull):not(.alignwide):not(.alignleft):not(.alignright) {
    	margin-left: auto;
    	margin-right: auto;
    	max-width: 58rem;
    }

    .wp-block-embed figcaption,
    .wp-block-image figcaption {
    	color: #6d6d6d;
    	font-size: 1.4rem;
    	margin-bottom: 0;
    	margin-top: 1.5rem;
    }

    .entry-content > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide) {
    	max-width: 58rem;
    	width: calc(100% - 4rem);
    }

    [class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide) {
    	max-width: 58rem;
    	width: 100%;
    }

    .alignnone,
    .aligncenter,
    .alignleft,
    .alignright,
    .alignwide {
    	margin-top: 4rem;
    	margin-right: auto;
    	margin-bottom: 4rem;
    	margin-left: auto;
    }

    [class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright) {
    	margin-left: auto;
    	margin-right: auto;
    }

    /* Full */

    .alignfull {
    	margin-top: 5rem;
    	margin-right: auto;
    	margin-bottom: 5rem;
    	margin-left: auto;
    	max-width: 100vw;
    	position: relative;
    	width: 100%;
    }

    [class*="__inner-container"] > .alignfull {
    	max-width: 100%;
    }

    /* Wide */

    .alignwide {
    	max-width: 120rem;
    	position: relative;
    	width: calc(100% - 4rem);
    }

    [class*="__inner-container"] > .alignwide {
    	width: 100%;
    }

    /* Center */

    .aligncenter,
    .aligncenter img {
    	margin-left: auto;
    	margin-right: auto;
    }

    /* Left and right */

    .alignleft,
    .alignright {
    	max-width: 50%;
    }

    .alignleft {

    	/*rtl:ignore*/
    	float: left;
    	margin: 0.3rem 2rem 2rem 2rem;
    }

    .alignright {

    	/*rtl:ignore*/
    	float: right;
    	margin: 0.3rem 2rem 2rem 2rem;
    }

    [class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .alignleft,
    [class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > p .alignleft,
    [class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .wp-block-image .alignleft {

    	/*rtl:ignore*/
    	margin-left: 2rem;
    }

    [class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .alignright,
    [class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > p .alignright,
    [class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .wp-block-image .alignright {

    	/*rtl:ignore*/
    	margin-right: 2rem;
    }

    /* Entry Media ------------------------------- */

    .alignfull > figcaption,
    .alignfull > .wp-caption-text {
    	margin-left: auto;
    	margin-right: auto;
    	max-width: 58rem;
    	width: calc(100% - 4rem);
    }

  }
}
.you-may-also-like {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  background: black;
  display: flex;
  flex-wrap: wrap;
  color: white;
  padding: 20px 0;
  a {
    color: white;
    text-decoration: none;
  }
  > div {
    width: 100%;
    padding: 17px;
    &:nth-child(2) {
      margin-left: 0;
    }
    @media screen and (min-width: 768px) {
      width: 30%;
      margin-left: 30px;
      padding: 20px 0;
      &:nth-child(4) {
        display: none;
      }
    }
    @media screen and (min-width: 1200px) {
      width: 20%;
      margin-left: 30px;
      padding: 20px 0;
      &:nth-child(4) {
        display: block;
      }
    }

  }
  .title {
    margin-left: 0;
    position: relative;
    width: 100%;
    padding-top: 100%;
    @media screen and (min-width: 768px) {
      width: 30%;
      padding-top: 0;
    }
    @media screen and (min-width: 1024px) {
      width: 30%;
    }
    .background {
      background: url('~@/assets/images/sable-s.svg') center center no-repeat;
      background-size: 43%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.15;
    }
    .content {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      font-size: 18px;
      font-weight: bold;
      z-index: 2;
      text-align: center;
    }
  }
}
</style>
