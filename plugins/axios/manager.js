import { Notification } from 'element-ui'

export default function ({ $axios, redirect }, inject) {
  const manager = $axios.create({ baseURL: 'http://localhost:8000/api/v1' })
  try {
    manager.setToken(JSON.parse(localStorage.getItem('user')).token)
  } catch {
    redirect('/errors/403')
  }

  manager.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  manager.onResponse((response) => {
    if (
      response.config.url == '/users/roles/admin' ||
      response.config.url == '/reports/books/df' ||
      response.config.url == '/reports/books/stock/10' ||
      response.config.url == '/reports/books/sold'
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
  manager.onError((error) => {
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
  inject('manager', manager)
}
