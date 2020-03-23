<template>
  <Layout>
    <div class="post">
      <h2 v-html="$page.wordPressPost.categories[0].title"></h2>
      <h1 v-html="$page.wordPressPost.title"/>
      <div class="post-image">
       <img
        v-if="$page.wordPressPost.featuredMedia"
        :src="$page.wordPressPost.featuredMedia.sourceUrl"
        :alt="$page.wordPressPost.featuredMedia.altText"
      />
      </div>
      <div class="post-details">
        <span class="author">Photography: {{$page.wordPressPost.featuredMedia.caption | removeHTML}}</span>
        <span class="date">{{formatDate($page.wordPressPost.date)}}</span>
      </div>
      <div class="post-content" v-html="$page.wordPressPost.content"> 
      </div>
    </div>
    
  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!) {
  wordPressPost(id: $id) {
    title
    content
    featuredMedia {
      sourceUrl
      altText
      caption
    }
    categories {
      id
      title
      path
    }
  }
}
</page-query>

<script>
import moment from 'moment'
export default {
  metaInfo () {
    return {
      title: this.$page.wordPressPost.title
    }
  },
  methods: {
    formatDate(postDate) {
      return moment(postDate).format('MMM Do, YYYY')
    }
  },
  filters: {
    removeHTML: function (val) {
      let regex = /(<([^>]+)>)/ig;
      return val.replace(regex, "");
    }
  },
}
</script>

<style lang="scss">
  .post {
    padding-bottom: 120px;
    max-width: 1320px;
    margin: 0 auto;
  }
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    margin: 0 0 10px 0;
    padding: 0;
    letter-spacing: 1.5px;
    font-weight: 400;
  }
  h1 {
    font-family: acumin-pro-extra-condensed, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    font-size: 60px;
    margin: 0 0 20px;
    padding: 0;
  }
  .post-image {
    padding-bottom: 61%;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .post-details {
    display: flex;
    justify-content: space-between;
    margin: 30px 0 60px 0;
    color: #B2B2B2;
    .date {
      font-style: italic;
    }
  }
  .post-content {
    font-size: 17px;
    line-height: 1.4;
  }
</style>
