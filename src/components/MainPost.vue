<template>
  <article class="post">
    <div class="image" v-if="post.node.featuredMedia">
      <g-link :to="post.node.path">
      <img :src="post.node.featuredMedia.sourceUrl" :alt="post.node.featuredMedia.altText" :width="post.node.featuredMedia.mediaDetails.width" :height="post.node.featuredMedia.mediaDetails.height"/>
      </g-link>
    </div>

    <div class="content">
      <h3>
        <g-link :to="post.node.path">
          <div class="title" v-html="post.node.title"></div>
        </g-link>
      </h3>

      <h4 class="excerpt" v-if="post.node.excerpt">
        <g-link :to="post.node.path">
          <v-clamp autoresize class="excerpt only-desktop" :max-lines="2">{{post.node.excerpt | removeHTML}}</v-clamp>
        </g-link>
        <g-link :to="post.node.path">
          <v-clamp autoresize class="excerpt only-mobile-tablet" :max-lines="3" v-html>{{post.node.excerpt | removeHTML}}</v-clamp>
        </g-link>
      </h4>
      </g-link>

      <h5>
        <span v-for="(cat, i) of post.node.categories" :key="i">
          <g-link :to="cat.path">
            {{cat.title}}<span v-if="i != Object.keys(post.node.categories).length - 1">, </span>
          </g-link>
        </span>
      </h5>
    </div>
  </article>
</template>

<script>
import VClamp from 'vue-clamp'
import moment from 'moment'

export default {
  name: 'MainPost',
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
