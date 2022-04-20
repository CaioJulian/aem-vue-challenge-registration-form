<template>
  <header class="header-home">
    <figure class="header-home__figure">
      <img :src="src" alt="logo compass" width="150" height="43" />
    </figure>
    <section class="header-home__card-middle">
      <p class="header-home__clock">11:26</p>
      <p class="header-home__date">terça-feira, 17 de março de 2022</p>
    </section>
    <section class="header-home__card-right">
      <p class="header-home__location">{{ location }}</p>
      <p class="header-home__temp">{{ temp }}°</p>
    </section>
  </header>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '/content/dam/vue/img/logo-compass.png'
    }
  },
  data () {
    return {
      location: 'Passo Fundo - RS',
      temp: '22'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./headerHome.scss"
</style>
