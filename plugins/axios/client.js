import { Notification } from 'element-ui'

export default function ({ $axios, redirect }, inject) {
  const client = $axios.create({
    baseURL: `${process.env.API_MANAGER_ADMIN}/api/v1`,
  })
  try {
    client.setToken(JSON.parse(localStorage.getItem('user')).token)
  } catch {
    redirect('/errors/403')
  }

  client.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  client.onResponse((response) => {
    try {
      const data = response.data
      const message_type = data.message_type.toUpperCase()
      Notification.success({
        title: `${message_type} - ${response.status}`,
        message: `${data.message}`,
      })
    } catch (error) {
      redirect('/login')
    }
  })

  client.onError((error) => {
    try {
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
          redirect('/errors/401')
          break
      }
    } catch (error) {
      redirect('/errors/404')
    }
  })
  inject('client', client)
}
