<template>
  <article class="home-post">
      <div class="image">
        <g-link :to="post.node.path" v-if="post.node.featuredMedia != null"><img :src="post.node.featuredMedia.sourceUrl" :alt="post.node.featuredMedia.altText" /></g-link>
      </div>
      <h4 v-for="(cat, i) in post.node.categories" :key="i">
        <g-link :to="cat.path"><span v-if="i == 0">{{cat.title}}</span></g-link>
      </h4>
      <h2><g-link :to="post.node.path">{{post.node.title}}</g-link></h2>
      <p class="excerpt">
        <g-link :to="post.node.path"><v-clamp class="excerpt only-desktop" :max-lines="2">{{post.node.excerpt | removeHTML}}</v-clamp></g-link>
        <g-link :to="post.node.path"><v-clamp class="excerpt only-mobile-tablet" :max-lines="2">{{post.node.excerpt | removeHTML}}</v-clamp></g-link>
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
      @media screen and (max-width: $breakpoint-lg) {
        width: 100%;
        max-height: auto;
        padding-top: 92%;
        position: relative;
      }
    }

    h4 {
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      font-size: .9rem;
      margin-top: 5px;
      margin-bottom: 5px;
      font-family: acumin-pro-condensed, Helvetica, sans-serif;
      font-weight: 300;
    }

    h2 {
      font-family: acumin-pro-extra-condensed, Helvetica, sans-serif;
      text-transform: uppercase;
      text-align: left;
      font-size: 1.8rem;
      letter-spacing: 1px;
      line-height: 1;
      padding: 0;
      margin: 10px 0 0 0;
      @media screen and (max-width: $breakpoint-xl) {
        font-size: 4vw;
      }
      @media screen and (max-width: $breakpoint-md) {
        font-size: 7vw;
        letter-spacing: .2vw;
      }
    }

    .excerpt {
      line-height: 1.2;
      font-size: 15px;
      color: black;
      @media screen and (max-width: $breakpoint-md) {
        font-size: 3.1vw;
        margin-bottom: 2vw;
        text-align: left;
      }
    }
  }
</style>
