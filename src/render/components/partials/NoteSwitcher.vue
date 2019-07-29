<template lang="pug">
  h1(@click="changeNote") noted.
</template>

<script>
export default {
  methods: {
    changeNote() {
      console.log('hi')
    }
  }
}
</script>



<style lang="scss">
h1 {
  margin:0;
  text-align: center;
  z-index: 2;

  &:hover {
    cursor: pointer;
    background-color: var(--secondary_background_color);
  }
}
</style>
