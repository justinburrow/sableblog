<template>
    <div class="dropdown" ref="dropdown" :class="showDropdown ? 'show' : 'hide'" @mouseleave="showDropdown=false"> 
      <ul class="items">
        <li class="title"><h3 class="title">{{ currentCatTitle }}</h3></li>
        <li v-for="post in catPosts" class="post" :key="post.node.id">
          <div class="image">
            <g-image :src="post.node.featuredMedia.sourceUrl"></g-image>
          </div>
          <div class="post-info">
           <h4>{{post.node.title}}</h4>
            <g-link :to="post.node.path">Read More</g-link> 
          </div>
        </li>
      </ul>
    </div>
</template>

<static-query>
  query {
  catPosts: allWordPressPost(sortBy: "date") {
    edges {
      node {
        title
        link
        path
        featuredMedia {
          sourceUrl
          altText
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
    props: ['currentCat', 'currentCatTitle'],
    data() {
        return {
          catPosts: [],
          category: this.currentCat,
          showDropdown: false
        }
    },
    watch: {
      currentCat: function(id) {
        this.category = id;
        this.filterPosts();
        this.showDropdown = true;
      }
    },
    methods: {
      filterPosts() {
        this.catPosts = [];
        this.$static.catPosts.edges.forEach((post) => {
          const postCats = [];
          post.node.categories.forEach((cat) => {
            postCats.push(cat.id)
          });
          if (postCats.indexOf(this.category) > -1) {
            this.catPosts.push(post);
          }
          if (this.catPosts.length > 3) {
            this.catPosts = this.catPosts.slice(0, 3);
          }
        });
      },

      closeMenu() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .dropdown {
    background: rgba(0, 0, 0, 0.9);
    position: absolute;
    width: 100vw;
    left: -30px;
    top: 40px;
    z-index: 100;
    &.hide {
      opacity: 0;
      pointer-events: none;
    }
    &.show {
      z-index: 100;
      transition: opacity 0.6s ease;
      opacity: 1;
      pointer-events: default;
    }
    ul.items {
      display: flex;
      justify-content: space-between;
      align-content: center;
      height: 100%;
      list-style-type: none;
      margin: 0;
      padding: 45px 150px;
      li {
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 24%;
        color: white;
        text-align: center;
        position: relative;
        align-content: center;
        .image {
          overflow: hidden;
          padding-bottom: 100%;
          position: relative;
          margin-bottom: 15px;
        }
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          object-fit: cover;
        }
        h3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%);
          font-size: 26px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
      }
    }
  } 
  .post-info {
      width: 100%;
      display: flex;
      h4 {
        font-family: 'Kenzo', Helvetica, sans-serif;
        flex-grow: 1;
        text-align: left;
        font-size: 22px;
        text-transform: uppercase;
        margin: 0 10px 0 0;
      }
      a {
        color: white;
        font-size: 12px;
        text-transform: uppercase;
        flex-shrink: 0;
      }
    }  
</style>