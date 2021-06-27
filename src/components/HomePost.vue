<template>
  <article>
    <h4>
      <span v-for="(cat, i) of post.categories" :key="i">
        <g-link :to="post.path">
          <span v-html="cat.title"></span>
        </g-link>
      </span>
    </h4>

    <div class="image">
      <g-link :to="post.path" v-if="post.featuredMedia != null">
        <img :src="post.featuredMedia.sourceUrl" :alt="post.featuredMedia.altText" />
      </g-link>
    </div>

      <h3 ref="titleBox">
        <g-link :to="post.path">
          <div class="title" v-html="post.title"></div>
        </g-link>
      </h3>

      <p class="excerpt" v-if="post.excerpt">
        <g-link :to="post.path">
          <div>
            {{post.excerpt | removeHTML}}
          </div>
        </g-link>
      </p>

  </article>
</template>

<script>
import VClamp from 'vue-clamp'
import moment from 'moment';

export default {
  name: 'HomePost',
  components: {
    VClamp
  },
  props: {
    'post': {
      required: true,
    },
  },
  data() {
    return {
      titleLength: this.$refs.titleBox,
    }
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
  methods: {
    formatDate(postDate) {
      return moment(postDate).format('MMM Do, YYYY')
    },

    countLines() {
     var el = this.$refs.div.title;
     var divHeight = el.offsetHeight;
     var lineHeight = parseInt(el.style.lineHeight);
     var lines = divHeight / lineHeight;
     console.log(this.$refs.titleBox);
   }
  }
}
</script>
