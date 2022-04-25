export default {
  mounted () {
    this.checkUserLoginLocalStorage()
  },
  methods: {
    checkUserLoginLocalStorage () {
      const userLogin = JSON.parse(localStorage.getItem('userLogin'))
      const { path } = this.$route

      if (path === '/content/vue/login.html' && userLogin && userLogin.login) {
        this.$store.commit('loginManager/setLogin', userLogin)
        window.location.href = '/content/vue/home.html?wcmmode=disabled'
      } else if (path === '/content/vue/home.html' && userLogin && !userLogin.login) {
        this.$store.commit('loginManager/setLogin', {})
        window.location.href = '/content/vue/login.html?wcmmode=disabled'
      }
    }
  }
}
