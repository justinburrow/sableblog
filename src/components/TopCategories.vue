<template>
    <ul class="top-categories">
        <li v-for="cat in $static.categories.edges" :key="cat.id">
          <HeaderCat :title="cat.node.title" :catId="cat.node.id" />
        </li>
    </ul>
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
import HeaderCat from '~/components/HeaderCat.vue'

export default {
    name: 'TopCategories',
    components: {
      HeaderCat
    },
    props: {
      title: String,
      catId: Number
    }
}
</script>

<style lang="scss">
    .top-categories {
        li {
            display: inline;
        }
    }
</style>