<template>
  <div>
    <div v-show="showEdit">
      <div class="ml-4">
        <p class="title-account pb-2">Perfil</p>
      </div>
      <div class="flex">
        <div class="container-perfile p-12 m-4 w-3/5">
          <div class="flex">
            <div class="cp-1">
              <div>
                <p class="text-title">Nombre</p>
                <p class="text-p mt-2">Pedro</p>
              </div>
              <div class="mt-8">
                <p class="text-title">Email</p>
                <p class="text-p mt-2">pedrolopez@gmail.com</p>
              </div>
              <div class="mt-8">
                <p class="text-title">DNI</p>
                <p class="text-p mt-2">12345678</p>
              </div>
              <div class="mt-8">
                <p class="text-title">Fecha de nacimiento</p>
                <p class="text-p mt-2">12 de enero 1996</p>
              </div>
            </div>
            <div class="cp-2">
              <div>
                <p class="text-title">Apellido</p>
                <p class="text-p mt-2">Lopez</p>
              </div>
              <div class="space"></div>
              <div class="mt-8">
                <p class="text-title">Género</p>
                <p class="text-p mt-2">Masculino</p>
              </div>
              <div class="mt-8">
                <p class="text-title">Celular</p>
                <p class="text-p mt-2">999 999 999</p>
              </div>
            </div>
          </div>
          <div class="container-button-edit">
            <el-button
              class="btn_add_size button-to-by btn-edit"
              type="primary"
              round
              @click="showEdit = false"
              >Editar</el-button
            >
          </div>
        </div>

        <div class="w-2/5" v-show="showPassword">
          <div class="container-password p-12 m-4">
            <p class="text-title">Contraseña</p>
            <p class="text-p mt-2">
              Usted todavía no tiene una contraseña definida
            </p>
            <div class="container-btn-password flex justify-end">
              <el-button
                class="btn_add_size button-to-by btn-password"
                type="primary"
                round
                @click="showPassword = false"
                >Definir Contraseña</el-button
              >
            </div>
          </div>
        </div>

        <div class="w-2/5" v-show="!showPassword">
          <div class="container-password container-restore px-12 pt-20 m-4">
            <RestorePassword/>
          </div>
        </div>
      </div>
    </div>

    <div v-show="!showEdit">
      <div class="flex items-center ml-4 container-return">
        <el-button @click="showEdit = true">
          <box-icon
            name="arrow-back"
            animation="flashing"
            color="#021639"
          ></box-icon>
        </el-button>

        <el-button
          class="return-button"
          type="primary"
          round
          @click="showEdit = true"
          >Regresar</el-button
        >
      </div>
      <div class="ml-4 pt-4">
        <p class="title-account pb-2">Editar Perfil</p>
      </div>
      <div>
        <EditProfile />
      </div>
    </div>
  </div>
</template>

<script>
import EditProfile from './edit-profile'
import RestorePassword from './restore-password'
export default {
  components: {
    EditProfile,
    RestorePassword
  },
  data() {
    return {
      showEdit: true,
      showPassword: true,
    }
  },
}
</script>

<style scoped>
.return-button {
  padding: 0px !important;
  margin-left: 0.5rem !important;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #021639;
  background: unset;
  border-color: #fff;
}

.container-return .el-button {
  padding: 0;
  border-color: #fff;
}

.container-return .el-button:hover {
  background: unset;
}

.container-restore{
  padding-bottom: 5.5rem;
}

</style>
