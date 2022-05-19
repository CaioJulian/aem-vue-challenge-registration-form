export const state = () => ({
  activeItem: ''
})

export const mutations = {
  setActive (state, payload) {
    state.activeItem = payload
  }
}
