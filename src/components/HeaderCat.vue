<template>
    <div class="header-cat" @mouseover="showDropdown()">
        <p class="title">{{this.title}}</p>
        <div class="dropdown" ref="dropdown" @mouseover="showDropdown()" @mouseleave="hideDropdown()">
        </div>
    </div>  
</template>


<script>
export default {
    name: 'HeaderCat',
    props: ['title', 'catId'],
    methods: {
      showDropdown() {
        this.$refs.dropdown.classList.add('show');
      },

      hideDropdown() {
          this.$refs.dropdown.classList.remove('show');
        }
      }
  }
</script>

<style lang="scss">
.header-cat {
  p {
    display: inline;
    padding: 5px;
    cursor: pointer;
  }
  .dropdown {
    background: black;
    position: absolute;
    width: 100%;
    bottom: -200px;
    left: 0;
    opacity: 0;
    height: 0;
    z-index: 100;
    &.show {
      transition: opacity 0.6s ease;
      opacity: 1;
      height: 200px;
    }
  }
}
    
</style>