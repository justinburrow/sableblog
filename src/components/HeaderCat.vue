<template>
    <div class="header-cat" @mouseover="showDropdown()">
        <p class="title">{{this.title}}</p>
        <div class="dropdown" ref="dropdown" @mouseover="showDropdown()" @mouseleave="hideDropdown()">
          <ul class="items">
            <li><h3 class="title">{{this.title}}</h3></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
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

<style lang="scss" scoped>
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
    bottom: -450px;
    left: 0;
    opacity: 0;
    height: 0;
    z-index: -1;
    &.show {
      z-index: 100;
      transition: opacity 0.6s ease;
      opacity: 1;
      height: 450px;
      padding: 60px 0
    }
    ul.items {
      display: flex;
      padding: 0 12%;
      justify-content: space-between;
      align-content: center;
      height: 100%;
      li {
        width: 24%; 
        color: white;
        border: 1px solid white;
        text-align: center;
        position: relative;
        height: 100%;
        h3 {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%);
          font-size: 26px;
          letter-spacing: 3px;
        }
      }
    }
  }
}
    
</style>