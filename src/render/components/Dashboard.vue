<template lang="pug">
  #editable(v-on:keyup='changed', v-on:blur='changed', v-on:paste='changed', v-on:delete='changed', v-on:focus='changed', contenteditable='true') {{note}}
</template>

<script>
export default {
  data() {
    return {
      note: "hi",
      timeoutID: null,
    }
  },
  methods: {
    addText() {
      console.log(this.note)
    },
    changed: function(event) {
      clearTimeout(this.$timeoutID);
      this.$timeoutID = setTimeout(() => {
        this.note = event.target.innerText;
        console.log(this.note)
      }, 1000);
    }
  }
}
</script>


<style lang="scss" scoped>
main {
  content: editable;
}
</style>

