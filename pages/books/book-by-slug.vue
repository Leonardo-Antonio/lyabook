
<template>
    <div class="h-screen flex justify-center items-center relative overflow-hidden">
        <img
        class="absolute"
        style="left: 0px; top: 50px"
        src="/shapes/circle-lila-claro.png"
        alt=""
        />
        <BookSlug/>
        <!-- <img
        class="absolute"
        style="left: 0px; top: 300px"
        src="/shapes/doble-circle.png"
        alt=""
        /> -->
        <img
        class="absolute"
        style="left: 0px; bottom: 0px"
        src="/shapes/doble-cuadrado-button-right.png"
        alt=""
        />
    </div>
    
</template>

<script>

import BookSlug from '../../components/books/book-slug.vue'
export default {
  layout: 'client',
  components: {
    BookSlug
  }
}


</script>