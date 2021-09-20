export default function (context) {
  const dataUser = JSON.parse(JSON.stringify(localStorage.getItem('user')))
  if (dataUser == null) {
    window.onNuxtReady(() => {
      window.$nuxt.$router.push('/login')
    })
  }
}
