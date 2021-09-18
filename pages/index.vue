<template>
  <div>
    <div class="flex justify-center">
      <Banner1 />
    </div>
    <div class="flex justify-center">
      <Banner2 />
    </div>
    <div class="flex justify-center relative overflow-x-hidden overflow-y-hidden pt-32 pb-36">
      <div class="w-4/6">
        <Banner3 />
      </div>
      <img
        src="/shapes/doble-circle-grayBlue.svg"
        class="absolute z-10"
        style="width: 3rem; left: 2rem; top: 1rem"
      />
      <img
        src="/shapes/circle-degradado-purple.svg"
        class="absolute z-10 rotate"
        style="width: 2rem; right: 5rem; top: 17rem"
      />
      <img
        src="/shapes/circle-degradado-complete.svg"
        class="absolute z-10 rotate"
        style="width: 12rem; right: -4rem; top: 22rem; transform: rotate(-355deg);"
      />
      <img
        src="/shapes/circle-double-aye.svg"
        class="absolute z-10 rotate"
        style="width: 8rem; left: -3rem; top: 33rem"
      />
    </div>
    
  </div>
</template>

<script>

import Banner1 from '../components/home/banner-1'
import Banner2 from '../components/home/banner-2'
import Banner3 from '../components/home/banner-3'


export default {
  components: {
    Banner1,
    Banner2,
    Banner3
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
