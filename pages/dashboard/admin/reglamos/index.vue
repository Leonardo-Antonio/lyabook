<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden r-pt-1" style="height: 83vh" >
      <div class="p-4 r-space-container">
        <div>
          <div class="flex flex-row justify-between mobile_vertical">
            <div class="flex items-end mobile_pb-1">
              <h3 class="title_admin">Reglamos</h3>
            </div>
            <div class="flex flex-row">
              <div class="input__search mobile_w-full">
                <el-input
                  placeholder="Busca por nombre de categoria"
                  v-model="search"
                  clearable
                >
                </el-input>
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
            <div class="py-10 w-11/12 mx-auto px-10 mobile_table_custom">
              <div class="bg_white rounded-3xl table__custom">
                <el-table
                  :data="
                    claims.filter(
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
                  <el-table-column
                    prop="claim_data.type"
                    label="Tipo"
                    width="180"
                  />
                  <el-table-column
                    prop="claim_data.identification_contracted_asset"
                    label="Producto"
                    width="180"
                  />
                  <el-table-column
                    prop="data_sending_reply.province"
                    label="Provincia"
                    width="180"
                  />

                  <el-table-column label="Fecha de creación">
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
                          <button
                            @click="showDetail(scope.row)"
                            class="btn_add_size"
                          >
                            <box-icon
                              name="show-alt"
                              color="#5e20e4"
                            ></box-icon>
                          </button>
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </div>
        <span class="mobile_spacer"></span>
        <span class="mobile_spacer"></span>
        <span class="mobile_spacer"></span>
      </div>
    </div>

    <div class="dialog_w-full">
      <el-dialog
        :title="`${data.data_person.name} ${data.data_person.last_name} - ${data.claim_data.type}`"
        :visible.sync="show"
        width="45%"
        center
        v-loading.fullscreen.lock="loadingfull"
      >
        <div>
          <DetailsClaim :data="data" :show="show" />

          <div class="py-4 text_area_new_admin input">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="Respuesta"
              v-model="response"
            >
            </el-input>
          </div>

          <span slot="footer" class="dialog-footer">
            <button
              class="bg_second rounded-md h-10 color_white"
              style="width: 6.5rem"
              @click="show = false"
            >
              Cancelar
            </button>
            <button
              class="bg_primary rounded-md h-10 color_white"
              style="width: 6.5rem"
              @click="responseClaim"
            >
              Responder
            </button>
          </span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import DetailsClaim from '../../../../components/dashboard/admin/claims/see'

export default {
  layout: 'admin',
  components: {
    DetailsClaim,
  },
  data() {
    return {
      loadingfull: false,
      show: false,
      claims: [],
      search: '',
      loading: true,
      data: {
        data_person: {
          name: '',
          last_name: '',
          type_document: '',
          number_document: '',
        },
        claim_data: {
          identification_contracted_asset: '',
          type: '',
          details: '',
          order: '',
        },
        data_sending_reply: {
          phone: '',
          additional_telephone: '',
          communication_method: '',
          email: '',
          address: '',
          department: '',
          province: '',
          district: '',
        },
      },
      response: '',
    }
  },

  async mounted() {
    try {
      const response = await this.$admin({
        url: '/claims',
        method: 'get',
      })

      if (response.status == 200) {
        if (response.data.data == null || response.data.data == undefined) {
          this.claims = []
          this.loading = false
          return
        }
        this.claims = response.data.data
        this.loading = false
      }
    } catch (error) {
      console.log(error)
      this.loading = false
    }
  },

  methods: {
    showDetail(row) {
      this.data = row
      this.show = true
    },

    async responseClaim() {
      this.loadingfull = true
      try {
        const response = await this.$admin({
          url: `/claims/response/${this.data._id}`,
          method: 'post',
          data: {
            name: this.data.data_person.name,
            type: this.data.claim_data.type,
            message: this.response,
            email: this.data.data_sending_reply.email,
          },
        })

        if (response.status == 200) {
          this.loadingfull = false
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
