<template>
    <div class="header-cat">
        <p class="title">{{this.title}}</p>
    </div>  
</template>


<script>
export default {
    name: 'HeaderCat',
    props: ['title', 'catId']
}
</script>

<style lang="scss">
.header-cat {
  display: inline;
  p {
    display: inline;
  }
}
    
</style>