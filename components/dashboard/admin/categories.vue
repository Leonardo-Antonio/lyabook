<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden" style="height: 83vh">
      <div class="p-4 r-space-container">
        <div>
          <div
            class="
              flex flex-row
              justify-between
              mobile_container-section_header_title-admin
              r-flex-col
              r-pt-2
            "
          >
            <div class="flex items-end">
              <h3 class="title_admin r-px-1">Categorias</h3>
            </div>
            <div class="flex flex-row">
              <div class="input__search mr-8 r-w90">
                <el-input
                  placeholder="Busca por nombre de categoria"
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
                    categories.filter(
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
                  <el-table-column prop="_id" label="ID" width="200" />
                  <el-table-column prop="name" label="Nombre" width="180" />
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
                        <div>
                          <button @click="edit(scope.row)" class="btn_add_size">
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
        </div>
        <span class="mobile_spacer"></span>
        <span class="mobile_spacer"></span>
        <span class="mobile_spacer"></span>
      </div>
    </div>

    <div class="dialog_w-full">
      <el-dialog title="Actializa la categoria: " :visible.sync="showEdit">
        <Edit :data="category" />
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Edit from './category/edit'
import XLSX from 'xlsx'

export default {
  components: {
    Edit,
  },
  data() {
    return {
      categories: [],
      search: '',
      loading: true,
      category: null,
      showEdit: false,
    }
  },

  async mounted() {
    try {
      const response = await this.$apidata({
        url: '/categories',
        method: 'get',
      })
      if (response.status == 200) {
        this.categories = response.data.data
        this.loading = false
      }
    } catch (error) {
      console.log('error: ', error)
    }
  },

  methods: {
    edit(row) {
      console.log(row)
      this.category = row
      this.showEdit = true
    },
    async remove(row) {
      this.$confirm(
        `Èstas segur@ de querer eliminar la categoria ${row.name}?`,
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
              url: `/categories?id=${row._id}`,
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
      const workSheet = XLSX.utils.json_to_sheet(this.categories)
      const workBook = XLSX.utils.book_new()

      XLSX.utils.book_append_sheet(workBook, workSheet, 'categories')
      XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' })
      XLSX.writeFile(workBook, 'categories.xlsx')
    },
  },
}
</script>
