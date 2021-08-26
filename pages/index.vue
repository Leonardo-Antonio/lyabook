<template>
  <div>
    <el-input placeholder="Please input" v-model="input" clearable> </el-input>
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
    }
  },
  methods: {
    async add() {
      const data = await this.$axios.$get('/todos/1')
      console.log(data)
    }
  }
}
</script>
