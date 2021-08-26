export const state = () => ({
  email: 'cacs'
})

export const mutations = {
  verify(state, email) {
    state.email = email
  }
}