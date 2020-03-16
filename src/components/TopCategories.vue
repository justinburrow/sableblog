<template>
  <div>
    <ul class="top-categories">
        <li v-for="cat in $static.categories.edges" :key="cat.id">
          <div class="header-cat" @mouseover="showDropdown(cat.node.id)">
              <div class="title">{{cat.node.title}}</div>
          </div>  
        </li>
    </ul>
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

export default {
    name: 'TopCategories',
    components: {

    },
    props: {
      title: String,
      catId: Number
    },
    data () {
      return {
        dropdownCatId: 0
      }
    },
    methods: {
      showDropdown(catId) {
        this.dropdownCatId = catId
      }
    }
}
</script>

<style lang="scss" scoped>
    .top-categories {
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