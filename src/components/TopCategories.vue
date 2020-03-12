<template>
    <ul class="top-categories">
        <li v-for="cat in $static.categories.edges | removeUncat()" :key="cat.id">{{cat.node.title}}</li>
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
    filters: {
        removeUncat(cat) {
            if (cat == 'Uncategorized') {
                return;
            }
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