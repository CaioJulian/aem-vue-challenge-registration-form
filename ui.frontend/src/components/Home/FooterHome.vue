<template>
  <footer class="footer-home">
    <form class="footer-home__form" action="">
      <input
        type="search"
        class="footer-home__input footer-home__input--user"
        placeholder="Buscar usuários"
        required
      />
    </form>
    <div class="footer-home__group-button">
      <button class="footer-home__button-nav">Continuar Navegando</button>
      <button class="footer-home__button-logout">Logout</button>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-home {
  position: fixed;
  max-width: 2560px;
  width: 100%;
  height: 100px;
  left: 0;
  bottom: -1px;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__form {
    margin: 0 1rem;
  }

  &__input {
    max-width: 219px;
    height: 45px;
    background: #26292c;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 50px;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1rem;
    text-align: center;
    color: #ffffff;

    &--user {
      background: url('/img/icons/user.png') no-repeat 10%;
      background-size: 15px;
    }
  }

  &__group-button {
    display: flex;
    align-items: center;
  }

  &__button-nav {
    border: none;
    max-width: 109px;
    width: 100%;
    height: 99px;
    background: #ffffff;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.938rem;
    text-align: center;
    color: #c13216;
  }

  &__button-logout {
    background: transparent;
    border: none;
    max-width: 89px;
    width: 100%;
    height: 55px;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 0.938rem;
    text-align: center;
    color: #ffffff;
  }
}
</style>
