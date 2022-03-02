import { defineStore } from 'pinia'

export const useUserStore = defineStore('main', {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      token: null,
      user: null,
      isUserLoggedIn: false,
    }
  },

})
