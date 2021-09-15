<template>
  <div>
    <div class="p-12 container-new-book">
      <div class="flex">
        <div class="w-3/5">
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
        <div class="w-2/5 pl-12">
          <div>
            <p class="titulo-form-book">Categoría</p>
            <el-select
              class="input mt-2"
              v-model="value_categoria"
              multiple
              filterable
              allow-create
              placeholder=""
            >
              <el-option
                v-for="item in categoria"
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
        <!-- <span class="title_input">Resumen*</span> -->
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

      <div class="flex flex-col pt-4">
        <p class="info_text_md">
          El formato de las imágenes deben de ser en JPG con una resolución
          mínima de 1080x1080 px.
        </p>
        <span class="info_text_md">Peso max 500 KB</span>
      </div>

      <div class="upload_pdf mt-4">
        <el-upload
          drag
          action="http://192.168.1.7:8001/api/v1/pdfs?key=LyA1308_MORSAC25TQMor25_NNLiviN_SAkur4"
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
        <div class="flex w-1/2 justify-center items-center">
          <p class="w-1/2 titulo-form-book">Precio normal</p>
          <el-input
            class="w-1/2 input"
            placeholder="Precio"
            v-model="price_normal"
            clearable
          >
          </el-input>
        </div>
        <div class="w-1/2 flex justify-end items-center">
          <el-button class="btn_readBook-public" type="primary"
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
    return {}
  },
}
</script>
<style scoped></style>
