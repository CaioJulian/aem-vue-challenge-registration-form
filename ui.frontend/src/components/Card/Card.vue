<template>
  <section class="card">
    <h1 class="card__title">I have bad news for you</h1>
    <p class="card__description">
      The page you are looking for might be removed or is temporarily
      unavailable
    </p>
    <button class="card__button">
      <span class="card__button-title">Back to homepage</span>
    </button>
  </section>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
@import "./card.scss"
</style>
