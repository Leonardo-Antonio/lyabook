<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden r-pt-1" style="height: 83vh">
      <div class="p-4 r-space-container">
        <div>
          <div class="flex flex-row justify-between mobile_vertical">
            <div class="flex items-end mobile_pb-1">
              <h3 class="title_admin">Promociones</h3>
            </div>
            <div class="flex flex-row">
              <div class="input__search mobile_w-full">
                <el-input
                  placeholder="Busca por nombre de libro"
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
          <div class="flex justify-between">
            <h5 class="name_item_card">Listado</h5>
            <button @click="exportData">
              <div class="flex items-center">
                <h5 class="name_item_card mr-2" style="color: #021639">
                  Exportar
                </h5>
                <box-icon
                  type="solid"
                  color="#021639"
                  name="file-export"
                ></box-icon>
              </div>
            </button>
          </div>
          <div class="card">
            <div class="py-10 w-11/12 mx-auto px-10 mobile_table_custom">
              <div class="bg_white rounded-3xl table__custom">
                <el-table
                  :data="
                    books.filter(
                      (data) =>
                        !search ||
                        data.name.toLowerCase().includes(search.toLowerCase())
                    )
                  "
                  class="center-loading"
                  height="500"
                  style="width: 100%"
                >
                  <el-table-column prop="name" label="Nombre" width="180" />
                  <el-table-column
                    prop="editorial"
                    label="Editorial"
                    width="180"
                  />

                  <el-table-column label="Precio actual" width="180">
                    <template slot-scope="scope">
                      <div class="flex justify-center">
                        S/{{ scope.row.price_current }}
                      </div>
                    </template>
                  </el-table-column>

                  <el-table-column label="Precio antiguo" width="180">
                    <template slot-scope="scope">
                      <div class="flex justify-center">
                        S/{{ scope.row.price_before }}
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
                      <el-popover
                        placement="right"
                        width="auto"
                        trigger="click"
                      >
                        <div class="input_number flex flex-col">
                          <el-input-number
                            v-model.number="scope.row.price_current"
                          />
                          <div class="pt-2">
                            <button
                              @click="addPromotion(scope.row)"
                              class="
                                bg_primary
                                w-full
                                p-1
                                rounded-md
                                color_white
                              "
                            >
                              Guardar
                            </button>
                          </div>
                        </div>
                        <button slot="reference">
                          <img
                            class="w-6 z10"
                            src="/icons/promotion.svg"
                            alt="descuento.icon"
                          />
                        </button>
                      </el-popover>
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
  </div>
</template>

<script>
import XLSX from 'xlsx'

export default {
  data() {
    return {
      books: [],
      search: '',
      loading: true,
      booksDataExport: [],
    }
  },

  async mounted() {
    try {
      const { status, data } = await this.$apidata({
        url: '/books',
        method: 'get',
      })
      if (status == 200) {
        this.books = data.data.filter((book) => book.active)
        this.booksDataExport = data.data
        this.loading = true
      }
    } catch (error) {
      console.log('error', error)
    }
  },

  methods: {
    async addPromotion(row) {
      try {
        const response = await this.$admin({
          url: `/books/promotions/${row._id}`,
          method: 'patch',
          data: {
            price_current: row.price_current,
          },
        })
      } catch (error) {
      }
    },
    exportData() {
      for (let book of this.booksDataExport) {
        delete book.type
        book.images_src = Array(book.images_src).join(';')
        delete book.commentaries
        book.details = book.details[0]
        book.categories = Array(book.categories).join(';')
      }

      const workSheet = XLSX.utils.json_to_sheet(this.booksDataExport)
      const workBook = XLSX.utils.book_new()

      XLSX.utils.book_append_sheet(workBook, workSheet, 'books')
      XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' })
      XLSX.writeFile(workBook, 'books.xlsx')
    },
  },
}
</script>
