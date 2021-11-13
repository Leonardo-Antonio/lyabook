<template>
  <div>
    <div class="container-book-public">
      <div v-for="item of dataBook" :key="item" class="pb-2">
        <div class="container-bookPublic flex p-6 m-4">
          <div class="w-1/5 flex justify-center container-portada">
            <img class="portada-book h-full" :src="item.images_src" />
          </div>
          <div class="w-2/5 relative pl-4 container-detalle">
            <div class="container-data">
              <p class="title-primary">Autor: {{ item.author }}</p>
              <p class="title-book pt-4">{{ item.name }}</p>
            </div>
            <div class="pt-8 container-category">
              <p class="title-primary">Resumen</p>
              <div class="pt-2">
                <p class="name-category">{{ item.description }}</p>
              </div>
            </div>
          </div>
          <div
            class="
              w-2/5
              flex flex-col
              justify-between
              items-end
              container-button-public
            "
          >
            <div class="container-book-edit">
              <el-button
                class="btn_publicBook_Edit w-48 rounded-xl"
                type="primary"
                @click="eventEdit(item._id)"
                >Editar</el-button
              >
            </div>

            <div class="container_publicBook_Edit">
              <el-dialog
                title="Editar libro publicado"
                :visible.sync="dialog_publicBook_Edit"
                class="dialog-edit"
              >
                <el-form :model="form">
                  <el-form-item
                    label="Titulo del Libro"
                    :label-width="formLabelWidth"
                  >
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Resumen" :label-width="formLabelWidth">
                    <el-input
                      v-model="form.resumen"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="Portada" :label-width="formLabelWidth">
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
                  </el-form-item>
                  <el-form-item label="Archivo" :label-width="formLabelWidth">
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
                      </el-upload>
                    </div>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button
                    class="btn_cancel"
                    @click="dialog_publicBook_Edit = false"
                    >Cancelar</el-button
                  >
                  <el-button
                    class="btn_confirm"
                    type="primary"
                    @click="confirmEdit"
                    >Confirmar</el-button
                  >
                </span>
              </el-dialog>
            </div>
            <div class="container-delete">
              <el-button
                class="btn_publicBook_Delete w-48 rounded-xl"
                type="primary"
                @click="eventDelete(item._id)"
                >Eliminar</el-button
              >
              <el-dialog
                title="Eliminar"
                :visible.sync="DialogVisible_publicBook_Delete"
                width="30%"
                center
              >
                <span>Desea eliminar el libro publicado "La Selección"</span>
                <span slot="footer" class="dialog-footer">
                  <el-button
                    class="btn_cancel"
                    @click="DialogVisible_publicBook_Delete = false"
                    >Cancelar</el-button
                  >
                  <el-button
                    class="btn_confirm"
                    type="primary"
                    @click="confirmDelete"
                    >Confirmar</el-button
                  >
                </span>
              </el-dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog_publicBook_Edit: false,
      form: {
        name: '',
        resumen: '',
      },
      formLabelWidth: '120px',
      DialogVisible_publicBook_Delete: false,
      //----------------------------------------------------------------
      user: [],
      dataBook: [],
      idBook: '',
      images: [],
      pdf: '',
    }
  },
  methods: {
    eventDelete(id) {
      console.log(id)
      this.idBook = id
      this.DialogVisible_publicBook_Delete = true
    },
    async confirmDelete() {
      try {
        var deleteText = await this.$apidata({
          url: '/books/' + this.idBook,
          method: 'delete',
        })

        console.log(deleteText)

        this.DialogVisible_publicBook_Delete = false
      } catch (error) {
        console.log(error)
      }
    },
    eventEdit(id) {
      this.idBook = id
      this.dialog_publicBook_Edit = true
    },
    async confirmEdit() {
      try {
        var data = {
          name: this.form.name,
          description: this.form.resumen,
          images_src: this.images,
          type: {
            digital: {
              src: this.pdf,
            },
          },
        }

        var updateText = await this.$apidata({
          url: '/books/public/' + this.idBook,
          method: 'put',
          data: data,
        })

        if(updateText.data.type_message == "Advertencia"){
          this.$message({
            message: updateText.data.message,
            type: 'warning'
          });
        }else if(updateText.data.type_message == "Mensaje"){
          this.$message({
            message: updateText.data.message,
            type: 'success'
          });
        }else if(updateText.data.type_message == "Error"){
          this.$message.error(updateText.data.message);
        }

        this.dialog_publicBook_Edit = false
      } catch (error) {
        console.log(error)
      }
    },
    beforeUpload(file) {
      if (file.type != 'image/png') {
        this.$message.error('La imagen solo debe ser .png')
      }
    },
    successImages(response, file, fileList) {
      this.images = []
      fileList.forEach((fil) => {
        this.images.push(fil.response.data.url)
      })
    },
    handleRemove(file, fileList) {
      this.images = []
      fileList.forEach((fil) => {
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
    },
  },
  async created() {
    try {
      var user = localStorage.getItem('user')
      if (user != null) {
        this.user = JSON.parse(user).user

        const response = await this.$apidata({
          url: '/books/property/' + this.user._id,
          method: 'get',
        })

        if (response.status == 200) {
          this.dataBook = response.data.data
        }
        console.log(this.dataBook)
      }
    } catch (error) {}
  },
}
</script>
<style scoped>
.btn_confirm {
  background-color: #021639;
  border-color: #021639;
}
@media only screen and (max-width: 900px) {
  .container-bookPublic {
    flex-direction: column;
  }
  .container-portada {
    width: 100%;
  }
  .container-detalle {
    width: 100%;
  }
  .container-data {
    width: 100%;
    padding-top: 2rem;
  }
  .container-category {
    width: 100%;
    bottom: unset;
  }
  .container-button-public {
    width: 100%;
    align-items: flex-start;
    padding-top: 5rem;
  }
  .container-detalle {
    padding: 0%;
  }
  .container-category {
    padding-top: 1rem;
  }
  .btn_publicBook_Delete {
    width: 100%;
  }
  .btn_publicBook_Edit {
    width: 100%;
  }
  .container-book-edit {
    width: 100%;
  }
  .container-delete {
    width: 100%;
    padding-top: 1rem;
  }
}
</style>
