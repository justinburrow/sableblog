<template>
  <div class="announcements">
      <agile :key="announcementContent.length" :autoplay="true" :nav-buttons="false" :speed="500" :autoplay-speed="5000" :dots="false">
        <div v-for="(slide, index) in announcementContent">
          {{ slide }}
        </div>
      </agile>
  </div>
</template>

<static-query>
  query {
    announcements: allWordPressPage(filter: {slug: {eq: "announcements"}}) {
      edges {
        node {
          content
        }
      }
    }
  }
</static-query>


<script>
import { VueAgile } from 'vue-agile'

export default {
  name: 'Announcements',
  components: {
    agile: VueAgile
  },
  data() {
    return {
      announcementContent: []
    }
  },
  created() {
    let frag = document.createRange().createContextualFragment(this.$static.announcements.edges[0].node.content);

    frag.querySelectorAll('li').forEach((slide, i) => {
      this.announcementContent.push(slide.innerHTML);
    });
  }
}
</script>

<style lang="scss" scoped>
  .announcements {
    min-height: 43px;
    font-family: acumin-pro, sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    background: black;
    color: white;
    text-align: center;
    padding: 10px;
    position: relative;
    z-index: 20;
  }
</style>
