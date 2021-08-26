<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden" style="height: 85vh">
      <div class="p-4">
        <div>
          <div class="flex flex-row justify-between">
            <h2 class="title_admin">Nuevo libro</h2>
            <div>
              <nuxt-link to="/dashboard/admin/users/new" no-prefetch>
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
                    Guardar cambios
                  </span>
                </div>
              </nuxt-link>
            </div>
          </div>
          <h4 class="name_item_card">Información</h4>
        </div>

        <div>
          <div class="card">
            <div class="py-10">
              <div class="w-11/12 mx-auto">
                <div class="input">
                  <div class="w-full flex flex-row pb-4">
                    <div class="flex flex-col px-8 w-1/2">
                      <span class="title_input">Titulo*</span>
                      <el-input placeholder="Ingrese el titulo" clearable />
                    </div>

                    <div class="flex flex-col px-8 w-1/2">
                      <span class="title_input">Editorial*</span>
                      <div class="input">
                        <el-input
                          placeholder="Ingrese la nombre de la editorial"
                          show-password
                        />
                      </div>
                    </div>
                  </div>

                  <div class="w-full flex flex-row pb-4">
                    <div class="flex flex-col px-8 w-full input select_details">
                      <span class="title_input">Categorias*</span>
                      <el-select
                        v-model="value"
                        multiple
                        filterable
                        allow-create
                        placeholder="Ingrese las catergorias que correspondan"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </div>
                  </div>

                  <div class="w-full flex flex-row pb-4 px-8">
                    <div class="flex flex-col w-full text_area_new_admin input">
                      <span class="title_input">Resumen*</span>
                      <el-input
                        type="textarea"
                        placeholder="Ingrese un breve resumen"
                        maxlength="500"
                        show-word-limit
                      >
                      </el-input>
                    </div>
                  </div>

                  <div class="w-full flex flex-row pb-4">
                    <h5 class="px-8 title_input">Imágenes*</h5>
                  </div>

                  <div class="w-full flex flex-row px-8">
                    <el-upload
                      action="https://api-url-images.herokuapp.com/api/v1/images"
                      list-type="picture-card"
                      accept="image/jpeg"
                      :before-upload="beforeUpload"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                      :on-success="success"
                    >
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="" />
                    </el-dialog>
                  </div>

                  <div class="w-full flex flex-row px-8">
                    <div class="flex flex-col pt-4">
                      <p class="info_text_md">
                        El formato de las imágenes deben de ser en JPG con una
                        resolución mínima de 1080x1080 px.
                      </p>
                      <span class="info_text_md">Peso max 500 KB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="spacer"></div>

          <div class="card">
            <div class="w-11/12 mx-auto py-10 px-10">
              <div>
                <div>
                  <div class="pb-4">
                    <h5 class="title_input">Tipo de libro*</h5>
                  </div>
                  <div class="flex flex-row">
                    <div class="flex flex-col mr-4">
                      <span class="title_switch">Digital</span>
                      <el-switch
                        v-model="typeBook.digital"
                        active-color="#5E20E4"
                        inactive-color="#C4C4C4"
                      >
                      </el-switch>
                    </div>

                    <div class="flex flex-col">
                      <span class="title_switch">Fisico</span>
                      <el-switch
                        v-model="typeBook.fisico"
                        active-color="#5E20E4"
                        inactive-color="#C4C4C4"
                      >
                      </el-switch>
                    </div>
                  </div>
                </div>
              </div>

              <div v-show="typeBook.digital">
                <div class="pt-4">
                  <div class="pb-4">
                    <h5 class="title_input">Subir libro*</h5>
                  </div>

                  <div class="upload_pdf">
                    <el-upload
                      class="upload-demo"
                      drag
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :file-list="fileList"
                      multiple
                    >
                      <i class="el-icon-upload"></i>
                      <div class="el-upload__text">
                        Suelta tu archivo aquí o <em>haz clic para cargar</em>
                      </div>
                      <div slot="tip" class="el-upload__tip">
                        Solo archivos pdf/ebug con un tamaño menor de 500kb
                      </div>
                    </el-upload>
                  </div>
                </div>
              </div>

              <div v-show="typeBook.fisico">
                <div class="pt-4 w-full flex flex-row">
                  <div class="w-1/2">
                    <div class="flex flex-row">

                      <div class="pr-8">
                        <div class="pb-4">
                          <h5 class="title_input">Stock</h5>
                        </div>

                        <div class="input input_number">
                          <el-input-number v-model="price"></el-input-number>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="w-1/2 pl-8">
                    <div class="flex flex-row">
                      <div class="pb-4">
                        <div class="pb-4">
                          <h5 class="title_input">Estable ubicación</h5>
                        </div>

                        <div>
                          <div>
                            <button class="pr-8">
                              <div
                                class="
                                  btn_rounded_primary btn_add_size
                                  h-10
                                  flex
                                  justify-center
                                  items-center
                                  w-52
                                "
                              >
                                <span>Buscar tienda</span>
                              </div>
                            </button>
                            <button>
                              <div
                                class="
                                  btn_rounded_second btn_add_size
                                  h-10
                                  flex
                                  justify-center
                                  items-center
                                  w-52
                                "
                              >
                                <span>Ubicación actual</span>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="flex flex-row">
                  <div class="pt-4 w-1/2 pr-8">
                    <div class="pb-4">
                      <h5 class="title_input">Detalle del Libro*</h5>
                    </div>

                    <div class="select_details input">
                      <el-select
                        v-model="details"
                        multiple
                        filterable
                        allow-create
                        placeholder="Choose tags for your article"
                      >
                      </el-select>
                    </div>
                  </div>

                  <div class="pt-4 w-1/2 pl-8">
                    <div class="pb-4">
                      <h5 class="title_input">Precio</h5>
                    </div>

                    <div class="input price_input_prefix">
                      <el-input placeholder="Type something">
                        <h1 slot="prefix">S/</h1>
                      </el-input>
                    </div>
                  </div>
                </div>
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
  layout: 'admin',
  data() {
    return {
      typeBook: {
        digital: true,
        fisico: false,
      },
      imagesList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      images: null,
      options: [
        {
          value: 'HTML',
          label: 'HTML',
        },
        {
          value: 'CSS',
          label: 'CSS',
        },
        {
          value: 'JavaScript',
          label: 'JavaScript',
        },
      ],
      value: [],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      details: [],

      price: 0,
    }
  },
  methods: {
    beforeUpload(file) {
      if (file.size / 1000 > 150) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG) {
          this.$message.error('La imagen debe estar en formato JPG!')
        }
        if (!isLt2M) {
          this.$message.error('La imagen excede los 2MB!')
        }
        return isJPG && isLt2M
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }, //recordar que falta la logica para eliminar el array de las urls de respuesta de la api de subida de images, creo q debe preguntar a mi amorcito porq creo q sabe sobre eso
    success(response, file, fileList) {
      console.log('response: ', response)
      console.log('file: ', file)
      console.log('fileList: ', fileList)
      const urls = []
      for (const img of fileList) {
        urls.push(img.response.data)
      }

      console.log(urls)
    },
  },
}
</script>

<style>
.title_switch {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 0.7rem;
  line-height: 11px;
  color: var(--resaltado);
  padding-bottom: 0.5rem;
}
</style>
