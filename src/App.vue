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
import MainLayout from '~/layouts/MainLayout.vue'

export default {
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
      console.log('update');
      this.viewKey++;
    }
  },
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
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/styles.scss';
</style>
