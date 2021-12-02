<template>
  <Home />
</template>

<script>
import Home from '../../../components/dashboard/admin/home'

export default {
  layout: 'admin',
  components: {
    Home,
  },
  created() {
    try {
      // GET ROL
      var rol = JSON.parse(localStorage.getItem('rol')).rol
      if (rol != null) {
        if (rol == 'Admin') {
          localStorage.removeItem('rol')
          window.location.reload(true)
        }
      }
    } catch (error) {}
  },
}
</script>
