export default function({ $axios, app }) {
  $axios.onRequest((config) => {
    const token = app.$auth.getToken(app.$auth.strategy)
    config.headers.common.Authorization = 'Bearer ' + token
  })
}
