<template>
  <Layout>
    <section class="search-results">

      <ul class="items search">
        <li class="title"><h3>Searching For: "{{this.searchingBy}}"</h3></li>
        <li v-for="post in searchResults" class="post" :key="post.id">
          <div class="image">
            <g-link :to="post.path"><g-image :src="post.featuredMedia.sourceUrl"></g-image></g-link>
          </div>
          <div class="post-info">
          <g-link :to="post.path"><h4>{{post.title}}</h4></g-link>
            <g-link :to="post.path" class="read-more">Read More</g-link>
          </div>
        </li>
        <li v-if="this.searchResults == 0">Sorry, no posts were found</li>
      </ul>

    </section>
  </Layout>
</template>

<page-query>
query {
  allPosts: allWordPressPost {
    edges {
      node {
        id
        title
        path
        dateGmt
        excerpt
        categories {
          title
        }
        featuredMedia {
          sourceUrl
          altText
          caption
        }
      }
    }
  }
}
</page-query>

<script>
import HomePost from '~/components/HomePost.vue'
import Flexsearch from 'flexsearch'

export default {
  data() {
    return {
      searchingBy: this.$store.searchQuery
    }
  },
  components: {
    HomePost
  },
  metaInfo: {
    title: 'S\'able Labs'
  },
  filters: {
    lowercase: function (val) {
      return val.toLowerCase();
    }
  },
  beforeMount() {
    this.index = new Flexsearch({
      tokenize: 'forward',
      doc: {
        id: 'id',
        field: [
          'title',
          'excerpt'
        ]
      }
    })
    this.index.add(this.$page.allPosts.edges.map(e => e.node));
  },
  mounted() {

  },
  computed: {
    searchResults() {
      return this.index.search({
        query: this.searchingBy,
      });
    }
  },
}
</script>s

<style lang="scss">
  .post-list {
    margin: 60px 0 0 0;
    padding: 0;
    list-style-type: none;
    width: 100%;
    @media screen and (max-width: $breakpoint-md) {
      margin-top: 7vw;
    }
    li {
      margin: 0;
      padding: 0;
      margin-bottom: 80px;
      padding-bottom: 80px;
      border-bottom: 1px solid black;
      @media screen and (max-width: $breakpoint-lg) {
        margin-bottom: 7vw;
        padding-bottom: 7vw;
      }
      .read-more a {
        color: white;
      }
      &.lifestyle {
         article {
          .content {
            background: #1d4a45;
            color: white;
            a {
              color: white;
            }
            .read-more a {
              border: 2px solid white;
              &:hover {
                background: white;
                color: black;
              }
            }
            .post-icon {
              filter: contrast(100) grayscale(100%) invert(1);
            }
          }
        }
      }
      &.culture {
         article {
          .content {
            background: #f1f1f1;
            color: black;
            a {
              color: black;
            }
            .read-more a {
              &:hover {
                background: black;
                color: white;
              }
            }
          }
        }
      }
      &.coupledom {
         article {
          .content {
            background: #4d4d4f;
            color: white;
            a {
              color: white;
            }
            .read-more a {
              border: 2px solid white;
              &:hover {
                background: black;
                color: white;
                border-color: black;
              }
            }
            .post-icon {
              filter: contrast(100) grayscale(100%) invert(1);
            }
          }
        }
      }
      &.community {
         article {
          .content {
            background: #c0bdbd;
            color: black;
            a {
              color: black;
            }
            .read-more a {
              border: 2px solid white;
              &:hover {
                background: white;
                color: black;
              }
            }
          }
        }
      }
      &:last-child {
        border: none;
      }
    }
  }
  .instagram {
    margin-bottom: 80px;
    h3 {
      background: #005851;
      width: 645px;
      margin: 80px auto 20px auto;
      text-transform: uppercase;
      font-size: 15px;
      text-align: center;
      padding: 8px 0;
      color: white;
      letter-spacing: 1px;
      line-height: 1.2;
      @media screen and (max-width: $breakpoint-md) {
        padding: 2vw 1vw 3vw 1vw;
        line-height: 1;
        width: 100%;
        margin-bottom: 2vw;
      }
    }
  }
</style>
