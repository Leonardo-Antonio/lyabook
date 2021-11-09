<template>
  <div>
    <div>
      <p>Nueva contraseña</p>
      <el-input
        class="pt-2"
        placeholder="Nueva Contraseña"
        v-model="password_new"
        show-password
      ></el-input>

      <p class="pt-4">Confirmar contraseña</p>
      <el-input
        class="pt-2 mb-8"
        placeholder="Contraseña actual"
        v-model="password_confirm"
        show-password
      ></el-input>

      <div class="flex justify-center">
        <el-button
          class="btn_save_password w-full"
          type="primary"
          round
          @click="change"
          >Cambiar Contraseña
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: '',
      password_new: '',
      password_confirm: '',
    }
  },
  methods: {
    async change() {
      try {
        if (this.password_new == this.password_confirm) {
          //Obteniendo del localstorage
          const tokenValue = JSON.parse(localStorage.getItem('user')).token

          //Armando el body
          var bodyData = {
            password: this.password_new,
          }

          //Actualizando la contraseña
          const update = await this.$admin({
            url: '/users/' + this.data._id,
            method: 'put',
            data: bodyData,
          })

          if (update.status == 200) {
            //Obteniendo los nuevos datos
            const response = await this.$admin({
              url: '/users/' + this.data._id,
              method: 'get',
            })
            if (response.status == 200) {
              //Eliminar el localstorage
              localStorage.removeItem('user')

              //Agregando el localstorage
              localStorage.setItem(
                'user',
                JSON.stringify({ token: tokenValue, user: response.data.data })
              )
              window.location.reload(true)
            }
          }
        }else{
          this.$message.error('Oops, las contraseñas no coinciden');
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    const data = localStorage.getItem('user').toString()
    if (data != undefined || data != null) {
      this.data = JSON.parse(data).user
      this.name = this.data.name
      this.last_name = this.data.last_name
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
