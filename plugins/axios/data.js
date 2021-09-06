import { Notification } from 'element-ui'

export default function ({ $axios, redirect }, inject) {
  const data = $axios.create({ baseURL: 'http://localhost:8082/api/v1' })
  data.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  data.onError((error) => {
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
      case 500:
        redirect('/errors/500')
        break
    }
  })
  inject('apidata', data)
}
