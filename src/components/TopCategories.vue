<template>
    <ul class="top-categories">
        <li v-for="cat in $static.categories.edges" :key="cat.id" v-if="cat.node.title != 'Uncategorized'">{{cat.node.title}}</li>
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
export default {
    name: 'TopCategories',
    data() {
        return {

        }
    },
    methods: {

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