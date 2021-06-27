<template>
  <MainLayout @updateViewKey="viewKeyUpdate">
    <router-view :key="viewKey"/>
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
  },
  data() {
    return {
      viewKey: 1
    }
  },
  methods: {
    viewKeyUpdate() {
      this.viewKey++;
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/styles.scss';
</style>
