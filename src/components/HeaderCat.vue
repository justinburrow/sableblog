<template>
    <div class="header-cat">
        <p class="title" @mouseover="showDropdown()" @mouseout="hideDropdown()">{{this.title}}</p>
        <div class="dropdown" ref="dropdown">

        </div>
    </div>  
</template>


<script>
export default {
    name: 'HeaderCat',
    props: ['title', 'catId'],
    methods: {
      showDropdown() {
        this.$refs.dropdown.classList.toggle('show');
      },
      hideDropdown() {
        this.$refs.dropdown.classList.toggle('show');
      }
    }
}
</script>

<style lang="scss">
.header-cat {
  display: inline;
  p {
    display: inline;
    padding: 5px;
    cursor: pointer;
  }
  .dropdown {
    background: black;
    position: absolute;
    width: 100%;
    height: 100px;
    left: 0;
    opacity: 0;
    &.show {
      transition: opacity 0.3s ease;
      opacity: 1;
    }
  }
}
    
</style>