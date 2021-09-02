import { Notification } from 'element-ui'

export default function ({ $axios }, inject) {
  const admin = $axios.create({ baseURL: 'http://localhost:8000/api/v1' })

  admin.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  admin.onResponse((response) => {
    const route = new String(response.config.url).toString()
    if(route == "/users/log-in/dni" || route == "/users/log-in/email"){
      localStorage.setItem("user", JSON.stringify(response.data.data))
      console.log('GUARDADO EN EL LOCALSTORAGE')
    } 

    const data = response.data
    const message_type = data.message_type.toUpperCase()
    Notification.success({
      title: `${message_type} - ${response.status}`,
      message: `${data.message}`,
    })
  })
  admin.onError((error) => {
    console.log(error.response.data)
    const code = parseInt(error.response && error.response.status)
    console.log(code)
    if (code === 400) {
      const response = error.response.data
      const message_type = response.message_type.toUpperCase()
      Notification.warning({
        title: `${message_type} - ${code}`,
        message: `${response.message.join()}`,
      })
    }
  })
  inject('credentials', admin)
}
