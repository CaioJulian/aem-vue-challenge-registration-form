<template>
  <figure class="figure-home">
    <img :src="src" alt="ball logo compass" width="280" />
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '/img/ball-logo-compass.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.figure-home {
  margin: 0;
  position: absolute;
  left: 0;
  top: 40%;
}
@media (min-width: 768px) {
  .figure-home {
    top: 30%;
  }
}
</style>
