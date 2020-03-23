<template>
  <div class="home-featured" :style="{ backgroundImage: `url(${this.$static.newestPost.edges[0].node.featuredMedia.sourceUrl})`}">
    <div class="post-info">
      <p class="category">{{this.$static.newestPost.edges[0].node.categories[0].slug}}</p>
      <h2><g-link :to="this.$static.newestPost.edges[0].node.path">{{this.$static.newestPost.edges[0].node.title}}</g-link></h2>
      <p class="read-more"><g-link :to="this.$static.newestPost.edges[0].node.path">Read More</g-link></p>
    </div>  
  </div>
</template>

<static-query>
  query {
  newestPost: allWordPressPost(sortBy: "date", limit: 1) {
    edges {
      node {
        title
        link
        path
        featuredMedia {
          sourceUrl
          altText
        }
        categories{
          slug
          id
        }
      }
    }
  }
}
</static-query>


<script>
export default {
  name: 'HomeFeatured',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
  .home-featured {
    background-size: cover;
    background-position: center center;
    height: 500px;
    color: white;
    position: relative;
    margin-bottom: 45px;
    .post-info {
      width: 350px;
      position: absolute;
      right: 50px;
      top: 50%;
      transform: translateY(-50%);
      p {
        margin: 0;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 14px;
      }
      h2 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
        font-family: acumin-pro-extra-condensed, Helvetica, sans-serif;
        font-size: 50px;
        letter-spacing: 2px;
        text-align: left;
        line-height: 1;
        margin-bottom: 10px;
        a {
          text-decoration: none;
          color: white;
        }
      }
      .read-more a {
        color: white;
        font-weight: bold;
        font-size: 11px;
      }
    }
  }

</style>