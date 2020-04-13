<template>
  <Layout>
    <div class="post">
      <h2 v-html="$page.wordPressPost.categories[0].title"></h2>
      <h1 v-html="$page.wordPressPost.title"/>
      <div class="post-image">
       <img
        v-if="$page.wordPressPost.featuredMedia"
        :src="$page.wordPressPost.featuredMedia.sourceUrl"
        :alt="$page.wordPressPost.featuredMedia.altText"
      />
      </div>
      <div class="post-details">
        <span class="author">Photography: {{$page.wordPressPost.featuredMedia.caption | removeHTML}}</span>
        <span class="date only-desktop">{{formatDate($page.wordPressPost.date)}}</span>
      </div>
      <p class="date only-mobile-tablet">{{formatDate($page.wordPressPost.date)}}</p>
      <div class="post-content" v-html="$page.wordPressPost.content"></div>
      <div class="post-navigation">
        <div class="title">Related Articles</div>
        <div class="articles">
          <article v-if="$page.prevPost.edges.length > 0">
            <g-link :to="$page.prevPost.edges[0].node.path" class="image">
              <div class="image">
                <img :src="$page.prevPost.edges[0].node.featuredMedia.sourceUrl" :alt="$page.prevPost.edges[0].node.featuredMedia.altText" />
              </div>
            </g-link>
            <g-link :to="$page.prevPost.edges[0].node.path" class="desc">
              <h5>
                {{ $page.prevPost.edges[0].node.title }}
                <span>Read More</span>
              </h5>
            </g-link>
            <g-link :to="$page.prevPost.edges[0].node.categories[0].path">
              <h6>{{ $page.prevPost.edges[0].node.categories[0].title }}</h6>
            </g-link>
          </article>

          <article v-if="$page.nextPost.edges.length > 0">
            <g-link :to="$page.nextPost.edges[0].node.path" class="image">
              <div class="image">
                <img :src="$page.nextPost.edges[0].node.featuredMedia.sourceUrl" :alt="$page.nextPost.edges[0].node.featuredMedia.altText" />
              </div>
            </g-link>
            <g-link :to="$page.nextPost.edges[0].node.path" class="desc">
              <h5>
                {{ $page.nextPost.edges[0].node.title }}
                <span>Read More</span>
              </h5>
            </g-link>
            <g-link :to="$page.nextPost.edges[0].node.categories[0].path">
              <h6>{{ $page.nextPost.edges[0].node.categories[0].title }}</h6>
            </g-link>
          </article>

          <article v-if="$page.nextPost.edges.length == 0">
            <g-link :to="$page.prevPost.edges[1].node.path" class="image">
              <div class="image">
                <img :src="$page.prevPost.edges[1].node.featuredMedia.sourceUrl" :alt="$page.prevPost.edges[1].node.featuredMedia.altText" />
              </div>
            </g-link>
            <g-link :to="$page.prevPost.edges[1].node.path" class="desc">
              <h5>
                {{ $page.prevPost.edges[1].node.title }}
                <span>Read More</span>
              </h5>
            </g-link>
            <g-link :to="$page.prevPost.edges[1].node.categories[0].path">
              <h6>{{ $page.prevPost.edges[1].node.categories[0].title }}</h6>
            </g-link>
          </article>

          <article v-if="$page.prevPost.edges.length == 0">
            <g-link :to="$page.nextPost.edges[1].node.path" class="image">
              <div class="image">
                <img :src="$page.nextPost.edges[1].node.featuredMedia.sourceUrl" :alt="$page.nextPost.edges[1].node.featuredMedia.altText" />
              </div>
            </g-link>
            <g-link :to="$page.nextPost.edges[1].node.path" class="desc">
              <h5>
                {{ $page.nextPost.edges[1].node.title }}
                <span>Read More</span>
              </h5>
            </g-link>
            <g-link :to="$page.nextPost.edges[1].node.categories[0].path">
              <h6>{{ $page.nextPost.edges[1].node.categories[0].title }}</h6>
            </g-link>
          </article>
          
        </div>
      </div>
    </div>
    
  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!, $date: Date!) {
  wordPressPost(id: $id) {
    title
    content
    date
    featuredMedia {
      sourceUrl
      altText
      caption
    }
    categories {
      id
      title
      path
    }
  }
  prevPost: allWordPressPost(filter: {date: { lt: $date}}, limit: 2) {
      edges {
        node {
          title
          link
          path
          date
          featuredMedia {
            sourceUrl
            altText
          }
          categories {
            id
            title
          }
        }
      }
    }
    nextPost: allWordPressPost(filter: {date: { gt: $date}}, limit: 2) {
      edges {
        node {
          title
          link
          path
          date
          featuredMedia {
            sourceUrl
            altText
          }
          categories {
            id
            title
          }
        }
      }
    }
}
</page-query>

