<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden" style="height: 83vh">
      <div class="p-4">
        <div>
          <div class="flex flex-row justify-between">
            <div class="flex items-end">
              <h3 class="title_admin">Libros</h3>
            </div>
            <div class="flex flex-row">
              <div class="input__search mr-8">
                <el-input
                  placeholder="Busca categorias"
                  v-model="search"
                  clearable
                >
                </el-input>
              </div>
              <div>
                <nuxt-link to="/dashboard/admin/categories/new" no-prefetch>
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
            <div class="py-10 w-11/12 mx-auto px-10">
              <div class="bg_white rounded-3xl table__custom">
                <el-table
                  :data="
                    books.filter(
                      (data) =>
                        !search ||
                        data.name.toLowerCase().includes(search.toLowerCase())
                    )
                  "
                  height="500"
                  style="width: 100%"
                >
                  <el-table-column prop="name" label="Nombre" width="180" />
                  <el-table-column
                    prop="editorial"
                    label="Editorial"
                    width="180"
                  />

                  <el-table-column
                    label="Precio actual"
                    width="180"
                  >
                    <template slot-scope="scope">
                      <div class="flex justify-center">
                        S/{{scope.row.price_current}}
                      </div>
                    </template>
                  </el-table-column>

                  <el-table-column label="Tipo" width="180">
                    <template slot-scope="scope">
                      <div class="flex justify-center">
                        <div
                          v-if="
                            scope.row.type.fisico.format != undefined &&
                            scope.row.type.digital.format != undefined
                          "
                        >
                          {{ scope.row.type.fisico.format }} y
                          {{ scope.row.type.digital.format }}
                        </div>
                        <div v-else>
                          <div v-if="scope.row.type.fisico.format != undefined">
                            {{ scope.row.type.fisico.format }}
                          </div>
                          <div v-else>
                            {{ scope.row.type.digital.format }}
                          </div>
                        </div>
                      </div>
                    </template>
                  </el-table-column>

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
                        <button @click="addPromotion(scope.row)">
                          <img class="w-6 z10 " src="/icons/promotion.svg" alt="descuento.icon">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
      search: '',
    }
  },

  async mounted() {
    const response = await this.$apidata({
      url: '/books',
      method: 'get',
    })
    this.books = response.data.data
    console.log(response.data.data)
  },

  methods: {
    addPromotion(row) {
      console.log(row)
    },
  },
}
</script>
