<template>
  <div />
</template>

<script>
export default {
  data() {
    return {
      env: {}
    }
  },

  async mounted() {
    this.env = this.$env
  }
}
</script>
