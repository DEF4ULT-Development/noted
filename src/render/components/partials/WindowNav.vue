<template lang="pug">
  nav.nav__window
    button.close(@click="changeWindow('close')")
    .drag
    NoteSwitcher
    .drag
</template>

<script>
const remote = require('electron').remote

import NoteSwitcher from './NoteSwitcher.vue'

export default {
  components: {
    NoteSwitcher
  },
  methods: {
    changeWindow(state){
      let appWindow = remote.getCurrentWindow()
      appWindow.close();
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  &__window {
    width: 100%;
    height: 25px;
    display: grid;
    grid-template-columns: 20px repeat(3, calc(calc(100vw/3) - 15px));
    grid-template-rows: auto;
  }

}
.drag {
  width: 100%;
  height: 25px;
  top:0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  -webkit-app-region: drag;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  z-index: 2;
  margin: 0 auto;
  align-self: center;
  box-sizing: border-box;

  &.close {
    background:red;
  }

  &:hover {
    opacity: .8;

  }
}
</style>
