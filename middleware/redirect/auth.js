export default function (context) {
  let path = context.route.path

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
      context.route.path == '/sign-up/email' ||
      context.route.path == '/verificacion-cuenta' ||
      context.route.path == '/'
    )
      return
    window.onNuxtReady(() => {
      window.$nuxt.$router.push('/login')
    })
  } else {
    try {
      let path = context.route.path
      if (context.route.path == '/verificacion-cuenta') context.next()

      if (path == '/cerrar-sesion') {
        localStorage.removeItem('user')
        context.next()
      }

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
