export default function (context) {
  const dataUser = JSON.parse(JSON.stringify(localStorage.getItem('user')))
  console.log(dataUser)
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
  }
}
