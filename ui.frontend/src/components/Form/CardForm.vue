<template>
  <section class="container">
    <section class="card-form">
      <article class="card-form__header">
        <p class="card-form__title">Team Sign Up</p>
      </article>
      <NavTabs :navs="navTabs" />
      <article class="card-form__body">
        <div class="card-form__pane" v-for="(pane, index) in navTabs" :key="`pane-${index}`" :id="idName(pane.tabName)" :class="{ 'card-form__pane--active': isActive(`${pane.tabName}`) }">
          <InputGroup v-for="(item, index) in pane.inputs" :key="`input-${index}`" :item="item" />
        </div>
      </article>
    </section>
  </section>
</template>

<script>
import InputGroup from '../micro/InputGroup.vue'
import NavTabs from '../micro/NavTabs.vue'
import { mapState } from 'vuex'
export default {
  props: {
    navTabs: {
      type: Array,
      default: () => []
    }
  },
  components: { InputGroup, NavTabs },
  computed: {
    ...mapState('formManager', ['activeItem'])
  },
  methods: {
    isActive (item) {
      const name = this.idName(item)
      return this.activeItem === name
    },
    idName (link) {
      return link ? link.toLowerCase().replace(' ', '-') : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import './cardForm.scss';
</style>
