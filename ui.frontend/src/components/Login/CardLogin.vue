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
    }
  }
}
</script>

<style lang="scss">
@import "./cardLogin.scss";
</style>
