<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden" style="height: 85vh">
      <div class="p-4">
        <div>
          <div class="flex flex-row justify-between mobile_vertical">
            <div class="flex flex-row">
              <nuxt-link to="/dashboard/admin/categories">
                <box-icon name="left-arrow-alt" color="#021639"></box-icon>
              </nuxt-link>
              <h2 class="title_admin pl-4">Nueva categoria</h2>
            </div>
            <div>
              <button @click="save" class="mobile_w-full">
                <div
                  class="
                    mobile_w-full
                    bg_primary
                    rounded-full
                    flex
                    justify-center
                    items-center
                    btn_save_change
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

        <div class="spacer"></div>

        <div>
          <div>
            <h4 class="name_item_card">Crea</h4>
          </div>

          <div>
            <div class="card">
              <div class="py-10 w-11/12 mx-auto px-10 mobile_px-0">
                <div>
                  <div>
                    <button @click="typeInsert = true" class="pr-1">
                      Una categoria
                    </button>
                    <button @click="typeInsert = false" class="pl-1">
                      Muchas categorias
                    </button>
                  </div>
                </div>
                <div class="pt-4">
                  <div v-show="typeInsert">
                    <div>
                      <div class="flex flex-row r-flex-col">
                        <div class="w-1/2 pr-2 mobile_w-full  r-pt-2">
                          <span class="title_input">Nombre*</span>
                          <div class="input">
                            <el-input
                              v-model="dataOneCategory.name"
                              placeholder="Ingrese la nombre de la categoria"
                            />
                          </div>
                        </div>

                        <div class="w-1/2 pr-2 mobile_w-full r-pt-2">
                          <span class="title_input">Ean*</span>
                          <div class="input">
                            <el-input
                              v-model="dataOneCategory.ean"
                              placeholder="Ingrese codigo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-show="!typeInsert">
                    <div class="flex flex-row mobile_vertical">
                      <div class="pr-2 mobile_w-full mobile_px-0 mobile_py-02">
                        <div
                          class="
                            btn_rounded_second
                            color_secundary
                            w-52
                            h-10
                            flex
                            justify-center
                            items-center
                            mobile_w-full
                          "
                        >
                          <a
                            href="/templates/excel/new-categories.xlsx"
                            download="new-categories.xlsx"
                          >
                            Descargar plantilla
                          </a>
                        </div>
                      </div>

                      <div class="pl-2 mobile_w-full-upload mobile_px-0">
                        <el-upload
                          class="mobile_w-full"
                          ref="upload"
                          accept=".xls,.xlsx"
                          action=""
                          :auto-upload="false"
                          :on-change="change"
                          :show-file-list="false"
                        >
                          <button
                            slot="trigger"
                            class="btn_rounded_primary h-10 w-52 mobile_w-full"
                          >
                            Adjuntar excel
                          </button>
                          <div slot="tip" class="el-upload__tip">
                            Solo archivos .xls y .xlsx
                          </div>
                        </el-upload>
                      </div>
                    </div>

                    <div class="pt-8">
                      <el-table :data="categories" border style="width: 100%">
                        <el-table-column
                          prop="name"
                          label="Nombre de la categoria"
                        />
                      </el-table>
                    </div>
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
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  layout: 'admin',
  data() {
    return {
      typeInsert: false,
      categories: [],
      dataOneCategory: {
        name: '',
        ean: '',
      },
    }
  },
  methods: {
    readerExcel(file) {
      const reader = new FileReader()
      let result = {}

      reader.onload = (e) => {
        const data = e.target.result
        const wb = XLSX.read(data, { type: 'binary' })
        const firstSheetName = wb.SheetNames[0]
        const firstSheetContent = wb.Sheets[firstSheetName]
        result = XLSX.utils.sheet_to_json(firstSheetContent)
        this.categories = result
      }

      reader.readAsBinaryString(file.raw)
      return result
    },
    change(file, fileList) {
      this.readerExcel(file)
    },
    async save() {
      if (!this.typeInsert) {
        try {
          const response = await this.$admin({
            url: '/categories',
            method: 'post',
            data: this.categories,
          })
        } catch (error) {
          if (error.response) {
            console.log(error.response.data)
          }
        }
      } else {
        try {
          const response = await this.$admin({
            url: '/categories/one',
            method: 'post',
            data: this.dataOneCategory,
          })
        } catch (error) {}
      }
    },
  },
}
</script>

<style></style>
