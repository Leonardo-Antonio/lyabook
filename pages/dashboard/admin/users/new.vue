<template>
  <div>
    <div>
      <div class="flex flex-row justify-between">
        <div class="flex items-end">
          <h3 class="title_admin">Nuevo administrador</h3>
        </div>
        <div>
          <div>
            <button>
              <div
                class="
                  bg_primary
                  rounded-full
                  flex
                  justify-center
                  items-center
                  btn_rounded_primary
                  rounded-full
                  w-60
                  h-10
                  btn_add_size
                "
              >
                <span class="flex justify-center items-center">
                  Guardar cambios
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-10">
      <div class="card">
        <div class="py-10">
          <div class="w-11/12 mx-auto">
            <div class="w-full pb-10">
              <div class="flex flex-col px-8 w-1/2 select">
                <span class="title_input">Tipo de registros*</span>
                <el-select v-model="typeEmail" placeholder="Ingrese una opción">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>

            <div class="input_semiroundend" v-show="account.email">
              <div class="w-full flex flex-row pb-4">
                <div class="flex flex-col px-8 w-1/2 input">
                  <span class="title_input">Nombres</span>
                  <el-input
                    v-model="dataEmail.name"
                    placeholder="Ingrese sus nombres"
                    clearable
                  />
                </div>

                <div class="flex flex-col px-8 w-1/2 input">
                  <span class="title_input">Apellidos</span>
                  <el-input
                    v-model="dataEmail.last_name"
                    placeholder="Ingrese sus apellidos"
                    clearable
                  />
                </div>
              </div>

              <div class="w-full flex flex-row">
                <div class="flex flex-col px-8 w-1/2 input">
                  <span class="title_input">Password*</span>
                  <el-input
                    v-model="dataEmail.password"
                    placeholder="Please input password"
                    show-password
                  />
                </div>

                <div class="flex flex-col px-8 w-1/2 input">
                  <span class="title_input">Email*</span>
                  <el-input
                    v-model="dataEmail.email"
                    placeholder="Ingrese su email"
                    clearable
                  />
                </div>
              </div>
            </div>

            <div class="input_semiroundend" v-show="account.dni">
              <div class="w-full flex flex-row">
                <div class="flex flex-col px-8 w-1/2">
                  <span class="title_input">Password*</span>
                  <el-input
                    v-model="dataDni.password"
                    placeholder="Please input password"
                    show-password
                  />
                </div>

                <div class="flex flex-col px-8 w-1/2">
                  <span class="title_input">Dni*</span>
                  <el-input
                    v-model="dataDni.dni"
                    placeholder="Ingrese su dni"
                    clearable
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      account: {
        email: true,
        dni: false,
      },
      typeEmail: 'email',
      options: [
        {
          value: 'dni',
          label: 'Dni',
        },
        {
          value: 'email',
          label: 'Email',
        },
      ],

      dataEmail: {
        name: '',
        last_name: '',
        password: '',
        email: '',
      },

      dataDni: {
        dni: '',
        password: '',
      },
    }
  },
  watch: {
    typeEmail(value) {
      console.log(value)
      if (value == 'dni') {
        this.account.dni = true
        this.account.email = false
        return
      }
      this.account.email = true
      this.account.dni = false
    },
  },
}
</script>

<style scoped>
.btn_plus {
  transition: all 0.3s;
  width: 15rem;
  height: 2.5rem;
  color: #fff;
  font-family: Roboto;
  font-weight: bold;
}

.btn_plus:hover {
  transform: scale(1.1);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.title_input {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 21px;
  color: #000000;
}
</style>
