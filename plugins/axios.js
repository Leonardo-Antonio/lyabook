import { Notification } from 'element-ui'

export default function ({ $axios }, inject) {
  const admin = $axios.create({ baseURL: 'http://localhost:8080/api/v1' })
  admin.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  admin.onResponse((response) => {
    const data = response.data
    const message_type = data.message_type.toUpperCase()
    Notification.success({
      title: `${message_type} - ${response.status}`,
      message: `${data.message}`
    })
  })
  admin.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    console.log(code)
    if (code === 400) {
      const response = error.response.data
      const message_type = response.message_type.toUpperCase()
      Notification.warning({
        title: `${message_type} - ${code}`,
        message: `${response.message.join()}`
      })
    }
  })
  inject('admin', admin)
}

/* export default function ({ $axios }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    console.log(code)
    if (code === 400) {
      console.log('te amo')
    }
  })
}
 */
