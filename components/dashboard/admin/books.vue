<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden r-pt-1" style="height: 83vh">
      <div class="p-4 r-space-container ">
        <div>
          <div class="flex flex-row justify-between mobile_vertical r-flex-col">
            <div class="flex items-end mobile_pb-1">
              <h3 class="title_admin r-px-1">Libros</h3>
            </div>
            <div class="flex flex-row">
              <div class="input__search mr-8 r-w90">
                <el-input
                  placeholder="Busca por nombre de libro"
                  v-model="search"
                  clearable
                >
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
                  v-loading="loading"
                  height="500"
                  style="width: 100%"
                >
                  <el-table-column prop="name" label="Nombre" width="180" />
                  <el-table-column
                    prop="editorial"
                    label="Editorial"
                    width="180"
                  />
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

                  <el-table-column prop="slug" label="Slug" width="180" />
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
                        <button @click="edit(scope.row)" class="btn_add_size">
                          <box-icon
                            name="pencil"
                            type="solid"
                            color="#5e20e4"
                          ></box-icon>
                        </button>
                        <button @click="remove(scope.row)" class="btn_add_size">
                          <box-icon name="trash" color="#E85F5F"></box-icon>
                        </button>
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
      <el-dialog title="Actualizar el libro: " :visible.sync="showEdit">
        <Edit :data="user" />
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Edit from './book/edit'
import XLSX from 'xlsx'

export default {
  components: {
    Edit,
  },
  data() {
    return {
      books: [],
      booksCopy: [],
      search: '',
      loading: true,
      showEdit: false,
      user: {},
    }
  },

  async mounted() {
    try {
      const { status, data } = await this.$apidata({
        url: '/books',
        method: 'get',
      })
      if (status == 200) {
        this.books = data.data.filter((data) => data.property == undefined)
        this.booksCopy = data.data
        this.loading = false
      }
    } catch (error) {
      console.log('error: ', error)
    }
  },

  methods: {
    edit(row) {
      this.showEdit = true
      this.user = row
    },
    async remove(row) {
      this.$confirm(
        `Èstas segur@ de querer eliminar el libro <${row.name}?>`,
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
              url: `/books?id=${row._id}`,
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
    exportData() {
      for (let book of this.booksCopy) {
        delete book.type
        book.images_src = Array(book.images_src).join(';')
        delete book.commentaries
        book.details = book.details[0]
        book.categories = Array(book.categories).join(';')
      }

      const workSheet = XLSX.utils.json_to_sheet(this.booksCopy)
      const workBook = XLSX.utils.book_new()

      XLSX.utils.book_append_sheet(workBook, workSheet, 'books')
      XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' })
      XLSX.writeFile(workBook, 'books.xlsx')
    },
  },
}
</script>
