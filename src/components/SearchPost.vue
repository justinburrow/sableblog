<template>
  <article class="home-post">
      <div class="image">
        <g-link :to="post.path" v-if="post.featuredMedia != null"><img :src="post.featuredMedia.sourceUrl" :alt="post.featuredMedia.altText" /></g-link>
        <div class="overlay">
        </div>
        <span>Read More</span>
      </div>
      <h4 v-for="(cat, i) in post.categories" :key="i">
        <g-link :to="cat.path"><span v-if="i == 0">{{cat.title}}</span></g-link>
      </h4>
      <h2><g-link :to="post.path">{{post.title}}</g-link></h2>
      <p class="excerpt">
        <g-link :to="post.path"><v-clamp class="excerpt only-desktop" :max-lines="2">{{post.excerpt | removeHTML}}</v-clamp></g-link>
        <g-link :to="post.path"><v-clamp class="excerpt only-mobile-tablet" :max-lines="2">{{post.excerpt | removeHTML}}</v-clamp></g-link>
        </p>
  </article>
</template>

<script>
import VClamp from 'vue-clamp'
import moment from 'moment'

export default {
  name: 'SearchPost',
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
