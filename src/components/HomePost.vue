<template>
  <article class="home-post">
      <div class="image">
        <g-link :to="post.node.path" v-if="post.node.featuredMedia != null"><img :src="post.node.featuredMedia.sourceUrl" :alt="post.node.featuredMedia.altText" /></g-link>
        <div class="overlay">
        </div>
        <span>Read More</span>
      </div>
      <h4 v-for="(cat, i) in post.node.categories" :key="i">
        <g-link :to="cat.path"><span v-if="i == 0">{{cat.title}}</span></g-link>
      </h4>
      <h2><g-link :to="post.node.path">{{post.node.title}}</g-link></h2>
      <p class="excerpt" v-if="post.node.excerpt">
        <g-link :to="post.node.path"><v-clamp autoresize class="excerpt only-desktop" :max-lines="2">{{post.node.excerpt | removeHTML}}</v-clamp></g-link>
        <g-link :to="post.node.path"><v-clamp autoresize class="excerpt only-mobile-tablet" :max-lines="2" v-html>{{post.node.excerpt | removeHTML}}</v-clamp></g-link>
        </p>
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
      val = val.replace(regex, "");
      return val.replace(/(&#(\d+);)/g, function(match, capture, charCode) {
        return String.fromCharCode(charCode);
      });
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
    width: 100%;
    text-decoration: none;

    a {
      color: black;
      text-decoration: none;
    }

    .image {
      width: 100%;
      overflow: hidden;
      position: relative;
      padding-top: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
      }
      &:hover {
        .overlay {
          opacity: 1;
        }
        span {
          opacity: 1;
        }
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(18,71,52,1);
        mix-blend-mode: multiply;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.3s ease;
        opacity: 0;
        pointer-events: none;
        @media screen and (max-width: $breakpoint-md) {
          display: none;
        }
      }
      span {
        color: white;
        text-decoration: underline;
        text-transform: uppercase;
        position: absolute;
        z-index: 100;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        font-weight: bold;
        @media screen and (max-width: $breakpoint-md) {
          display: none;
        }
      }
      @media screen and (max-width: $breakpoint-lg) {
        width: 100%;
        max-height: auto;
        padding-top: 92%;
        position: relative;
      }
    }

    .excerpt {
      margin-top: 5px;
    }

    h4 {
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      font-size: 14px;
      margin-top: 5px;
      margin-bottom: 5px;
      font-family: acumin-pro-condensed, Helvetica, sans-serif;
      font-weight: 300;
    }

    h2 {
      font-family: acumin-pro-extra-condensed, Helvetica, sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      text-align: left;
      letter-spacing: 1px;
      line-height: 1;
      padding: 0;
      margin: 10px 0 0 0;
      @media screen and (max-width: $breakpoint-xl) {
        font-size: 2.5vw;
      }
      @media screen and (max-width: $breakpoint-md) {
        font-size: 4.2vw;
        letter-spacing: .2vw;
      }
    }
  }
</style>
