<template>
  <div>
    <div>
      <div class="flex flex-row justify-between mobile_vertical">
        <div class="flex items-end mobile_pb-1">
          <h3 class="title_admin">Nuevo administrador</h3>
        </div>
        <div>
          <div>
            <button @click="save" :disabled="disabled">
              <div
                :class="{ btn_disabled: disabled, bg_primary: !disabled }"
                class="
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
            <div class="input_semiroundend">
              <div class="w-full flex flex-row pb-4 mobile_vertical">
                <div
                  class="
                    flex flex-col
                    px-8
                    w-1/2
                    input
                    mobile_w-full mobile_px-0 mobile_pb-1
                  "
                >
                  <span class="title_input">Dni*</span>
                  <el-input
                    v-model="dni"
                    type="text"
                    maxlength="8"
                    show-word-limit
                    placeholder="Ingrese su dni"
                    clearable
                  />
                </div>

                <div
                  class="
                    flex flex-col
                    px-8
                    w-1/2
                    input
                    mobile_w-full mobile_px-0
                  "
                >
                  <span class="title_input">Email*</span>
                  <el-input
                    v-model="email"
                    placeholder="Ingrese su email"
                    clearable
                  />
                </div>
              </div>

              <div class="w-full flex flex-row input mobile_vertical">
                <div
                  class="
                    flex flex-col
                    px-8
                    w-1/2
                    input
                    mobile_w-full mobile_px-0 mobile_pb-1
                  "
                >
                  <span class="title_input">Nombres y Apellos*</span>
                  <el-input
                    v-model="fullname"
                    placeholder="Nombres y Apellos"
                    disabled
                  />
                </div>

                <div
                  class="
                    flex flex-col
                    px-8
                    w-1/2
                    input
                    mobile_w-full mobile_px-0
                  "
                >
                  <span class="title_input">Password*</span>
                  <el-input
                    v-model="password"
                    placeholder="Ingrese su contraseña"
                    show-password
                    disabled
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
      name: '',
      last_name: '',
      password: '',
      email: '',
      dni: '',
      fullname: '',
      disabled: true,
      dniIsValid: false,
      emailIsValid: false,
    }
  },
  watch: {
    async dni(value) {
      if (String(value).length == 8) {
        try {
          const { status, data } = await this.$admin({
            url: `/users/search/reniec/dni/${value}`,
            method: 'get',
          })

          if (status == 200) {
            this.fullname = `${data.data.name} ${data.data.last_name}`
            this.name = data.data.name
            this.last_name = data.data.last_name
            this.password = value
            this.dniIsValid = true
          }
        } catch (error) {
          this.disabled = true
          this.name = ''
          this.last_name = ''
          this.password = ''
        }
      } else {
        this.disabled = true
        this.name = ''
        this.last_name = ''
        this.password = ''
        this.fullname = ''
      }
    },

    email(value) {
      if (String(value).includes('@')) {
        this.emailIsValid = true
        if (this.dniIsValid) {
          this.disabled = false
        } else {
          this.disabled = true
        }
      } else {
        this.disabled = true
      }
    },
  },
  methods: {
    async save() {
      const loading = this.$loading({
        lock: true,
        text: 'Creando cuenta..',
      })
      try {
        const { data, status } = await this.$admin({
          url: '/users/sign-up/email',
          method: 'post',
          data: {
            name: this.name,
            last_name: this.last_name,
            password: this.password,
            rol: 'admin',
            email: this.email,
            dni: this.dni,
          },
        })

        if (status == 201) loading.close()
        else {
          this.$message.info('no se puedo crear la cuenta')
          loading.close()
        }
      } catch (error) {
        loading.close()
      }
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
