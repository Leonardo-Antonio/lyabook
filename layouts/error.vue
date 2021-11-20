<template>
  <ErrNotFount v-if="error.statusCode === 404" src="/images/404.png" />
</template>

<script>
import ErrNotFount from '../components/error'

export default {
  props: ['error'],
  components: {
    ErrNotFount,
  },
  mounted(){
    if(this.error.statusCode == 404) {
      try {
        const rol = JSON.parse(localStorage.getItem('user')).user.rol
        if(rol == 'Admin') this.$router.push('/dashboard/admin')
        else if(rol == 'Manager') this.$router.push('/dashboard/manager')
        else if(rol == 'Client') this.$router.push('/')
      } catch (error) {
        
      }
    }
  }
}
</script>
