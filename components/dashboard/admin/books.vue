<template>
  <div>
    <div>
      <div class="flex flex-row justify-between">
        <div class="flex items-end">
          <h3 class="title_admin">Libros</h3>
        </div>
        <div class="flex flex-row">
          <div class="input__search mr-8">
            <el-input placeholder="Please input" v-model="input" clearable>
            </el-input>
          </div>
          <div>
            <nuxt-link to="/dashboard/admin/books/new" no-prefetch>
              <div
                class="
                  bg_primary
                  rounded-full
                  w-12
                  h-12
                  flex
                  justify-center
                  items-center
                  btn_plus
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

    <div class="pt-20">
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
              <el-table-column fixed="right" label="Operaciones" width="120">
                <template>
                  <div>
                    <button class="btn_add_size">
                      <box-icon
                        name="pencil"
                        type="solid"
                        color="#5e20e4"
                      ></box-icon>
                    </button>
                    <button class="btn_add_size">
                      <box-icon name="trash" color="#C4C4C4"></box-icon>
                    </button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
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

<style scoped>
.btn_plus {
  transition: all 0.3s;
}

.btn_plus:hover {
  transform: scale(1.1);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}
</style>
