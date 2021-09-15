<template>
  <div>
    <div>
      <p>Contraseña actual</p>
      <el-input
        class="pt-2"
        placeholder="Contraseña actual"
        v-model="password_current"
        show-password
      ></el-input>

      <p class="pt-4">Nueva contraseña</p>
      <el-input
        class="pt-2 mb-8"
        placeholder="Nueva Contraseña"
        v-model="password_new"
        show-password
      ></el-input>
      <div class="flex justify-center">
        <el-button class="btn_save_password w-full" type="primary" round
          >Definir Contraseña
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password_current: '',
      password_new: '',
    }
  },
}
</script>
<style scoped>
.btn_save_password {
  background: #021639;
  border-color: #021639;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 21px;
  color: #fff;
}
</style>
