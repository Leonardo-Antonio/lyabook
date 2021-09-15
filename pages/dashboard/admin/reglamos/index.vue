<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden" style="height: 83vh">
      <div class="p-4">
        <div>
          <div class="flex flex-row justify-between">
            <div class="flex items-end">
              <h3 class="title_admin">Categorias</h3>
            </div>
            <div class="flex flex-row">
              <div class="input__search">
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
            <div class="py-10 w-11/12 mx-auto px-10">
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
                          <button
                            @click="remove(scope.row)"
                            class="btn_add_size"
                          >
                            <box-icon
                              type="solid"
                              name="user-check"
                              color="#E85F5F"
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
      </div>
    </div>

    <el-dialog
      :title="`${data.data_person.name} ${data.data_person.last_name} - ${data.claim_data.type}`"
      :visible.sync="show"
      width="30%"
      center
    >
      <div>
        <strong>{{ data.data_person.type_document }}: </strong>
        <span> {{ data.data_person.number_document }} </span> <br />
        <strong>Teléfono: </strong>
        <span>
          <a :href="`tel:${data.data_sending_reply.phone}`">{{
            data.data_sending_reply.phone
          }}</a>
        </span>
        <br />

        <strong>Teléfono adicional: </strong>
        <span>
          <span v-if="data.data_sending_reply.additional_telephone != undefined">
            <a :href="`tel:${data.data_sending_reply.additional_telephone}`">{{
              data.data_sending_reply.additional_telephone
            }}</a>
          </span>
          <span v-else>--------</span>
        </span>
        <br />

        <strong>Email: </strong>
        <span>
          <a :href="`mailto:${data.data_sending_reply.email}`">{{
            data.data_sending_reply.email
          }}</a>
        </span>
        <br />

        <strong>Dirección: </strong>
        <span> {{ data.data_sending_reply.address }} </span> <br />

        <strong>Provincia: </strong>
        <span> {{ data.data_sending_reply.province }} </span> <br />

        <strong>Distrito: </strong>
        <span> {{ data.data_sending_reply.district }} </span> <br />

        <strong>Departamento: </strong>
        <span> {{ data.data_sending_reply.department }} </span> <br />

        <strong>Detalles: </strong>
        <span> {{ data.claim_data.details }} </span> <br />

        <strong>Orden: </strong>
        <span> {{ data.claim_data.order }} </span> <br />
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">Cancel</el-button>
        <el-button type="primary" @click="show = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
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
    }
  },

  methods: {
    showDetail(row) {
      this.data = row
      this.show = true
    },
  },
}
</script>