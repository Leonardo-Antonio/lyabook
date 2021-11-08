import { Notification } from 'element-ui'

export default function ({ $axios, redirect }, inject) {
  const admin = $axios.create({ baseURL: 'http://localhost:8000/api/v1' })
  try {
    admin.setToken(JSON.parse(localStorage.getItem('user')).token)
  } catch {
    redirect('/errors/403')
  }

  admin.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  admin.onResponse((response) => {
    if (
      response.config.url == '/users/roles/admin' ||
      response.config.url == '/users/count/admin' ||
      response.config.url == '/claims' ||
      response.config.url == '/claims/amount'
    ) {
      return
    }

    const data = response.data
    const message_type = data.message_type.toUpperCase()
    Notification.success({
      title: `${message_type} - ${response.status}`,
      message: `${data.message}`,
    })
  })
  admin.onError((error) => {
    console.log(error)
    const code = parseInt(error.response && error.response.status)
    console.log('Error http code: ' + code)

    const response = error.response.data
    const message_type = response.message_type.toUpperCase()

    switch (code) {
      case 400:
        Notification.warning({
          title: `${message_type} - ${code}`,
          message: `${response.message}`,
        })
        break
      case 403:
        redirect('/errors/403')
        break

      case 404:
        redirect('/errors/404')
        break

      case 401:
        redirect('/401')
        break
      case 500:
        Notification.error({
          title: `${message_type} - ${code}`,
          message: `${response.message}`,
        })
        break
    }
  })
  inject('admin', admin)
}
