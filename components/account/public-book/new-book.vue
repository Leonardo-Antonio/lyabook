<template>
  <div>
    <div class="p-12 container-new-book">
      <div class="flex fila-1">
        <div class="w-3/5 fc1">
          <div>
            <p class="titulo-form-book">Nombre</p>
            <el-input
              class="input mt-2"
              placeholder="Nombre"
              v-model="name"
              clearable
            >
            </el-input>
          </div>
        </div>
        <div class="w-2/5 pl-6 fc2">
          <div>
            <p class="titulo-form-book">Categoría</p>
            <el-select
              v-model="category"
              multiple
              collapse-tags
              placeholder="Select"
              class="input mt-2"
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
      </div>
      <div class="flex flex-col w-full text_area_new_admin input mt-4">
        <p class="titulo-form-book">Resumen</p>
        <el-input
          class="mt-2 inp-resumen"
          type="textarea"
          placeholder="Menos de 500 caracteristicas..."
          maxlength="500"
          show-word-limit
          v-model="resumen"
        >
        </el-input>
      </div>

      <div class="mt-4">
        <p class="titulo-form-book">Imágenes</p>
      </div>
      <div>
        <el-upload
          class="mt-2"
          action="http://localhost:8001/api/v1/images?key=LyA1308_MORSAC25TQMor25_NNLiviN_SAkur4"
          list-type="picture-card"
          accept="image/png"
          :before-upload="beforeUpload"
          :on-remove="handleRemove"
          :on-success="successImages"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>

      <div class="flex flex-col pt-4">
        <p class="info_text_md">
          El formato de las imágenes deben de ser en PNG.
        </p>
      </div>

      <div class="upload_pdf mt-4">
        <el-upload
          drag
          action="http://192.168.1.8:8001/api/v1/pdfs?key=LyA1308_MORSAC25TQMor25_NNLiviN_SAkur4"
          accept="application/pdf"
          :before-upload="beforeUploadPdf"
          :on-success="successPdf"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            Suelta tu archivo aquí o <em>haz clic para cargar</em>
          </div>
          <!-- <div slot="tip" class="el-upload__tip">
                                                    Solo archivos pdf/ebug con un tamaño menor de 500kb
                                                </div> -->
        </el-upload>
      </div>

      <div class="flex mt-4">
        <!-- <div class="flex w-1/2 justify-center items-center">
          <p class="w-1/2 titulo-form-book">Precio normal</p>
          <el-input
            class="w-1/2 input"
            placeholder="Precio"
            v-model="price_normal"
            clearable
          >
          </el-input>
        </div> -->
        <div class="w-full flex justify-end items-center">
          <el-button @click="addBook" class="btn_readBook-public" type="primary"
            >Publicar libro</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      resumen: '',
      //--------------------------------------SELECT CATEGORY-----------------------------------------------
      options: [],
      category: [],
      categories: [],
      images:[] ,
      pdf:''
    }
  },
  methods: {
    addBook() {
      console.log(this.name)
      console.log(this.category)
      console.log(this.resumen)
      console.log(this.images)
      console.log(this.pdf)

    },
    beforeUpload(file) {
      if (file.type != 'image/png') {
        this.$message.error('La imagen solo debe ser .png')
      }
    },
    successImages(response, file, fileList){
      this.images = []
      fileList.forEach((fil)=>{
        this.images.push(fil.response.data.url)
      })

    },
    handleRemove(file, fileList){
      this.images = []
      fileList.forEach((fil)=>{
        this.images.push(fil.response.data.url)
      })
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
        // return isPdf && isLt2M
      }
    },
    successPdf(response, file, fileList) {
      this.pdf = response.data.url
    }

  },
  async created() {
    this.categories = await this.$apidata({
      url: '/categories/',
      method: 'get',
    })
    
    this.categories.data.data.forEach((category) => {
      var category = {
        value: category._id,
        label: category.name,
      }
      this.options.push(category)
    })
  },
}
</script>
<style scoped>
@media only screen and (max-width: 641px) {
  .fila-1 {
    flex-direction: column;
  }
  .fc1{
    width: 100%;
  }
  .fc2{
    width: 100%;
    padding-left: 0;
    padding-top: 1rem;
  }
  .container-new-book{
    padding: 2rem;
  }
}
</style>
