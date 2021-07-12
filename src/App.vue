<template>
  <MainLayout>
    <router-view :key="$route.fullPath"></router-view>
  </MainLayout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import MainLayout from '~/layouts/MainLayout.vue';

export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/styles.scss';
</style>
