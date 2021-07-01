<template>
    <div class="slide">
      <article>
        <h4>
          <span v-for="(cat, i) of post.categories" :key="i">
            <g-link :to="post.path">
              <span v-html="cat.title"></span>
            </g-link>
          </span>
        </h4>
        <h3>
          <g-link :to="post.path">
            <div class="title" v-html="post.title"></div>
          </g-link>
        </h3>
        <div class="image">
          <g-link :to="post.path" v-if="post.featuredMedia != null">
            <img :src="post.featuredMedia.sourceUrl" :alt="post.featuredMedia.altText" />
          </g-link>
        </div>
        <h5>
          <g-link :to="post.path">
            <div>
              {{post.excerpt | removeHTML}}
            </div>
          </g-link>
        </h5>
      </article>
    </div>
</template>



<script>
import {isMobile} from 'mobile-device-detect';

export default {
  name: 'TrendingFeatures',
  data() {
    return {
      isMobile,
    }
  },
  props: {
    'post': {
      required: true,
    },
  },
  components: {

  },
  filters: {
    removeHTML: function (val) {
      let regex = /(<([^>]+)>)/ig;
      val = val.replace(regex, "");
      return val.replace(/(&#(\d+);)/g, function(match, capture, charCode) {
        return String.fromCharCode(charCode);
      });
    },
  },
}
</script>
