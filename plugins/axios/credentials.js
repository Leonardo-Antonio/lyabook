import { Notification } from 'element-ui'
export default function ({ $axios, redirect }, inject) {
  const credentials = $axios.create({
    baseURL: `${process.env.API_MANAGER_ADMIN}/api/v1`,
  })
  let urlRequest
  credentials.onRequest((config) => {
    urlRequest = config.url
    console.log('Making request to ' + config.url)
  })

  credentials.onResponse((response) => {
    const route = new String(response.config.url).toString()
    if (route == '/users/log-in/dni' || route == '/users/log-in/email') {
      const { data } = response.data
      localStorage.setItem('user', JSON.stringify(data))
      console.log('GUARDADO EN EL LOCALSTORAGE')
      switch (data.user.rol) {
        case 'Admin':
          redirect('/dashboard/admin')
          break
        case 'Client':
          redirect('/')
          break
        case 'Manager':
          redirect('/dashboard/manager')
          break
        default:
          Notification.error({
            title: 'Error',
            message: 'el rol no existe',
          })
          break
      }
    }

    const data = response.data
    const message_type = data.message_type.toUpperCase()
    Notification.success({
      title: `${message_type} - ${response.status}`,
      message: `${data.message}`,
    })
  })

  credentials.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    console.log('Error http code: ', code)
    if (code == 400) {
      if (urlRequest == '/users/sign-up/email') {
        const data = error.response.data
        Notification.error({
          title: `${data.message_type.toUpperCase()} - ${code}`,
          message: `${data.message}`,
        })
      } else {
        const data = error.response.data
        Notification.error({
          title: `${data.message_type.toUpperCase()} - ${code}`,
          message: `${data.message}`,
        })
      }
    }
  })
  inject('credentials', credentials)
}
