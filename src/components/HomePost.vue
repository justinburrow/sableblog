<template>
  <article class="home-post">
      <div class="image">
        <g-link :to="post.node.path" v-if="post.node.featuredMedia != null"><img :src="post.node.featuredMedia.sourceUrl" :alt="post.node.featuredMedia.altText" /></g-link>
        <div class="overlay">
        </div>
        <span>Read More</span>
      </div>

      <div class="home-post-info">
        <h4>
          <span v-for="(cat, i) of post.node.categories" :key="i">
            <g-link :to="cat.path">
              {{cat.title}}<span v-if="i != Object.keys(post.node.categories).length - 1">, </span>
            </g-link>
          </span>
        </h4>

        <h2><g-link :to="post.node.path"><div class="title" v-html="post.node.title"></div></g-link></h2>
        <p class="excerpt" v-if="post.node.excerpt">
          <g-link :to="post.node.path"><v-clamp autoresize class="excerpt only-desktop" :max-lines="2">{{post.node.excerpt | removeHTML}}</v-clamp></g-link>
          <g-link :to="post.node.path"><v-clamp autoresize class="excerpt only-mobile-tablet" :max-lines="3" v-html>{{post.node.excerpt | removeHTML}}</v-clamp></g-link>
          </p>
      </div>
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
      required: true,
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
ul {
  padding-left: 0;
}
  .home-post {
    width: 100%;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: flex-start;

    a {
      color: black;
      text-decoration: none;
    }

    .image {
      width: 100%;
      position: relative;
      a {
        overflow: hidden;
        position: relative;
        padding-top: 100%;
        display: block;
      }
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
        width: 43%;
        position: relative;
      }
    }

    .home-post-info {
      @media screen and (max-width: $breakpoint-lg) {
        width: 50%;
        letter-spacing: 0;
      }
    }

    .excerpt {
      margin-top: 5px;
      @media screen and (max-width: $breakpoint-lg) {
        line-height: 1.4;
        font-size: 3vw;
      }
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
      @media screen and (max-width: $breakpoint-lg) {
        margin-bottom: 0;
        line-height: 1;
        font-size: 2vw;
        font-weight: 600;
      }
    }

    h2 {
      font-family: acumin-pro-extra-condensed, Helvetica, sans-serif;
      font-weight: 600;
      text-transform: uppercase;
      text-align: left;
      letter-spacing: 1px;
      line-height: 1;
      padding: 0;
      margin: 10px 0 0 0;
      widht: 100%;
      @media screen and (max-width: $breakpoint-xl) {
        font-size: 2.5vw;
      }
      @media screen and (max-width: $breakpoint-md) {
        font-size: 5vw;
        letter-spacing: 0;
        margin-top: 1.5vw;
      }
      .title {
        display: inline;
      }
    }
  }
</style>
