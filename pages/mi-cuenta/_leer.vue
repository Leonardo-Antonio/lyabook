<template>
  <div class="flex justify-center cont-leer" style="height: 90vh">
    <div class="flex justify-center flex-col p-4 w-full">
      <div class="h-screen">
        <iframe
          :src= "`http://docs.google.com/gview?url=${pdf}${'&embedded=true'}`"
          frameBorder="0"
          scrolling="auto"
          height="100%"
          width="100%"
        ></iframe>
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
  created() {
    try {
      if (this.$route.params.pdf != null) {
        this.pdf = this.$route.params.pdf
      }else{
        this.$router.push('/errors/404')
      }
    } catch (error) {
      this.$router.push('/errors/404')
    }
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
@media (max-width: 1050px) {
  .cont-leer {
    padding-bottom: 2.5rem;
  }
}
@media screen and (min-width: 1050px) and (max-width: 1800px) {
  .cont-leer {
    padding-bottom: 2rem;
  }
}
@media (min-width: 1800px) {
  .cont-leer {
    padding-bottom: 2.5rem;
  }
}
</style>
