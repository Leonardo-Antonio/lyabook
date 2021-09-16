<template>
  <div>
    <div class="flex justify-center">
      <Banner1 />
    </div>
    
  </div>
</template>

<script>
import Banner1 from '../components/home/baner-1'
export default {
  components: {
    Banner1
  },
  data() {
    return {
      input: '',
    }
  },
  methods: {
    // async add() {
    //   const data = await this.$axios.$get('/todos/1')
    //   console.log(data)
    // },
  },
}
</script>
<style scoped></style>
