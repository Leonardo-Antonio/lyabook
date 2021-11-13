<template>
  <div class="overflow-y-auto overflow-x-hidden" style="height: 83vh">
    <div class="p-4 r-space-container">
      <div class="r-pt-2">
        <div class="flex flex-row justify-between mobile_vertical">
          <div class="flex items-end mobile_pb-1">
            <h3 class="title_admin">Mi cuenta</h3>
          </div>
          <div class="flex flex-row">
            <div class="input__search mobile_w-full">
              <button
                class="
                  btn_primary
                  rounded-full
                  w-60
                  h-10
                  btn_add_size
                  mobile_w-full
                "
                @click="update"
              >
                Actualizar
              </button>
            </div>
          </div>
          <div class="pt-8 flex justify-center r-remove-desktop r-see">
            <div class="w-full flex justify-center">
              <a href="/cerrar-sesion" class="underline">Cerrar sesión</a>
            </div>
          </div>
        </div>
      </div>

      <div class="spacer"></div>

      <div>
        <div>
          <h5 class="name_item_card">Listado</h5>
        </div>
        <div class="card">
          <div class="py-10 w-11/12 mx-auto">
            <div class="w-full flex flex-row pb-8 mobile_vertical">
              <div
                class="w-1/2 px-8 mobile_px-0 input mobile_w-full mobile_pb-1"
              >
                <section class="flex flex-row justify-between">
                  <div>
                    <span class="title_input">Perfil*</span>
                    <el-upload
                      :action="$config.API_IMAGES"
                      :on-success="successImage"
                      :before-upload="beforeUpload"
                      accept="image/png"
                    >
                      <el-button size="small" type="primary"
                        >Clic para subir archivo</el-button
                      >
                      <div slot="tip" class="el-upload__tip">
                        Solo archivos .png con un tamaño menor de 500kb
                      </div>
                    </el-upload>
                  </div>

                  <div>
                    <el-avatar :size="80" :src="data.src" />
                  </div>
                </section>
              </div>

              <div class="w-1/2 px-8 mobile_px-0 input mobile_w-full">
                <span class="title_input">Nombres*</span>
                <el-input
                  placeholder="Please input"
                  v-model="data.name"
                  clearable
                  disabled
                />
              </div>
            </div>

            <div class="w-full flex flex-row pb-8 mobile_vertical">
              <div
                class="
                  w-1/2
                  px-8
                  input
                  mobile_px-0
                  input
                  mobile_w-full mobile_pb-1
                "
              >
                <span class="title_input">Dni*</span>
                <el-input
                  placeholder="Please input"
                  v-model="data.dni"
                  clearable
                  :disabled="true"
                />
              </div>

              <div class="w-1/2 px-8 input mobile_px-0 input mobile_w-full">
                <span class="title_input">Apellidos*</span>
                <el-input
                  placeholder="Please input"
                  v-model="data.last_name"
                  clearable
                  disabled
                />
              </div>
            </div>

            <div class="w-full flex flex-row pb-8 mobile_vertical">
              <div
                class="
                  w-1/2
                  px-8
                  input
                  mobile_px-0
                  input
                  mobile_w-full mobile_pb-1
                "
              >
                <span class="title_input">Email*</span>
                <el-input
                  placeholder="Please input"
                  v-model="data.email"
                  clearable
                  :disabled="true"
                />
              </div>

              <div class="w-1/2 px-8 input mobile_px-0 input mobile_w-full">
                <span class="title_input">Nuevo password*</span>
                <el-input
                  placeholder="Ingrese la nueva contraseña"
                  v-model="data.password"
                  show-password
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="mobile_spacer"></span>
    <span class="mobile_spacer"></span>
    <span class="mobile_spacer"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      _id: '',
      data: {
        dni: '',
        email: '',
        password: '',
        name: '',
        last_name: '',
        src: '',
      },
    }
  },
  mounted() {
    const dataAdmin = localStorage.getItem('user')
    if (dataAdmin == null || dataAdmin == undefined || dataAdmin == '') {
      return
    }
    const dataAdminJSON = JSON.parse(localStorage.getItem('user').toString())
    this.data.name = dataAdminJSON.user.name
    this.data.last_name = dataAdminJSON.user.last_name
    this._id = String(dataAdminJSON.user._id).trim()
    this.data.dni =
      dataAdminJSON.user.dni == undefined ? '' : dataAdminJSON.user.dni
    this.data.email =
      dataAdminJSON.user.email == undefined ? '' : dataAdminJSON.user.email
  },
  methods: {
    successImage(res, file) {
      this.data.src = res.data.url
    },
    beforeUpload(file) {
      if (file.type != 'image/png') {
        this.$message.error('La imagen solo debe ser .png')
      }
    },
    async update() {
      try {
        const response = await this.$admin({
          url: `/users/${this._id}`,
          method: 'put',
          data: this.data,
        })
      } catch (error) {}
    },
  },
}
</script>
