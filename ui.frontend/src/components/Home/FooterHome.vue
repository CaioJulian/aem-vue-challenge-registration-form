<template>
  <footer class="footer-home">
    <section class="footer-home__card-left">
      <p class="footer-home__description-left">{{ description }}</p>
      <div class="footer-home__pipe"></div>
    </section>
    <form class="footer-home__form" action="">
      <input
        type="search"
        class="footer-home__input footer-home__input--user"
        placeholder="Buscar usuários"
        required
      />
    </form>
    <section class="footer-home__card-right">
      <div class="footer-home__pipe"></div>
      <p class="footer-home__description-right">Application refresh in</p>
      <article class="footer-home__timer">
        <p class="footer-home__number">{{ number }}</p>
        <p class="footer-home__unit">{{ unit }}</p>
      </article>
    </section>
    <section class="footer-home__group-button">
      <button class="footer-home__button-nav">Continuar Navegando</button>
      <button
        data-testid="logout-button"
        class="footer-home__button-logout"
        title="Logout"
        @click="logout()"
      >
        Logout
      </button>
    </section>
  </footer>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default:
        'Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.'
    }
  },
  data () {
    return {
      number: 180
    }
  },
  computed: {
    unit () {
      const { number } = this
      return number > 1 ? 'seconds' : 'second'
    }
  },
  methods: {
    logout () {
      this.$store.commit('loginManager/setLogin', {})
      window.location.href = '/content/vue/login.html'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './footerHome.scss'
</style>
