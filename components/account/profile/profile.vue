<template>
  <div>
    <div v-show="showEdit">
      <div class="ml-4">
        <p class="title-account pb-2">Perfil</p>
      </div>
      <div class="flex container-father-perfile">
        <div class="container-perfile p-12 m-4 w-3/5">
          <div class="flex">
            <div class="cp-1">
              <div>
                <p class="text-title">Nombre</p>
                <div v-show="this.user.name != null">
                  <p class="text-p mt-2">{{ this.user.name }}</p>
                </div>
                <div v-show="this.user.name == null">
                  <p class="text-p mt-2">-</p>
                </div>
              </div>
              <div class="mt-8" v-show="this.user.email != null">
                <p class="text-title">Email</p>
                <div>
                  <p class="text-p mt-2">{{ this.user.email }}</p>
                </div>
              </div>
              <div class="mt-8"  v-show="this.user.dni != null">
                <p class="text-title">DNI</p>
                <div>
                  <p class="text-p mt-2">{{ this.user.dni }}</p>
                </div>
              </div>
            </div>
            <div class="cp-2">
              <div>
                <p class="text-title">Apellido</p>
                <div v-show="this.user.last_name != null">
                  <p class="text-p mt-2">{{ this.user.last_name }}</p>
                </div>
                <div v-show="this.user.last_name == null">
                  <p class="text-p mt-2">-</p>
                </div>
              </div>
              
            </div>
            
          </div>
          <div class="container-button-edit" v-show="this.user.email != null">
            <el-button
              class="btn_add_size button-to-by btn-edit"
              type="primary"
              round
              @click="showEdit = false"
              >Editar</el-button
            >
          </div>
        </div>

        <div class="w-2/5 container-x-password" v-show="showPassword">
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

        <div class="w-2/5 container-change-password" v-show="!showPassword">
          <div class="container-password container-restore px-12 pt-20 m-4">

            <RestorePassword />
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
      <div v-show="this.user.email != null">
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
    RestorePassword,
  },
  data() {
    return {
      showEdit: true,
      showPassword: true,
      //----------------------------------------------------
      user: [],
    }
  },
  created() {
    var user = localStorage.getItem('user')
    if (user != null) {
      this.user = JSON.parse(user).user
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

.container-restore {
  padding-bottom: 5.5rem;
}

@media only screen and (max-width: 1025px) {
  .container-father-perfile{
    flex-direction: column !important;
  }
  .container-perfile{
    width: 100%;
    margin: 0;
  }
  .container-x-password{
    width: 100%;
  }
  .container-password{
    margin: 1rem 0;
  }
  .container-change-password{
    width: 100%;
  }
}
</style>
