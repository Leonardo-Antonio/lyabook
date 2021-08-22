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
                <div class="input_semiroundend">
                  <div class="w-full flex flex-row pb-4">
                    <div class="flex flex-col px-8 w-1/2">
                      <span class="title_input">Titulo*</span>
                      <el-input placeholder="Ingrese el titulo" clearable />
                    </div>

                    <div class="flex flex-col px-8 w-1/2">
                      <span class="title_input">Editorial*</span>
                      <el-input
                        placeholder="Ingrese la nombre de la editorial"
                        show-password
                      />
                    </div>
                  </div>

                  <div class="w-full flex flex-row pb-4">
                    <div class="flex flex-col px-8 w-full">
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
                    <div class="flex flex-col w-full text_area_new_admin">
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
                    <h5 class="px-8">Imágenes</h5>
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
            <p>
              dadasdasdsdsd Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda perspiciatis in ex rerum quidem dolores error asperiores voluptatibus. Et vitae eligendi itaque necessitatibus amet, officia perferendis adipisci aspernatur tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores harum repellendus consectetur tempora quia necessitatibus nam aspernatur suscipit quidem dolorum. Voluptates, consequatur veniam exercitationem nostrum obcaecati maiores corrupti fugiat deserunt?
            </p>
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
