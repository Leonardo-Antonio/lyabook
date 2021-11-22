<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden r-pt-1" style="height: 83vh">
      <div class="p-4 r-space-container">
        <div>
          <div class="flex flex-row justify-between mobile_vertical">
            <div class="flex items-end mobile_pb-1">
              <h3 class="title_admin">Recojos</h3>
            </div>
            <div class="flex flex-row">
              <div class="input__search mobile_w-full">
                <el-input
                  placeholder="Buscar por id de orden"
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
                    dataExample.filter(
                      (data) => !search || data.payment_id == search
                    )
                  "
                  class="center-loading"
                  height="500"
                  style="width: 100%"
                >
                  <el-table-column
                    prop="payment_id"
                    label="ID Venta"
                    width="200"
                  />
                  <el-table-column prop="status" label="Estado" width="200" />
                  <el-table-column label="Estado" width="200">
                    <template slot-scope="scope">
                      {{ !scope.row.active ? 'Recojido' : 'A recojer' }}
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
      <el-dialog :visible.sync="dialogVisible" width="45%">
        <h1 class="text-xl font-bold">Libros a recojer</h1>
        <div class="h-3"></div>
        <ul v-for="(data, index) of dataSelected.products" :key="index">
          <div class="container-dataPayment p-4 mb-4">
            <li><strong>Título: </strong> {{ data.title }}</li>
            <li><strong>Autor: </strong> {{ data.id_payment }}</li>
            <li><strong>Cantidad: </strong> {{ data.quantity }}</li>
            <li>
              <div v-if="data.description == 'f'">
                <strong>Tipo: </strong> Físico
              </div>
              <div v-if="data.description == 'd'">
                <strong>Tipo: </strong> Digital
              </div>
            </li>
          </div>
        </ul>
        <div class="h-3"></div>
        <div v-show="active">
          <button
            class="color_white btn_primary rounded-2xl w-full h-12"
            @click="recoger"
          >
            Recoger
          </button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      search: '',
      dialogVisible: false,
      dataSelected: {},
      dataExample: [],
      id_payment: '',
      active:true
    }
  },

  methods: {
    showDetail(data) {
      this.dataSelected = data
      this.dialogVisible = true
      this.id_payment = data._id
      this.active = data.active 
    },
    async recoger() {
      try {
        const update = await this.$apidata({
          url: '/payments/active/'+this.id_payment,
          method: 'put',
        })
        if(update.data.error != true){
          window.location.reload(true)
        }

      } catch (error) {
      }
    },
  },
  async created() {
    const payment = await this.$apidata({
      url: '/payments/',
      method: 'get',
    })
    if (payment.data.error != true) {
      payment.data.data.forEach((pay) => {
        this.dataExample.push(pay)
      })
    }
  },
}
</script>
<style scoped>
.container-dataPayment {
  background: var(--secundary);
}
</style>
