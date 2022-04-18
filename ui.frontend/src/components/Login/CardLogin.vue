<template>
  <section class="card-login">
    <article class="card-login__header">
      <h1 class="card-login__title">{{ title }}</h1>
      <p class="card-login__description">
        {{ description }}
      </p>
    </article>
    <FormLogin />
  </section>
</template>

<script>
import FormLogin from './FormLogin.vue'
export default {
  components: { FormLogin },
  props: {
    title: {
      type: String,
      default: 'Olá,'
    },
    description: {
      type: String,
      default:
        'Para continuar navegando de forma segura, efetue o login na rede.'
    },
    background: {
      type: String,
      default: 'gray'
    }
  },
  mounted () {
    this.setBackgroundColor()
  },
  methods: {
    setBackgroundColor () {
      const body = document.getElementsByTagName('body')[0]
      body.classList.add(`bg--${this.background}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./cardLogin.scss";
</style>
