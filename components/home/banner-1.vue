<template>
  <div>
    <div class="container-home flex justify-center relative overflow-x-hidden overflow-y-hidden pb-36">
      <div class="w-full flex pt-24">
        <div class="w-2/3">
          <div class="">
            <div class="flex">
              <p class="title">Lya</p>
              <p class="logo-2">Book</p>
              <p class="title">, la plataforma de libros</p>
            </div>
            <p class="title title-2">muy sencilla e intuituva de usar</p>
            <p class="sub-parrafo pr-4 pt-8">
              La plataforma de venta de libros, además de un apartado para que
              los usuarios pueden publicar sus novelas, poemas, textos
              narrativos, entre otros tipo.
            </p>
            <div class="flex pt-8">
              <el-button
                class="btn_primary btn_home_banner"
                type="primary"
                >Visitarnos</el-button
              >
              <el-button
                class="btn_secundary btn_home_banner"
                type="primary"
                >Publica tu libro</el-button
              >
            </div>
          </div>
        </div>
        <div class="w-1/3 pt-8 pl-8">
          <img src="/images/image-home-banner.svg" width="75%" />
        </div>
      </div>

      <img
        src="/shapes/double-circle-transparent.svg"
        class="absolute z-10"
        style="width: 8rem; left: -2rem; top: 4rem"
      />
      <img
        src="/shapes/circle-double-aye.svg"
        class="absolute rotate"
        style="width: 8rem; right: 20rem; top: 6rem; z-index: -10;"
      />
      <img
        src="/shapes/doble-circle.svg"
        class="absolute z-10"
        style="width: 5rem; right: -1rem; top: 8rem"
      />
      <img
        src="/shapes/circle-double-aye.svg"
        class="absolute z-10 rotate"
        style="width: 8rem; left: 24rem; top: 29rem"
      />
      <img
        src="/shapes/circle-double-aye.svg"
        class="absolute z-10 rotate"
        style="width: 15rem; right: -6rem; top: 30rem"
      />
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
<style scoped>
.title {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 66px;
  color: #000000;
}
.logo-2 {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 66px;
  color: var(--primary);
}
.title-2 {
  line-height: 55px !important;
}
.sub-parrafo {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  padding-right: 2rem;
}
.btn_home_banner {
  border-radius: 1rem !important;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  width: 25%;
}
</style>
