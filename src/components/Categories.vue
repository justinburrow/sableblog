<template>
  <div class="category-holder">
    <ul class="categories">
        <li v-for="cat in $static.categories.edges" :key="cat.id">
          <div class="header-cat" @mouseover="showDropdown(cat.node.id, cat.node.title)">
              <div class="title">{{cat.node.title}}</div>
          </div>  
        </li>
    </ul>
    <Dropdown :current-cat="this.currentCat" :current-cat-title="this.currentCatTitle" />
  </div>
    
</template>

<static-query>
    query {
        categories: allWordPressCategory {
            edges {
                node {
                    id
                    title
                }
            }
        }
    }
</static-query>

<script>
import Dropdown from "~/components/Dropdown.vue"
export default {
    name: 'Categories',
    components: {
      Dropdown
    },
    props: {
    },
    data () {
      return {
        currentCat: Number,
        currentCatTitle: '',
        dropdownState: false
      }
    },
    methods: {
      showDropdown(catId, catTitle) {
        this.currentCat = catId;
        this.currentCatTitle = catTitle;
        this.dropdownState = true;
      }
    }
}
</script>

<style lang="scss" scoped>
  .category-holder {
    position: relative;
  }
  .categories {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-between; 
      li {
        list-style-type: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
        text-transform: uppercase;
      }
  }
</style>