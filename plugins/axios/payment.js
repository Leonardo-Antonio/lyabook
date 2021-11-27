import { Notification } from 'element-ui'

export default function ({ $axios, redirect }, inject) {
  const payment = $axios.create({
    baseURL: 'https://api-lyabook.duckdns.org/api/v1/payments',
  })
  try {
    payment.setToken(JSON.parse(localStorage.getItem('user')).token)
  } catch {
    redirect('/errors/403')
  }

  payment.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  payment.onError((error) => {
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
  inject('payment', payment)
}