<script>
import moment from 'moment'

export default {
  metaInfo () {
    return {
      title: this.$page.wordPressPost.title,
      date: this.$page.wordPressPost.date
    }
  },
  components: {

  },
  methods: {
    formatDate(postDate) {
      return moment(postDate).format('MMM Do, YYYY')
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
  .post {
    padding-bottom: 120px;
    max-width: 1320px;
    margin: 0 auto;
    @media screen and (max-width: $breakpoint-lg) {
      padding-bottom: 10vw;
      width: 100%;
    }
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
    font-size: 17px;
    line-height: 1.4;
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
      font-size: 16px;
      line-height: 1.4;
      @media screen and (max-width: $breakpoint-md) {
        font-size: 3vw;
      }
      @media screen and (max-width: $breakpoint-sm) {
        font-size: 4vw;
      }
    }
  }
  .post-navigation {
    margin-top: 100px;
    border-top: 1px solid #235751;
    width: 100%;
    margin-bottom: 50px;
    @media screen and (max-width: $breakpoint-md) {
      margin-bottom: 5vw;
    }
    .title {
      margin: 0 auto;
      background: #235751;
      padding: 10px 0;
      width: 645px;
      text-align: center;
      color: white;
      text-transform: uppercase;
      position: relative;
      top: -18px;
      line-height: 1;
      letter-spacing: 1px;
      @media screen and (max-width: $breakpoint-md) {
        width: 100%;
      }
    }
    .articles {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 30px;
      @media screen and (max-width: $breakpoint-md) {
        margin-top: 3vw;
      }
      @media screen and (max-width: $breakpoint-sm) {
        flex-wrap: wrap;
      }
      article {
        width: 48%;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: $breakpoint-sm) {
          flex-wrap: wrap;
          width: 100%;
          flex-direction: row;
          margin-bottom: 7vw;
        }
        a {
          text-decoration: none;
          &:hover {
            text-decoration: underline;
            color: #b6b6b6;
          }
        }
        a.image {
          padding: 0;
          @media screen and (max-width: $breakpoint-sm) {
            width: 100%;
          }
        }
        .image {
          position: relative;
          width: 100%;
          padding-top: 57%;
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        a.desc {
          flex-grow: 1; 
        }
        h5 {
          margin: 0;
          background: black;
          color: white;
          padding: 15px;
          display: flex;
          text-transform: uppercase;
          justify-content: space-between;
          font-family: acumin-pro-extra-condensed;
          font-size: 24px;
          letter-spacing: 1px;
          line-height: 1;
          height: 100%;
          align-items: center;
          span {
            margin-left: 50px;
            display: block;
            width: 140px;
            text-align: right;
            flex-grow: 1;
            font-family: 'acumin', helvetica, sans-serif;
            font-size: 12px;
            text-decoration: underline;
            letter-spacing: 0;
            @media screen and (max-width: $breakpoint-md) {
              display: none;
            }
          }
        }
        h6 {
          margin: 10px 0 0 0;
          padding: 0;
          text-align: right;
          font-size: 13px;
          letter-spacing: 1px;
          color: #b6b6b6;
          text-transform: uppercase;
          font-weight: normal;
          @media screen and (max-width: $breakpoint-md) {
            display: none;
          }
        }
      }
    }
  }
</style>
