<template>
  <div>
    <div>
      <h4 class="name_item_card">Información</h4>

      <div>
        <div class="card">
          <div class="py-10">
            <div class="w-11/12 mx-auto">
              <div class="input">
                <div class="w-full flex flex-row mobile_vertical pb-4">
                  <div
                    class="
                      flex flex-col
                      px-8
                      mobile_px-0
                      w-1/2
                      mobile_w-full mobile_pb-1
                    "
                  >
                    <span class="title_input">Titulo*</span>
                    <el-input
                      placeholder="Ingrese el titulo"
                      v-model="data.name"
                      clearable
                    />
                  </div>

                  <div
                    class="flex flex-col px-8 mobile_px-0 w-1/2 mobile_w-full"
                  >
                    <span class="title_input">Editorial*</span>
                    <div class="input">
                      <el-input
                        v-model="data.editorial"
                        placeholder="Ingrese la nombre de la editorial"
                        clearable
                      />
                    </div>
                  </div>
                </div>

                <div class="w-full flex flex-row mobile_vertical pb-4">
                  <div
                    class="
                      flex flex-col
                      px-8
                      mobile_px-0
                      w-1/2
                      mobile_w-full mobile_pb-1
                    "
                  >
                    <span class="title_input">Autor*</span>
                    <div class="input">
                      <el-input
                        placeholder="Ingrese el nombre del autor"
                        clearable
                        v-model="data.author"
                      />
                    </div>
                  </div>

                  <div
                    class="
                      flex flex-col
                      px-8
                      mobile_px-0
                      w-1/2
                      mobile_w-full
                      input
                      select_details
                    "
                  >
                    <span class="title_input">Categorias*</span>
                    <el-select
                      v-model="data.categories"
                      multiple
                      filterable
                      allow-create
                      placeholder="Ingrese las catergorias que correspondan"
                    >
                      <el-option
                        v-for="category in categories"
                        :key="category.ean"
                        :label="category.name"
                        :value="category.ean"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </div>

                <div class="w-full flex flex-row pb-4 px-8 mobile_px-0">
                  <div class="flex flex-col w-full text_area_new_admin input">
                    <span class="title_input">Resumen*</span>
                    <el-input
                      type="textarea"
                      placeholder="Ingrese un breve resumen"
                      maxlength="500"
                      show-word-limit
                      v-model="data.description"
                    >
                    </el-input>
                  </div>
                </div>

                <div class="w-full flex flex-row pb-4">
                  <h5 class="px-8 mobile_px-0 title_input">Imágenes*</h5>
                </div>

                <div class="w-full flex flex-row px-8 mobile_px-0">
                  <el-upload
                    :action="$config.API_IMAGES"
                    list-type="picture-card"
                    accept="image/png"
                    :before-upload="beforeUpload"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-success="successImages"
                  >
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="" />
                  </el-dialog>
                </div>

                <div class="w-full flex flex-row px-8 mobile_px-0">
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
          <div class="w-11/12 mx-auto py-10 px-10 mobile_px-0">
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
                    drag
                    :action="$config.API_PDFS"
                    accept="application/pdf"
                    :before-upload="beforeUploadPdf"
                    :on-success="successPdf"
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
              <div class="pt-4 w-full flex flex-row mobile_vertical">
                <div class="w-1/2 mobile_pb-1">
                  <div class="flex flex-row mobile_vertical">
                    <div class="pr-8">
                      <div class="pb-4">
                        <h5 class="title_input">Stock</h5>
                      </div>

                      <div class="input input_number">
                        <el-input-number
                          v-model="data.type.fisico.stock"
                        ></el-input-number>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-1/2 pl-8 mobile_px-0 mobile_w-full">
                  <div class="flex flex-row">
                    <div class="pb-4 mobile_w-full">
                      <div class="pb-4">
                        <h5 class="title_input">Estable ubicación</h5>
                      </div>

                      <div>
                        <div>
                          <button
                            @click="dialogSetUbication = true"
                            class="pr-8 mobile_px-0 mobile_w-full mobile_pb-1"
                          >
                            <div
                              class="
                                btn_rounded_primary btn_add_size
                                h-10
                                flex
                                justify-center
                                items-center
                                w-52
                                mobile_w-full
                              "
                            >
                              <span>Buscar tienda</span>
                            </div>
                          </button>
                          <span class="r-spacer-sm"></span>
                          <button
                            @click="getCurrentLocation"
                            class="mobile_w-full"
                          >
                            <div
                              class="
                                btn_rounded_second btn_add_size
                                h-10
                                flex
                                justify-center
                                items-center
                                w-52
                                mobile_w-full
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
              <div class="flex flex-row mobile_vertical">
                <div class="pt-4 w-1/2 pr-8 mobile_px-0 mobile_w-full">
                  <div class="pb-4">
                    <h5 class="title_input">Detalle del Libro*</h5>
                  </div>

                  <div class="select_details input">
                    <el-select
                      v-model="data.details"
                      multiple
                      filterable
                      allow-create
                      placeholder="Choose tags for your article"
                    >
                    </el-select>
                  </div>
                </div>

                <div class="pt-4 w-1/2 pl-8 mobile_px-0 mobile_w-full">
                  <div class="pb-4">
                    <h5 class="title_input">Precio*</h5>
                  </div>

                  <div class="input price_input_prefix">
                    <el-input
                      placeholder="Type something"
                      v-model.number="data.price_current"
                      type="number"
                    >
                      <h1 slot="prefix">S/</h1>
                    </el-input>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-8">
              <div class="flex flex-row">
                <button
                  @click="save"
                  class="w-full btn_primary h-10 rounded-full btn_add_size"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dialog_w-full">
      <el-dialog :visible.sync="dialogSetUbication" width="60" center>
        <div>
          <div class="w-full flex flex-row">
            <div class="w-1/2 pr-2 mobile_w-full">
              <div class="input_search_place">
                <el-input
                  @keypress.native.enter="searchPlace"
                  placeholder="Ingrese el lugar de la tienda"
                  v-model="place"
                  class="input-with-select"
                >
                  <el-button
                    @click="searchPlace"
                    slot="append"
                    icon="el-icon-search"
                  ></el-button>
                </el-input>
              </div>

              <div>
                <div class="pt-4">
                  <div>
                    <div
                      class="overflow-y-auto overflow-x-hidden"
                      style="height: 500px"
                    >
                      <div>
                        <div v-for="place of places" :key="place">
                          <div class="pt-2 pb-2 pr-2">
                            <button class="w-full" @click="setLocation(place)">
                              <div
                                class="
                                  bg_secundary
                                  rounded-xl
                                  delay-150
                                  hover:shadow-lg
                                  text-left
                                  p-4
                                "
                              >
                                <div class="flex flex-col">
                                  <div>
                                    <strong>Dirección: </strong>
                                    <span>{{ place.display_name }}</span>
                                  </div>
                                  <div>
                                    <strong>Region: </strong>
                                    <span>{{ place.display_region }}</span>
                                  </div>
                                  <div>
                                    <strong>Pais: </strong>
                                    <span>{{ place.country }}</span>
                                  </div>
                                  <div>
                                    <strong>Continente: </strong>
                                    <span>{{ place.continent }}</span>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-1/2 pl-2 mobile_remove">
              <l-map
                :zoom="13"
                :center="[data.type.fisico.log, data.type.fisico.lat]"
              >
                <l-tile-layer
                  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                ></l-tile-layer>
                <l-marker
                  :lat-lng="[data.type.fisico.lat, data.type.fisico.log]"
                ></l-marker>
              </l-map>
            </div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import MapMarket from '../../../../components/maps/market'

