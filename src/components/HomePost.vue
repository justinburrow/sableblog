<template>
  <article class="home-post">
    <div class="details only-mobile">Photography: {{post.node.featuredMedia.caption | removeHTML}}</div>
    <div class="image">
      <img :src="post.node.featuredMedia.sourceUrl" :alt="post.node.featuredMedia.altText" />
    </div>
    <div class="content">
      <h2 v-for="(cat, i) in post.node.categories" :key="cat.id">
        <span v-if="i == 0">{{cat.title}}</span>
      </h2>
      <g-link :to="post.node.path"><h1 v-html="post.node.title" /></g-link>
      <p class="excerpt">
        <v-clamp class="excerpt only-desktop-tablet" :max-lines="8">{{post.node.excerpt | removeHTML}}</v-clamp>
        <v-clamp class="excerpt only-mobile" :max-lines="5">{{post.node.excerpt | removeHTML}}</v-clamp>
        </p>
      <g-link :to="post.node.path" class="read-more">
        Read More 
      </g-link>
      <p class="date">{{this.formatDate(post.node.date)}}</p>
      <img src="~@/assets/images/post-icon.svg" class="post-icon" />
    </div>
    <div class="details only-desktop-tablet">Photography: {{post.node.featuredMedia.caption | removeHTML}}</div>
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
    .image {
      width: 60%;
      max-height: 575px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media screen and (max-width: $breakpoint-lg) {
        width: 100%;
        max-height: auto;
      }
    }
    .content {
      width: 40%;
      margin: 20px 0;
      padding: 30px 60px;
      position: relative;
      @media screen and (max-width: $breakpoint-lg) {
        width: 92%;
        text-align: center;
        margin: -4vw auto 0 auto;
        padding: 3vw 6vw;
        border: 5px solid white;
      }

      a {
        text-decoration: none;
      }

      h1 {
        font-family: acumin-pro-extra-condensed, Helvetica, sans-serif;
        font-size: 60px;
        letter-spacing: 1px;
        line-height: 1.2;
        padding: 0;
        margin: 0;
        @media screen and (max-width: $breakpoint-md) {
          font-size: 10vw;
          letter-spacing: .2vw;
        }
      }

      h2 {
        text-align: center;
        text-transform: uppercase;
        font-size: 14px;
        margin-bottom: 20px;
        @media screen and (max-width: $breakpoint-md) {
          font-size: 4vw;
          margin-bottom: 3vw;
        }
      }

      .excerpt {
          line-height: 1.6;
          font-size: 15px;
          @media screen and (max-width: $breakpoint-md) {
          font-size: 4.5vw;
          margin-bottom: 2vw;
        }
        }

      a {
        color: white;
        &.read-more {
          font-size: 14px;
          text-transform: uppercase;
          margin-top: 30px;
          display: block;
          text-decoration: underline;
          font-weight: bold;
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
      @media screen and (max-width: $breakpoint-lg) {
        margin-top: 0;
        margin-bottom: 1vw;
      }
    }
  }
</style>
