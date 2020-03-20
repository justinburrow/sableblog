<template>
  <div class="home-featured" :style="{ backgroundImage: `url(${post.featuredMedia.sourceUrl})`}">
    <div class="post-info">
      <p class="category">{{post.categories[0].slug}}</p>
      <h2><g-link :to="post.path">{{post.title}}</g-link></h2>
      <p class="read-more"><g-link :to="post.path">Read More</g-link></p>
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
      post: null,
    }
  },
  mounted() {
    this.post = this.$static.newestPost.edges[0].node
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
    .post-info {
      width: 350px;
      position: absolute;
      right: 50px;
      top: 50%;
      transform: translateY(-50%);
      p {
        margin: 0;
        font-weight: 300;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 14px;
      }
      h2 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
        font-family: 'Kenzo', Helvetica, sans-serif;
        font-size: 50px;
        letter-spacing: 2px;
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