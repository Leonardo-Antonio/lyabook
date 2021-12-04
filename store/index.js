export const state = () => ({
  email: 'cacs',
  validate:false,
})

export const mutations = {
  verify(state, email) {
    state.email = email
  },
  validateTC(state,validate){
    state.validate = validate
  }
}