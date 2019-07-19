<template lang="pug">
.wrapper
  WindowNav
  router-view
</template>

<script>

import WindowNav from './partials/WindowNav.vue'

export default {
  components: {
    WindowNav
  }
}
</script>

<style lang="scss">
  @import "./styles/general.scss";

  main {
    padding: 5px;
  }
</style>

<style lang="scss" scoped>
  .wrapper {
    display: grid;
    grid-template-rows: 20px 1fr;
    height: 100vh;
    overflow: hidden;
  }
</style>
