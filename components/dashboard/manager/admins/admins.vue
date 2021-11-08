<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden" style="height: 83vh">
      <div class="p-4 mobile_p-0">
        <div>
          <div class="flex flex-row justify-between mobile_vertical">
            <div class="flex items-end mobile_pb-1">
              <h3 class="title_admin">Administradores</h3>
            </div>
            <div class="flex flex-row">
              <div class="input__search mr-8">
                <el-input
                  placeholder="Buscar por nombre"
                  v-model="search"
                  clearable
                >
                </el-input>
              </div>
              <div>
                <nuxt-link
                  to="/dashboard/manager/administradores/new"
                  no-prefetch
                >
                  <div
                    class="
                      bg_primary
                      rounded-full
                      w-12
                      h-12
                      flex
                      justify-center
                      items-center
                      btn_plus btn_add_size
                    "
                  >
                    <span class="flex justify-center items-center">
                      <box-icon name="plus" color="#fff"></box-icon>
                    </span>
                  </div>
                </nuxt-link>
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
            <div class="py-10 w-11/12 mx-auto px-10 mobile_px-0">
              <div class="bg_white rounded-3xl table__custom">
                <el-table
                  :data="
                    users.filter(
                      (data) =>
                        !search ||
                        data.name.toLowerCase().includes(search.toLowerCase())
                    )
                  "
                  class="center-loading"
                  v-loading="loading"
                  height="500"
                  style="width: 100%"
                >
                  <el-table-column prop="name" label="Nombres" width="180" />
                  <el-table-column
                    prop="last_name"
                    label="Apellidos"
                    width="180"
                  />
                  <el-table-column label="Fecha de contratación">
                    <template slot-scope="scope">
                      <div class="flex justify-center">
                        {{ new Date(scope.row.created_at).toLocaleString() }}
                      </div>
                    </template>
                  </el-table-column>

                  <el-table-column label="Estado">
                    <template slot-scope="scope">
                      <div class="flex justify-center">
                        <div
                          class="rounded-full w-4 h-4"
                          :class="{
                            bg_error: !scope.row.active,
                            bg_success: scope.row.active,
                          }"
                        ></div>
                      </div>
                    </template>
                  </el-table-column>

                  <el-table-column label="Acciones">
                    <template slot-scope="scope">
                      <div>
                        <div>
                          <button @click="open(scope.row)" class="btn_add_size">
                            <box-icon
                              name="pencil"
                              type="solid"
                              color="#5e20e4"
                            ></box-icon>
                          </button>
                          <button
                            @click="remove(scope.row)"
                            class="btn_add_size"
                          >
                            <box-icon name="trash" color="#E85F5F"></box-icon>
                          </button>
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
          <span class="mobile_spacer"></span>
          <span class="mobile_spacer"></span>
          <span class="mobile_spacer"></span>
        </div>
      </div>
    </div>

    <div class="dialog_w-full">
      <el-dialog title="Enviar mensaje" :visible.sync="showEdit">
        <div class="text_area_new_admin input">
          <div>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="Escribe el mensaje o tarea"
              v-model="message"
            >
            </el-input>
          </div>

          <div class="w-full pt-2">
            <button
              :disabled="btnDisable"
              :class="{
                'cursor-not-allowed': btnDisable,
                color_disabled: btnDisable,
              }"
              @click="sendMessage"
              class="bg_primary w-full h-10 color_white rounded-lg"
            >
              Enviar
            </button>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      search: '',
      loading: true,
      showEdit: false,
      data: null,
      message: '',
      loadingDialog: false,
      btnDisable: true,
    }
  },

  watch: {
    message(value) {
      if (value.length > 10) {
        this.btnDisable = false
      } else {
        this.btnDisable = true
      }
    },
  },

  async mounted() {
    try {
      const response = await this.$admin({
        url: '/users/roles/admin',
        method: 'get',
      })
      if (response.status == 200) {
        this.users = response.data.data
        this.loading = false
      }
    } catch (error) {
      console.log('error: ', error)
    }
  },

  methods: {
    open(row) {
      this.showEdit = true
      this.data = row
    },
    async sendMessage() {
      try {
        await this.$manager({
          url: '/managers/administrators/message',
          method: 'post',
          data: {
            from: this.data.email,
            subject: 'Nueva tarea',
            name: this.data.name,
            message: this.message,
          },
        })
      } catch (error) {}
    },
    async remove(row) {
      this.$confirm(
        `Èstas segur@ de querer eliminar al administrador ${row.name}?`,
        'Advertencia',
        {
          confirmButtonText: 'Si',
          cancelButtonText: 'Cancel',
          type: 'warning',
        }
      )
        .then(async () => {
          try {
            const response = await this.$admin({
              url: `/users/admin?id=${row._id}`,
              method: 'delete',
            })
            if (response.status == 200) {
              row.active = false
            }
          } catch (error) {}
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Se cancelo la operación',
          })
        })
    },
  },
}
</script>
