<template>
  <article class="home-post">
    <div class="image">
      <img :src="post.featuredMedia.sourceUrl" :alt="post.featuredMedia.altText" />
    </div>
    <div class="content">
      <h2 v-for="cat, i in post.categories" v-if="i == 0">{{cat.title}}</h2>
      <h1 v-html="post.title" />
      <p class="excerpt">
        <v-clamp class="excerpt" :max-lines="7">{{post.excerpt | removeHTML}}</v-clamp>
        </p>
      <g-link :to="post.path" class="read-more">
        Read More
      </g-link>
    </div>
  </article>
</template>

<script>
import VClamp from 'vue-clamp'
export default {
  name: 'HomePost',
  components: {
    VClamp
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  filters: {
    removeHTML: function (val) {
      let regex = /(<([^>]+)>)/ig;
      return val.replace(regex, "");
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
    }
    .content {
      width: 40%;
      margin: 30px 0;
      padding: 30px 60px;
      h1 {
        font-family: 'DIN Condensed', Helvetica, sans-serif;
        font-size: 36px;
        letter-spacing: 1px;
      }
      h2 {
        text-align: center;
        text-transform: uppercase;
        font-size: 14px;
        margin-bottom: 80px;
      }
      .excerpt {
          font-weight: 300;
          line-height: 1.6;
          font-size: 15px;
        }
      a {
        color: white;
        &.read-more {
          font-size: 14px;
          text-transform: uppercase;
          margin-top: 30px;
          display: block;
        }
      }
    }
  }
</style>
