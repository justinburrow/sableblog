<template>

  <article class="post" v-if="(index % 3 == 0) && index != 0">
    <div class="image" v-if="post.node.featuredMedia">
      <g-link :to="post.node.path">
        <img :src="post.node.featuredMedia.sourceUrl" :alt="post.node.featuredMedia.altText" :width="post.node.featuredMedia.mediaDetails.width" :height="post.node.featuredMedia.mediaDetails.height"/>
      </g-link>
    </div>

    <div class="content">
      <h5>
        <span v-for="(cat, i) of post.node.categories" :key="i">
          <g-link :to="cat.path">
            {{cat.title}}
          </g-link>
        </span>
      </h5>

      <h3>
        <g-link :to="post.node.path">
          <div class="title" v-html="post.node.title"></div>
        </g-link>
      </h3>

      <h4 class="excerpt" v-if="post.node.excerpt">
        <g-link :to="post.node.path">
          <div v-html="post.node.excerpt"></div>
        </g-link>
      </h4>

    </div>
  </article>

  <article class="post" v-else>
    <h3>
      <g-link :to="post.node.path">
        <div class="title" v-html="post.node.title"></div>
      </g-link>
    </h3>

    <div class="image" v-if="post.node.featuredMedia">
      <g-link :to="post.node.path">
        <img :src="post.node.featuredMedia.sourceUrl" :alt="post.node.featuredMedia.altText" :width="post.node.featuredMedia.mediaDetails.width" :height="post.node.featuredMedia.mediaDetails.height"/>
      </g-link>
    </div>

    <h4 class="excerpt" v-if="post.node.excerpt">
      <g-link :to="post.node.path">
        <div v-html="post.node.excerpt"></div>
      </g-link>
    </h4>

    <h5>
      <span v-for="(cat, i) of post.node.categories" :key="i">
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
  name: 'MainPost',
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
