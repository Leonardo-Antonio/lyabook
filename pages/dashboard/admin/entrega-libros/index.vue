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
                      (data) =>
                        !search ||
                        data.id_order
                          .toLowerCase()
                          .includes(search.toLowerCase())
                    )
                  "
                  class="center-loading"
                  height="500"
                  style="width: 100%"
                >
                  <el-table-column prop="id_order" label="Tipo" width="200" />
                  <el-table-column prop="name" label="info" width="200" />
                  <el-table-column label="Estado" width="200">
                    <template slot-scope="scope">
                      {{ !scope.row.state ? 'Recojido' : 'A recojer' }}
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
          <li>
            <strong>{{ index + 1 }}.-</strong> {{ data }}
          </li>
        </ul>
        <div class="h-3"></div>
        <button class="color_white btn_primary rounded-2xl w-full h-12">
          Recojido
        </button>
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
      dataExample: [
        {
          id_order: '10020058AD',
          name: 'Mi amorcito',
          last_name: 'Navarro Navarro',
          products: ['libro1', 'libro1', 'libro1'],
          state: true,
        },
        {
          id_order: '10020058AD',
          name: 'Mi amorcito',
          last_name: 'Navarro Navarro',
          products: ['libro1', 'libro1', 'libro1'],
          state: true,
        },
      ],
    }
  },

  methods: {
    showDetail(data) {
      this.dataSelected = data
      this.dialogVisible = true
    },
  },
}
</script>
