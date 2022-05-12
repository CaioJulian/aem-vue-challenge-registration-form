<template>
  <section class="container">
    <section class="card-form">
      <article class="card-form__header">
        <p class="card-form__title">Team Sign Up</p>
      </article>
      <article class="card-form__body">
        <form action="">
          <InputGroup v-for="(item, index) in inputs" :key="index" :item="item" />
        </form>
      </article>
    </section>
  </section>
</template>

<script>
import InputGroup from '../micro/InputGroup.vue'
export default {
  props: {
    inputs: {
      type: Array,
      default: () => []
    }
  },
  components: { InputGroup }
}
</script>

<style lang="scss" scoped>
@import './cardForm.scss';
</style>
