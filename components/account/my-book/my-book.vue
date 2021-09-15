<template>
  <div>
    <div v-for="item of [2, 3, 4, 5, 6, 7, 8]" :key="item" class="pb-2">
      <div class="flex">
        <div class="container-my-books p-6 m-4 w-full">
          <div class="flex">
            <div class="w-1/5">
              <img class="portada-book" src="/images/portada-la-corona.jpg" />
            </div>
            <div class="container-star">
              <div class="h-1/2">
                <p class="title-primary">Autor: Kiera Cass</p>
                <p class="title-book pt-4">Memory - Lyabook</p>
              </div>
              <div class="h-1/2 pt-4">
                <p class="title-primary">Categoria</p>
                <!-- <div v-for="item of [2, 3, 4, 5, 6, 7, 8]" :key="item" class="pl-4 pb-8"></div> -->
                <div class="flex pt-4">
                  <p class="name-category w-1/2">Romance</p>
                  <p class="name-category w-1/2">Comedia</p>
                </div>
              </div>
            </div>
            <div class="w-1/4">
              <div>
                <p class="title-primary">Estrellas:</p>
              </div>
              <div class="block pt-4 start-container">
                <el-rate v-model="value1"></el-rate>
              </div>
            </div>
            <div class="w-1/4 flex justify-end">
              <div class="relative h-full">
                <div class="">
                  <p class="fecha p-2 px-6">6 de Agosto del 2020</p>
                </div>
                <div class="absolute -bottom-0 right-px">
                  <a href="#" class="p-comentary">Ver comentarios</a>
                  <el-button class="btn_readBook" type="primary"
                    >Leer Libro</el-button
                  >
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
  data() {
    return {}
  },
}
</script>
