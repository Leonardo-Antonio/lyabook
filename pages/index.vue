<template>
  <div>
    <div class="relative overflow-x-hidden overflow-y-hidden">
      <div class="flex justify-center">
        <Banner1 />
      </div>
      <div>
        <Banner2 />
      </div>
      <div
        class="
          flex
          justify-center
          relative
          overflow-x-hidden overflow-y-hidden
          pt-32
          pb-36
          bann3-cont
        "
      >
        <div class="w-4/6">
          <Banner3 />
        </div>
        <img
          src="/shapes/doble-circle-grayBlue.svg"
          class="absolute z-10 doble-circle-grayBlue"
          style="width: 3rem; left: 4rem; top: 3rem"
        />
        <img
          src="/shapes/circle-degradado-purple.svg"
          class="absolute z-10 rotate"
          style="width: 2rem; right: 5rem; top: 17rem"
        />
        <img
          src="/shapes/circle-degradado-complete.svg"
          class="absolute z-10 rotate img-degrad"
          style="
            width: 12rem;
            right: -4rem;
            top: 22rem;
            transform: rotate(-355deg);
          "
        />
        <img
          src="/shapes/circle-double-aye.svg"
          class="absolute z-10 rotate"
          style="width: 8rem; left: -3rem; top: 33rem"
        />
      </div>
      <div class="bann4-cont">
        <Banner4 />
      </div>
      <!-- <div>
        <Banner5/>
      </div> -->
      <!-- <img
          src="/images/book-blue.svg"
          class="absolute z-10"
          style="width: 20rem; right: 17rem; top: 146rem"
        /> -->

        <!-- <img
          src="/images/book-white.svg"
          class="absolute z-10"
          style="width: 18rem; right: 44rem; top: 124rem"
        /> -->
        <img
          src="/images/book-open.svg"
          class="absolute z-10 img-book"
          style="width: 20rem; right: 22rem; top: 118rem"
        />
        <img
        src="/images/doble-cuadrado.transparent.svg"
        class="absolute z-10 double-cuadrado"
        style="
          width: 16rem;
          right: 0rem;
          top: 65rem;
        "
      />
      
    </div>
  </div>
</template>

<script>
import Banner1 from '../components/home/banner-1'
import Banner2 from '../components/home/banner-2'
import Banner3 from '../components/home/banner-3'
import Banner4 from '../components/home/banner-4'
import Banner5 from '../components/home/banner-5'
export default {
  layout: 'client',
  components: {
    Banner1,
    Banner2,
    Banner3,
    Banner4,
    Banner5,
  },
  data() {
    return {
      input: '',
    }
  },
  methods: {
  },
}
</script>
<style scoped>
@media screen and (min-width: 1300px) and (max-width: 1500px) {
  .double-cuadrado{
    display: none;
  }
  .img-degrad{
    display: none;
  }
  .img-book{
    display: none;
  }
  
}
@media screen and (min-width: 1025px) and (max-width: 1300px) {
  .double-cuadrado{
    display: none;
  }
  .img-degrad{
    display: none;
  }
  .img-book{display: none;}
}
@media (max-width: 1025px) {
  .double-cuadrado{
    display: none;
  }
  .doble-circle-grayBlue{
    display: none;
  }
  .bann3-cont{
    display: none;
  }
  .bann4-cont{
    display: none;
  }
}

</style>