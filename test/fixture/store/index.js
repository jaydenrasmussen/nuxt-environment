export default {
  actions: {
    nuxtServerInit({ commit }, ctx) {
      if (!ctx.$env) {
        throw new Error('$env is not defined!')
      }

      if (!ctx.app.$env) {
        throw new Error('$env is not defined!')
      }
    }
  }
}
