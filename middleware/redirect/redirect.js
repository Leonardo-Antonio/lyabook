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
}
