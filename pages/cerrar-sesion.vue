<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    localStorage.removeItem('user') 
    localStorage.removeItem('user') 
    this.$router.push('/login')
  },
}
</script>