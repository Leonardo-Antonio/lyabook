<template>
  <div class="flex justify-center">
    <div class="flex justify-center flex-col w-4/5 p-4">
      <div class="flex">
        <div class="w-1/2">
          <button @click="currentPage--">
            <box-icon name="left-arrow-alt"></box-icon>
          </button>
          <button @click="currentPage++">
            <box-icon name="right-arrow-alt"></box-icon>
          </button>
        </div>
        <div class="w-1/2 flex justify-end">
          <span class="mr-2 span-text-read-book">Página:</span>
          <span>{{ currentPage }} / {{ pageCount }}</span>
        </div>
      </div>
      <div>
        <pdf
          src="http://192.168.1.8:8001/api/v1/pdfs/gECwnVhW.pdf"
          @num-pages="pageCount = $event"
          @page-loaded="currentPage = $event"
          :page="currentPage"
        ></pdf>
      </div>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  layout: 'cliente-pdf',
  components: {
    pdf,
  },
  data() {
    return {
      currentPage: 1,
      pageCount: 0,
    }
  },
  created(){
    const leer = this.$route.params.leer
    console.log('************************PDF*************************')
    console.log(leer)
  },
  watch: {
    currentPage(value) {
      if (value < 1) {
        alert('no puede retroceder mas')
        this.currentPage = 1
      }
      if (value > this.pageCount) {
        alert('Que tal te parecio el libro? puedes dejar tu comentario')
        this.currentPage = this.pageCount
      }
    },
  },
}
</script>
<style scoped>
.span-text-read-book {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: var(--primary);
}
</style>
