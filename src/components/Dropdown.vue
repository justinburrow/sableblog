<template>
    <div class="dropdown" ref="dropdown" @mouseleave="hideDropdown()">
      <ul class="items">
        <li @mouseover="getPosts()"><h3 class="title">{{id}}</h3></li>
        <li v-for="cat in catPosts">
          <div class="cat.image"></div>
        </li>
      </ul>
    </div>
</template>

<static-query>
  query {
  catPosts: allWordPressPost {
    edges {
      node {
        title
        link
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
    props: ['id'],
    data() {
        return {
          catPosts: [],
          catId: 0
        }
    },
    methods: {
      showDropdown() {
        this.$refs.dropdown.classList.add('show');
      },
      hideDropdown() {
          this.$refs.dropdown.classList.remove('show');
        },
        getPosts(cat) {
        }
      }
  }
</script>

<style lang="scss" scoped>
  .dropdown {
    background: black;
    position: absolute;
    width: 100%;
    left: 0;
    opacity: 1;
    height: 100px;
    z-index: 100;
    &.show {
      z-index: 100;
      transition: opacity 0.6s ease;
      opacity: 1;
      padding: 60px 0
    }
    ul.items {
      display: flex;
      padding: 0 12%;
      justify-content: space-between;
      align-content: center;
      height: 100%;
      list-style-type: none;
      margin: 0;
      padding: 60px 30px;
      li {
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 24%; 
        color: white;
        border: 1px solid white;
        text-align: center;
        position: relative;
        height: 100%;
        h3 {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%);
          font-size: 26px;
          letter-spacing: 3px;
        }
      }
    }
  }    
</style>