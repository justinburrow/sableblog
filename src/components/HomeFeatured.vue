<template>
    <div class="home-featured" :style="{ backgroundImage: `url(${$static.newestPost.edges[0].node.featuredMedia.sourceUrl})`}">
      <div class="post-info">
        <p class="category">
          <g-link :to="$static.newestPost.edges[0].node.categories[0].path">{{$static.newestPost.edges[0].node.categories[0].slug}}</g-link>
        </p>
        <h2><g-link :to="$static.newestPost.edges[0].node.path">{{$static.newestPost.edges[0].node.title}}</g-link></h2>
        <p class="read-more"><g-link :to="$static.newestPost.edges[0].node.path">Read More</g-link></p>
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
          path
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

<style lang="scss" scoped>
  .home-featured {
    background-size: cover;
    background-position: center center;
    height: 500px;
    color: white;
    position: relative;
    margin-bottom: 45px;
    @media screen and (max-width: $breakpoint-md) {
      height: 50vh;
    }
    a {
      color: white;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      &:visited {
        color: white;
      }
    }
    .post-info {
      width: 350px;
      position: absolute;
      right: 50px;
      top: 50%;
      transform: translateY(-50%);
      @media screen and (max-width: $breakpoint-md) {
        position: absolute;
        transform: none;
        width: 100%;
        top: auto;
        bottom: 2vw;
        left: auto;
        right: auto;
        padding: 0 5vw;
        bottom: 2vw;
      }
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