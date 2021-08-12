import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'API-KEY': '2827fe65-2b7c-4afc-baa6-0c5576337953'
  },
  withCredentials: true
})

export const userAPI = {
  getUsers (pageNumber) {
    return instance.get(`/users?page=${pageNumber}&count=9`)
      .then(res => {
        return res.data
      })
  },
  onSubscribe (id) {
    return instance.post(`/follow/${id}`)
      .then(res => {
        return res.data
      })
  },
  onUnsubscribe (id) {
    return instance.delete(`/follow/${id}`)
      .then(res => {
        return res.data
      })
  }
}

export const profileAPI = {
  getProfile (id) {
    return instance.get(`/profile/${id}`)
      .then(res => {
        return res.data
      })
  }
}

export const authAPI = {
  getAuth () {
    return instance.get(`/auth/me`)
      .then(res => {
        return res.data
      })
  }
}