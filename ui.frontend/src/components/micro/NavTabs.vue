<template>
  <ul v-if="navs.length" class="nav-tabs">
    <li
      class="nav-tabs__item"
      :class="{ 'nav-tabs__item--active': isActive(idName(item.name)) }"
      v-for="(item, index) in navs"
      :key="`nav-${index}`"
    >
      <a
        :data-testid="`nav-tabs-${index}`"
        class="nav-tabs__link"
        :class="{ 'nav-tabs__link--active': isActive(idName(item.name)) }"
        :href="`#${idName(item.name)}`"
        @click.prevent="setActive(idName(item.name))"
        >{{ item.name }}</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    navs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeItem: ''
    }
  },
  mounted () {
    this.firstActiveItem()
  },
  methods: {
    firstActiveItem () {
      const { navs } = this
      if (navs.length) this.activeItem = this.idName(navs[0].name)
    },
    setActive (item) {
      this.activeItem = item
    },
    isActive (item) {
      return this.activeItem === item
    },
    idName (link) {
      return link ? link.toLowerCase().replace(' ', '-') : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import './navTabs.scss';
</style>
