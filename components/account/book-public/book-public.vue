<template>
  <div>
    <div class="container-book-public">
      <div v-for="item of [2]" :key="item" class="pb-2">
        <div class="container-bookPublic flex p-6 m-4">
          <div class="w-1/5">
            <img class="portada-book" src="/images/portada-la-corona.jpg" />
          </div>
          <div class="w-2/5 relative">
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
                >Editar</el-button
              >
            </div>
            <div class="">
              <el-button
                class="btn_publicBook_Delete w-48 rounded-xl"
                type="primary"
                >Eliminar</el-button
              >
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
    return {}
  },
}
</script>
