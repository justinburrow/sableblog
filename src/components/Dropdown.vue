<template>
  <div >

  </div>
</template>

<static-query>
  query {
  allCategoryImages {
    edges {
      node {
        id
        acf {
          categoryImage
        }
      }
    }
  }

  allWordPressCategory(order: ASC,
    filter: {
        slug: { nin: ["homepage-hero-banners", "uncategorized"]}
      }
    )
    {
    edges {
      node {
        id
        title
        path
        count
      }
    }
  }

  allWordPressPost(sortBy: "date", order: DESC) {
      edges {
        node {
          id
          date
          featuredMedia {
            sourceUrl
          }
          categories {
            id
          }
        }
      }
    }
  }
</static-query>

<script>
export default {
    name: 'Dropdown',
    props: [],
    data() {
        return {

        }
    },
    watch: {

    },
    created() {
      this.$static.allWordPressCategory.edges.forEach((cat) => {
        const catId = cat.node.id;
        let matchedPosts = [];
        let matchedPost = {}

        // Create an array of all possible posts for the category
        this.$static.allWordPressPost.edges.forEach((post) => {
          post.node.categories.filter((cat) => {
            if (cat.id === catId) {
              matchedPosts.push(post.node);
            }
          })
        });

        // Remove categories from each post that don't match
        matchedPosts.forEach((post) => {
          post.categories.forEach((cat, i) => {
            if (cat.id != catId) {
              post.categories.splice(1, i);
            }
          })
        })

        // Push the first post that isn't already in this.catImages
        if (Array.isArray(this.catImages) && this.catImages.length) {
          matchedPost = matchedPosts.find((p) => {
            if (!this.catImages.includes(p)) {
              return p;
            }
          })
        } else {
          matchedPost = matchedPosts[0];
        }
        this.catImages.push(matchedPost);
      })
    },
    methods: {
      filterNewCatImage(catId) {
        let matchedPost = this.catImages.find((post) => {
          return post.categories.some((cat) => {
            return cat.id == catId;
          })
        })
        if (matchedPost.featuredMedia.sourceUrl) {
          return matchedPost.featuredMedia.sourceUrl;
        } else {
          return 'http://www.google.com';
        }
      }
    }
  }
</script>
