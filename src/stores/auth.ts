import { defineStore } from 'pinia'

interface IUser {
  id: number
  name: string
  email: string
}

export const useAuthStore = defineStore('auth', {
  state: () =>
    <
      {
        accessToken: string | null
        refreshToken: string | null
        user: IUser | null
      }
    >{
      accessToken: localStorage.getItem('accessToken') || null,
      refreshToken: localStorage.getItem('refreshToken') || null,
      user: null,
    },
  actions: {
    setSession(accessToken: string, refreshToken: string | null, user: IUser) {
      this.accessToken = accessToken
      this.refreshToken = refreshToken
      this.user = user
      localStorage.setItem('accessToken', accessToken)
      if (refreshToken) localStorage.setItem('refreshToken', refreshToken)
    },
    removeSession() {
      this.accessToken = null
      this.refreshToken = null
      this.user = null
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    },
  },
})
