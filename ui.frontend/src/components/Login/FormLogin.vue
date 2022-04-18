<template>
  <section class="form">
    <article class="form__body">
      <h2 class="form__title">Login</h2>
      <form class="form__group" @submit.prevent="handleSubmit">
        <input
          v-model="form.user"
          data-testid="user-input"
          class="form__input form__input--icon-user"
          type="text"
          placeholder="Usuário"
          required
        />
        <input
          v-model="form.password"
          data-testid="password-input"
          class="form__input form__input--icon-lock"
          type="password"
          placeholder="Senha"
          required
        />
        <button data-testid="login-button" class="form__button" type="submit">
          Continuar
        </button>
      </form>
    </article>
  </section>
</template>

<script>
export default {
  name: 'FormLogin',
  data () {
    return {
      form: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./formLogin.scss";
</style>
