<template>
  <Layout>
    <div class="category">
      <h1>Category: {{ $page.wordPressCategory.title }}</h1>
      <ul class="post-list">
        <li v-for="{ node } in $page.wordPressCategory.belongsTo.edges" :key="node.id">
          <HomePost :post="{ node }" />
        </li>
      </ul>
      <Pager :info="$page.wordPressCategory.belongsTo.pageInfo"/>
    </div>
  </Layout>
</template>

<page-query>
query WordPressCategory ($id: ID!, $page: Int) {
  wordPressCategory(id: $id) {
    title
    belongsTo(page: $page, perPage: 10) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
            id
            title
            path
            excerpt
            featuredMedia {
              sourceUrl
              caption
              altText
            }
        	}
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import HomePost from '~/components/HomePost.vue'

export default {
  components: {
    Pager,
    HomePost
  },
  metaInfo () {
    return {
      title: this.$page.wordPressCategory.title
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  h1 {
    font-family: 'acumin-pro-extra-condensed';
    font-size: 48px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
  }
  a {
    color: black;
  }
}
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
      &:nth-child(1) {
         article {
          .content {
            background: #1d4a45;
            color: white;
            a {
              color: white;
            }
            .post-icon {
              filter: brightness(100);
            }
          }
        }
      }
      &:nth-child(2) {
         article {
          .content {
            background: #f1f1f1;
            color: black;
            a {
              color: black;
            }
            
          }
        }
      }
      &:nth-child(3) {
         article {
          .content {
            background: #4d4d4f;
            color: white;
            a {
              color: white;
            }
            .post-icon {
              filter: brightness(100);
            }
          }
        }
      }
      &:nth-child(4) {
         article {
          .content {
            background: #c0bdbd;
            color: black;
            a {
              color: black;
            }
          }
        }
      }
      &:last-child {
        border: none;
      }
    }
  }
</style>
