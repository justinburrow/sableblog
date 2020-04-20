<template>
  <article class="home-post">
      <div class="details only-mobile">Photography: {{post.node.featuredMedia.caption | removeHTML}}</div>
      <div class="image">
        <g-link :to="post.node.path"><img :src="post.node.featuredMedia.sourceUrl" :alt="post.node.featuredMedia.altText" /></g-link>
      </div>
      <div class="content">
        <h2 v-for="(cat, i) in post.node.categories" :key="i">
          <g-link :to="cat.path"><span v-if="i == 0">{{cat.title}}</span></g-link>
        </h2>
        <h1><g-link :to="post.node.path">{{post.node.title}}</g-link></h1>
        <p class="excerpt">
          <g-link :to="post.node.path"><v-clamp class="excerpt only-desktop" :max-lines="8">{{post.node.excerpt | removeHTML}}</v-clamp></g-link>
          <g-link :to="post.node.path"><v-clamp class="excerpt only-mobile-tablet" :max-lines="4">{{post.node.excerpt | removeHTML}}</v-clamp></g-link>
          </p>
        <p class="read-more">
          <g-link :to="post.node.path">Read More </g-link>
        </p>
        <p class="date">Posted {{this.formatDate(post.node.date)}}</p>
        <img src="~@/assets/images/post-icon.svg" class="post-icon" />
      </div>  
      <div class="details only-desktop">Photography: {{post.node.featuredMedia.caption | removeHTML}}</div>
  </article>
</template>

<script>
import VClamp from 'vue-clamp'
import moment from 'moment'

export default {
  name: 'HomePost',
  components: {
    VClamp
  },
  props: {
    'post': {
      required: true
    } 
  },
  filters: {
    removeHTML: function (val) {
      let regex = /(<([^>]+)>)/ig;
      return val.replace(regex, "");
    }
  },
  methods: {
    formatDate(postDate) {
      return moment(postDate).format('MMM Do, YYYY')
    }
  }
}
</script>

<style lang="scss">
  .home-post {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 100%;
    text-decoration: none;
    .image {
      width: 60%;
      max-height: 630px;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
      }
      @media screen and (max-width: $breakpoint-lg) {
        width: 100%;
        max-height: auto;
        padding-top: 92%;
        position: relative;
      }
    }
    .content {
      width: 40%;
      margin: 20px 0;
      padding: 30px 60px;
      position: relative;
      @media screen and (max-width: $breakpoint-lg) {
        width: 95%;
        margin: -20vw auto 0 auto;
        padding: 3vw 5vw;
        border: 3px solid white;
      }
      a {
        text-decoration: none;
        display: block;
      }

      h1 {
        font-family: acumin-pro-extra-condensed, Helvetica, sans-serif;
        text-transform: uppercase;
        text-align: left;
        font-size: 60px;
        letter-spacing: 1px;
        line-height: 1;
        padding: 0;
        margin: 0;
        @media screen and (max-width: $breakpoint-xl) {
          font-size: 4vw;
        }
        @media screen and (max-width: $breakpoint-md) {
          font-size: 7vw;
          letter-spacing: .2vw;
        }
      }

      h2 {
        text-align: center;
        text-transform: uppercase;
        font-size: 14px;
        margin-bottom: 20px;
        @media screen and (max-width: $breakpoint-md) {
          font-size: 3vw;
          margin-bottom: 3vw;
        }
      }

      .excerpt {
        line-height: 1.6;
        font-size: 15px;
        @media screen and (max-width: $breakpoint-md) {
          font-size: 3.1vw;
          margin-bottom: 2vw;
          text-align: left;
        }
      }

      p.read-more {
        a {
          background: rgba(0,0,0,0.2);
          padding: 7px 15px;
          font-weight: bold;
          text-transform: uppercase;
          display: inline-block;
          font-size: 13px;
          letter-spacing: .5px;
          border: 2px solid black;
          transition: all 0.3s ease-in-out;
          @media screen and (max-width: $breakpoint-md) {
            font-size: 4vw;
            background: black;
            color: white;
            padding: 2vw 4vw;
          }
        }
      }

      .date {
        font-size: 12px;
      }
      .post-icon {
        width: 20px;
        position: absolute;
        bottom: 20px;
        right: 20px;
        z-index: 10;
      }
    }
    .details {
      font-size: 11px;
      color: #B2B2B2;
      margin-top: 15px;
      @media screen and (max-width: $breakpoint-xl) {
        margin-top: .5vw;
      }
      @media screen and (max-width: $breakpoint-lg) {
        margin-top: 0;
        margin-bottom: 1vw;
      }
    }
  }
</style>
