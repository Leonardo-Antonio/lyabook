export default function (context) {
  const path = context.route.path
  switch (path) {
    case '/sign-up':
      window.onNuxtReady(() => {
        window.$nuxt.$router.push('/sign-up/email')
      })
      break

    case '/admin':
      window.onNuxtReady(() => {
        window.$nuxt.$router.push('/dashboard/admin')
      })
      break

    case '/manager':
      window.onNuxtReady(() => {
        window.$nuxt.$router.push('/dashboard/manager')
      })
      break

    default:
      break
  }

  const dataUser = JSON.parse(JSON.stringify(localStorage.getItem('user')))
  if (dataUser == null) {
    if (
      context.route.path == '/login' ||
      context.route.path == '/sign-up' ||
      context.route.path == '/sign-up/dni' ||
      context.route.path == '/sign-up/email'
    )
      return
    window.onNuxtReady(() => {
      window.$nuxt.$router.push('/login')
    })
  } else {
    try {
      const path = context.route.path
      if (path == '/cerrar-sesion') {
        localStorage.removeItem('user')
        context.next()
      }

      if (String(path).includes('/verificacion-cuenta')) context.next()

      const dataUserJson = JSON.parse(dataUser).user
      if (dataUserJson.rol == 'Admin' || dataUserJson.rol == 'Manager') {
        const sectionPage = context.route.name.split('-')[1]
        if (
          String(sectionPage).toLowerCase() !=
          String(dataUserJson.rol).toLowerCase()
        ) {
          window.onNuxtReady(() => {
            window.$nuxt.$router.push('/403')
          })
        }
      }
    } catch (error) {}
  }
}
