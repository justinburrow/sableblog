<template>
  <Layout>
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
          <div class="social-share">
            <div class="s9-widget-wrapper" ref="socialWidget"></div>
          </div>
          <span class="author" v-if="!$page.wordPressPost.featuredMedia == null"> {{$page.wordPressPost.featuredMedia.caption | removeHTML}}</span>
        </div>
        <div ref="postContent" class="post-content" v-html="$page.wordPressPost.content"></div>
      </div>

      <div class="you-may-also-like">
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
    wordPressPost(id: $id) {
      title
      content
      date
      excerpt
      featuredMedia {
        sourceUrl
        altText
        caption
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

export default {
  metaInfo () {
    return {
      title: this.$page.wordPressPost.title,
      date: this.$page.wordPressPost.date,
      meta: [
        {
          name: 'og:type',
          property: 'og:type',
          content: 'article'
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
          key: 'og:description',
          property: 'og:description',
          content: this.removeHTML(this.$page.wordPressPost.excerpt) || ''
        },
        {
          key: 'twitter:description',
          property: 'twitter:description',
          content: this.removeHTML(this.$page.wordPressPost.excerpt) || ''
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: this.$page.wordPressPost.featuredMedia.sourceUrl || ''
        },
        {
          key: 'twitter:image',
          property: 'twitter:image',
          content: this.$page.wordPressPost.featuredMedia.sourceUrl || ''
        }
      ]
    }
  },
  components: {
    HomePost
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
  mounted() {
    let socialShare = document.createElement('script');
    socialShare.setAttribute('src', '//cdn.social9.com/js/socialshare.min.js');
    socialShare.setAttribute('content', '4266dc65e04e4349a4e7e982e355b153');
    socialShare.setAttribute('id', 's9-sdk');
    socialShare.setAttribute('defer', 'true');
    socialShare.setAttribute('async', 'true');
    document.head.appendChild(socialShare);

    let pCount = this.$refs.postContent.getElementsByTagName('p').length;
    pCount = Math.floor(pCount/2);
    const articleAd = document.createElement('div');
    const contentHolder = document.createElement('div');
    contentHolder.setAttribute('class', 'content');
    articleAd.appendChild(contentHolder);
    articleAd.setAttribute('id', 'article-ad');
    this.$refs.postContent.getElementsByTagName('p')[pCount].after(articleAd);
  },
  filters: {
    removeHTML: function (val) {
      let regex = /(<([^>]+)>)/ig;
      return val.replace(regex, "");
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.$refs.socialWidget.innerHTML = '';
    next();
  }
}
</script>

<style lang="scss">
  #single-post {
    padding-bottom: 120px;
    margin: 0 auto;
    max-width: 1000px;
    @media screen and (max-width: $breakpoint-lg) {
      padding-bottom: 10vw;
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
      margin-top: 30px;
      font-family: 'acumin-pro-extra-condensed';
      font-size: 1.8rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-align: center;
      border-bottom: 1px solid black;
      padding-bottom: 5px;
      margin-bottom: 30px;
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
    font-size: 60px;
    margin: 0 0 30px;
    padding: 0;
    line-height: 1;
    @media screen and (max-width: $breakpoint-md) {
      font-size: 9vw;
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
  }
  .post-content {
    font-family: 'acumin-pro', sans-serif;
    padding: 0 7%;
    margin-left: 200px;
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
        margin: 0 0 2vw 0;
        padding: 0;
      }
    }
    h2 {
      font-family: 'acumin-pro-condensed', sans-serif;
      text-transform: uppercase;
      font-size: 2rem;
      margin-bottom: 30px;
      font-weight: 400;
      line-height: 1.2;
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
        font-size: 3.5vw;
      }
    }
    li {
      font-size: 16px;
      line-height: 1.4;
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
      position: relative;
      left: calc(50% - 100px);
      margin: 60px 0 60px -50vw;
      .content {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }
    }
  }
}
.you-may-also-like {
  width: 100%;
  max-width: 1600px;
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
    padding: 20px;
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
      font-size: 21px;
      font-weight: bold;
      z-index: 2;
      text-align: center;
    }
  }
}
</style>
