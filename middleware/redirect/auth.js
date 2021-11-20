export default function (context) {
  let path = context.route.path
  let rol
  try {
    const routerRol = context.route.name.split('-')[1]
    rol = JSON.parse(localStorage.getItem('user')).user.rol.toLowerCase()
    console.log('rol', rol)
    console.log('rou', routerRol)
    if (rol == 'manager' && routerRol == 'admin') {
      window.onNuxtReady(() => {
        window.$nuxt.$router.push('/dashboard/manager')
      })
    }
    if (rol == 'admin' && routerRol == 'manager') {
      window.onNuxtReady(() => {
        window.$nuxt.$router.push('/dashboard/admin')
      })
    }
    if ((rol == 'client' && routerRol == 'manager') || routerRol == 'admin') {
      window.onNuxtReady(() => {
        window.$nuxt.$router.push('/')
      })
    }
  } catch (error) {}
  console.log(rol)

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
          if (String(dataUserJson.rol).toLowerCase() == 'admin') {
            window.onNuxtReady(() => {
              window.$nuxt.$router.push('/dashboard/admin')
            })
          } else if (String(dataUserJson.rol).toLowerCase() == 'manager') {
            window.onNuxtReady(() => {
              window.$nuxt.$router.push('/dashboard/manager')
            })
          }
        }
      }
    } catch (error) {}
  }
}
