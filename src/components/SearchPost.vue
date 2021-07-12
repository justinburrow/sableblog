<template>
  <article class="post">
    <h3>
      <g-link :to="post.path">
        <div class="title" v-html="post.title"></div>
      </g-link>
    </h3>

    <div class="image" v-if="post.featuredMedia">
      <g-link :to="post.path">
        <img :src="post.featuredMedia.sourceUrl" :alt="post.featuredMedia.altText" :width="post.featuredMedia.mediaDetails.width" :height="post.featuredMedia.mediaDetails.height"/>
      </g-link>
    </div>

    <h4 class="excerpt" v-if="post.excerpt">
      <g-link :to="post.path">
        <div v-html="post.excerpt"></div>
      </g-link>
    </h4>

  <h5>
    <span v-for="(cat, i) of post.categories" :key="i">
      <g-link :to="cat.path">
        {{cat.title}}
      </g-link>
    </span>
    <div class="arrow"><div class="head"></div></div>
  </h5>

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
      //required: true,
    },
    'index': {
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
    },
  }
}
</script>
