<template>
  <div>
    <div class="container-book-public">
      <div v-for="item of dataBook" :key="item" class="pb-2">
        <div class="container-bookPublic flex p-6 m-4">
          <div class="w-1/5 flex justify-center container-portada">
            <img class="portada-book" :src="item.images_src" />
          </div>
          <div class="w-2/5 relative pl-4 container-detalle">
            <div class="w-1/2 container-data">
              <p class="title-primary">Autor: {{item.author}}</p>
              <p class="title-book pt-4">{{item.name}}</p>
            </div>
            <div class="w-1/2 absolute -bottom-0 container-category">
              <p class="title-primary">Categoria</p>
              <div class="flex pt-4">
                <p class="name-category w-1/2">Romance</p>
                <p class="name-category w-1/2 ml-4">Comedia</p>
              </div>
            </div>
          </div>
          <div class="w-1/5"></div>
          <div class="w-2/5 flex flex-col justify-between items-end container-button-public">
            <div class="container-book-edit">
              <el-button
                class="btn_publicBook_Edit w-48 rounded-xl"
                type="primary"
                @click="dialog_publicBook_Edit = true"
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
                    <el-input
                      v-model="form.title_book"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="Peso" :label-width="formLabelWidth">
                    <el-input
                      v-model="form.weight"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="Formato" :label-width="formLabelWidth">
                    <el-input
                      v-model="form.format"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="Categoría" :label-width="formLabelWidth">
                    <el-select
                      v-model="form.category"
                      placeholder="Seleccionar las categorias"
                    >
                      <el-option label="Romance" value="Romance"></el-option>
                      <el-option label="Comedia" value="Comedia"></el-option>
                    </el-select>
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
                    @click="dialog_publicBook_Edit = false"
                    >Confirmar</el-button
                  >
                </span>
              </el-dialog>
            </div>
            <div class="container-delete">
              <el-button
                class="btn_publicBook_Delete w-48 rounded-xl"
                type="primary"
                @click="DialogVisible_publicBook_Delete = true"
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
                    @click="DialogVisible_publicBook_Delete = false"
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
        title_book: '',
        category: '',
        weight: '',
        format: '',
      },
      formLabelWidth: '120px',
      DialogVisible_publicBook_Delete: false,
      //----------------------------------------------------------------
      user:[],
      dataBook:[]
    }
  },
  async created() {
    try {
      var user = localStorage.getItem('user')
      if (user != null) {
        this.user = JSON.parse(user).user

        const response = await this.$apidata({
          url: '/books/property/' + this.user._id,
          method: 'get'
        })

        if(response.status == 200){
          this.dataBook = response.data.data
        }
        console.log(this.dataBook)
      }
      
    } catch (error) {
      
    }

  }
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
  .container-portada{
    width: 100%;
  }
  .portada-book{
    height: auto;
  }
  .container-detalle{
    width: 100%;
  }
  .container-data{
    width: 100%;
    padding-top: 2rem;
  }
  .container-category{
    width: 100%;
    bottom: unset;
  }
  .container-button-public{
    width: 100%;
    align-items: flex-start;
    padding-top: 5rem;

  }
  .container-detalle{
    padding: 0%;
  }
  .container-category{
    padding-top: 1rem;
  }
  .btn_publicBook_Delete{
    width: 100%;
  }
  .btn_publicBook_Edit{
    width: 100%;
  }
  .container-book-edit{
    width: 100%;
  }
  .container-delete{
    width: 100%;
    padding-top: 1rem;
  }
  
}
</style>
