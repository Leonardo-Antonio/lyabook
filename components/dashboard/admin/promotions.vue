<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden" style="height: 83vh">
      <div class="p-4">
        <div>
          <div class="flex flex-row justify-between">
            <div class="flex items-end">
              <h3 class="title_admin">Promociones</h3>
            </div>
            <div class="flex flex-row">
              <div class="input__search mr-8">
                <el-input
                  placeholder="Busca promociones"
                  v-model="input"
                  clearable
                >
                </el-input>
              </div>
              <div>
                <button class="btn_add_size">
                  <div
                    class="
                      bg_primary
                      rounded-full
                      w-60
                      h-10
                      flex
                      justify-center
                      items-center
                      btn_rounded_primary
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

        <div class="spacer"></div>

        <div>
          <div>
            <h5 class="name_item_card">Listado</h5>
          </div>
          <div class="card">
            <div class="py-10 w-11/12 mx-auto px-10">
              <div class="bg_white rounded-3xl table__custom">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="name" label="Nombre" width="120">
                  </el-table-column>
                  <el-table-column prop="state" label="Estado" width="120">
                  </el-table-column>
                  <el-table-column prop="city" label="Ciudad" width="120">
                  </el-table-column>
                  <el-table-column prop="address" label="Dirección" width="300">
                  </el-table-column>
                  <el-table-column prop="zip" label="Código postal" width="120">
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    label="Operaciones"
                    width="120"
                  >
                    <template>
                      <div>
                        <el-popover
                          placement="bottom"
                          title="Nuevo precio"
                          width="200"
                          trigger="click"
                        >
                          <div>
                            <div>
                              <input type="number" placeholder="Ingrese el precio" v-model="price">
                            </div>
                          </div>
                          <button class="btn_add_size" slot="reference">
                            <box-icon
                              type="solid"
                              color="#5E20E4"
                              name="badge-dollar"
                            ></box-icon>
                          </button>
                        </el-popover>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 50,
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
      ],
    }
  },
}
</script>
