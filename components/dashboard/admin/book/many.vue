<template>
  <div>
    <div>
      <div class="flex flex-row justify-between">
        <div class="flex flex-row">
          <nuxt-link to="/dashboard/admin/books/new">
            <box-icon name="left-arrow-alt" color="#021639"></box-icon>
          </nuxt-link>
          <h2 class="title_admin pl-4">Nuevos libros</h2>
        </div>
        <div>
          <button @click="save">
            <div
              class="
                bg_primary
                rounded-full
                flex
                justify-center
                items-center
                btn_save_change
              "
            >
              <span class="flex justify-center items-center">
                Subir libros
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div>
      <div>
        <h4 class="name_item_card">Información</h4>

        <div class="card">
          <div class="py-10">
            <div class="w-11/12 mx-auto">
              <div class="px-8">
                <header>
                  <div class="flex justify-between">
                    <div class="flex flex-row">
                      <div class="pr-4">
                        <div
                          class="
                            color_white
                            bg_second
                            h-10
                            rounded-full
                            w-48
                            btn_add_size
                            flex
                            justify-center
                            items-center
                          "
                        >
                          <a
                            class="
                              flex
                              justify-center
                              items-center
                              w-full
                              h-full
                            "
                            href="/templates/excel/news_books.xlsx"
                            download
                          >
                            Descargar plantilla
                          </a>
                        </div>
                      </div>
                      <div class="pl-4">
                        <el-upload
                          ref="upload"
                          action=""
                          :auto-upload="false"
                          :on-change="change"
                          :show-file-list="false"
                          accept=".xls,.xlsx"
                        >
                          <button
                            slot="trigger"
                            class="
                              btn_primary
                              h-10
                              rounded-full
                              w-48
                              btn_add_size
                            "
                          >
                            Adjuntar
                          </button>
                          <div slot="tip" class="el-upload__tip">
                            Solo archivos .xls y .xlsx
                          </div>
                        </el-upload>
                      </div>
                    </div>

                    <div>
                      <nuxt-link
                        class="underline color_primary"
                        to="/dashboard/admin/books/archivos/imagenes"
                        >Subir archivos</nuxt-link
                      >
                    </div>
                  </div>
                </header>
                <section>
                  <div class="pt-8">
                    <main>
                      <el-table :data="books" style="width: 100%" height="500">
                        <el-table-column fixed prop="name" label="Nombre" />

                        <el-table-column fixed prop="author" label="Autor" />

                        <el-table-column
                          fixed
                          prop="editorial"
                          label="Editorial"
                        />

                        <el-table-column fixed label="Precio">
                          <template slot-scope="scope">
                            s/{{ scope.row.price_current }}
                          </template>
                        </el-table-column>

                        <el-table-column fixed label="Tipo">
                          <template>
                            <strong>Fisico y Digital</strong>
                          </template>
                        </el-table-column>
                      </el-table>
                    </main>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
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
    }
  },
  methods: {
    readerExcel(file) {
      const reader = new FileReader()
      let result = {}

      reader.onload = (e) => {
        const data = e.target.result
        const wb = XLSX.read(data, { type: 'binary' })
        const firstSheetName = wb.SheetNames[1]
        const firstSheetContent = wb.Sheets[firstSheetName]
        result = XLSX.utils.sheet_to_json(firstSheetContent)

        result.forEach((item) => {
          const { src, log, lat, stock } = item
          delete item.src
          delete item.log
          delete item.lat
          delete item.stock

          item.type = {
            digital: {
              src,
            },
            fisico: {
              log: String(log),
              lat: String(lat),
              stock,
            },
          }

          const categories = String(item.categories).replace(' ', '').split(';')
          item.categories = []
          for (let category of categories) {
            item.categories.push(category.replace(" ", ""))
          }
          item.images_src = String(item.images_src).replace(' ', '').split(';')
          item.details = String(item.details).split(';')
        })
        this.books = result
      }

      reader.readAsBinaryString(file.raw)
      return result
    },
    change(file, fileList) {
      this.readerExcel(file)
    },

    async save() {
      console.log(this.books)
      try {
        const response = await this.$admin({
          url: '/books/many',
          method: 'post',
          data: this.books,
        })
        console.log(response)
        if (response.status == 200) {
          console.log('todo chido')
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}

/* {
        name: '',
        author: '',
        editorial: '',
        price_current: 0,
        description: '',
        type: {
          digital: {
            src: '',
          },
          fisico: {
            log: '',
            lat: '',
            stock: 0,
          },
        },
        categories: [],
        images_src: [],
        details: [],
      } */
</script>
