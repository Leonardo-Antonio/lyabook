<template>
  <div>
    <div class="container-book-public">
      <div v-for="item of [2]" :key="item" class="pb-2">
        <div class="container-bookPublic flex p-6 m-4">
          <div class="w-1/5 flex justify-center">
            <img class="portada-book" src="/images/portada-la-corona.jpg" />
          </div>
          <div class="w-2/5 relative pl-4">
            <div class="w-1/2">
              <p class="title-primary">Autor: Pedro Lopez</p>
              <p class="title-book pt-4">La Selección</p>
            </div>
            <div class="w-1/2 absolute -bottom-0">
              <p class="title-primary">Categoria</p>
              <div class="flex pt-4">
                <p class="name-category w-1/2">Romance</p>
                <p class="name-category w-1/2 ml-4">Comedia</p>
              </div>
            </div>
          </div>
          <div class="w-1/5"></div>
          <div class="w-2/5 flex flex-col justify-between items-end">
            <div class="flex">
              <p class="lb-fondo">50 kb</p>
              <p class="lb-fondo ml-4">PDF</p>
            </div>
            <div class="">
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
                    <el-input v-model="form.weight" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Formato" :label-width="formLabelWidth">
                    <el-input v-model="form.format" autocomplete="off"></el-input>
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
                  <el-button class="btn_cancel" @click="dialog_publicBook_Edit = false"
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
            <div class="">
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
                  <el-button class="btn_cancel" @click="DialogVisible_publicBook_Delete = false"
                    >Cancelar</el-button
                  >
                  <el-button class="btn_confirm" type="primary" @click="DialogVisible_publicBook_Delete = false"
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
      DialogVisible_publicBook_Delete: false
    }
  },
}
</script>
<style scoped>
.btn_confirm{
  background-color: #021639;
  border-color: #021639;
}
</style>
