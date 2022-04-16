<template>
  <figure class="banner-figure-login">
    <img
      class="banner-figure-login__img"
      :src="src"
      alt="banner notebook"
      width="960"
      height="1080"
    />
  </figure>
</template>

<script>
export default {
  name: 'BannerFigureLogin',
  props: {
    src: {
      type: String,
      default: '/img/banner-notebook.png'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./bannerFigureLogin.scss";
</style>