export default {
  components: {
    MapMarket,
  },
  data() {
    return {
      data: {
        name: '',
        author: '',
        editorial: '',
        price_current: 0.0,
        description: '',
        type: {
          digital: {
            src: '',
          },
          fisico: {
            log: '',
            lat: '',
            stock: '',
          },
        },
        categories: [],
        images_src: [],
        details: [],
      },
      typeBook: {
        digital: true,
        fisico: false,
      },
      dialogImageUrl: '',
      dialogVisible: false,
      images: null,
      dialogImageUrl: '',
      dialogVisible: false,

      dialogSetUbication: false,

      place: '',
      places: [],

      categories: null,
    }
  },
  methods: {
    save() {
      let url = '/books/'
      if (this.typeBook.digital && this.typeBook.fisico) {
        url = url + 'df'
      } else {
        if (this.typeBook.digital) {
          url = url + 'd'
        } else if (this.typeBook.fisico) {
          url = url + 'f'
        } else {
          this.$message({
            message: 'Debe estar activado por lo menos un tipo de libro',
            type: 'warning',
          })
          return
        }
      }

      try {
        this.$admin({
          url: url,
          method: 'post',
          data: this.data,
        })
      } catch {}
    },
    beforeUpload(file) {
      if (file.size / 1000 > 150) {
        const isJPG = file.type === 'image/png'
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
    beforeUploadPdf(file) {
      if (file.size / 1000 > 150) {
        const isPdf = file.type === 'application/pdf'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isPdf) {
          this.$message.error('Ingrese un pdf')
        }
        if (!isLt2M) {
          this.$message.error('La imagen excede los 2MB!')
        }
        return isPdf && isLt2M
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }, //recordar que falta la logica para eliminar el array de las urls de respuesta de la api de subida de images, creo q debe preguntar a mi amorcito porq creo q sabe sobre eso

    successImages(response, file, fileList) {
      const urls = []
      for (const img of fileList) {
        urls.push(img.response.data.url)
      }
      this.data.images_src = urls
    },
    successPdf(response, file, fileList) {
      this.data.type.digital.src = response.data.url
    },

    getCurrentLocation() {
      if (!navigator.geolocation) {
        return
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.$message({
            message: 'Se establecio la dirreción actual correctamente',
            type: 'success',
          })
          this.data.type.fisico.log = new String(
            position.coords.longitude
          ).toString()
          this.data.type.fisico.lat = new String(
            position.coords.latitude
          ).toString()
        },
        () => {
          alert(':C')
        }
      )
    },

    async searchPlace() {
      const response = await this.$axios({
        url: `https://api.mymappi.com/v2/geocoding/direct?apikey=0876a809-8921-4bb7-bd2d-f2069c9951e0&q=${this.place}`,
        method: 'get',
      })
      this.places = response.data.data
    },

    setLocation(place) {
      this.data.type.fisico.log = new String(place.lat).toString()
      this.data.type.fisico.lat = new String(place.lon).toString()
      this.$message({
        message: 'Se establecio correctamente la dirección de la tienda',
        type: 'success',
      })
      console.log(this.data.type.fisico.lat)
    },
  },

  async mounted() {
    try {
      const response = await this.$apidata({
        url: '/categories',
        method: 'get',
      })
      if (response.status == 200) {
        this.categories = response.data.data.filter(
          (category) => category.active
        )
      }
    } catch (error) {
      console.log('error: ', error)
    }
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
