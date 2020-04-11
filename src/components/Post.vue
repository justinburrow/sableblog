<template>
  <div>
    <h2 v-if="post.categories" v-html="post.categories[0].title"></h2>
    <h1 v-html="post.title" />
    <div v-html="post.excerpt" />
    <g-link :to="post.path">
      Read More
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  line-height: 1.4;
  margin: 0;
  padding: 0;
}
</style>

