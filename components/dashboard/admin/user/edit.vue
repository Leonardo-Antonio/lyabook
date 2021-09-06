<template>
  <div>
    <div>
      <div class="input flex flex-row pb-4">
        <el-input v-model="data.name" placeholder="Ingrese nombres" clearable class="pr-4" />
        <el-input v-model="data.last_name" placeholder="Ingrese apellidos" clearable class="pl-4" />
      </div>

      <div class="input flex flex-row pb-4">
        <el-input v-model="data.dni" placeholder="Ingrese dni" clearable class="pr-4" />
        <el-input v-model="data.password" placeholder="Ingrese password" clearable class="pl-4" />
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>
