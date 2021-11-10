<template>
  <div>
    <img
        src="/shapes/double-circle-transparent.svg"
        class="absolute z-10 double-circle-transparent"
        style="width: 8rem; left: -2rem; top: 4rem"
      />
      <img
        src="/shapes/circle-double-aye.svg"
        class="absolute z-10 rotate circle-doble-aye"
        style="width: 8rem; right: 20rem; top: 6rem; z-index: -10;"
      />
      <img
        src="/shapes/doble-circle.svg"
        class="absolute z-10"
        style="width: 5rem; right: -1rem; top: 8rem"
      />
      <img
        src="/shapes/circle-double-aye.svg"
        class="absolute z-10 rotate img-circle-double"
        style="width: 8rem; left: 24rem; top: 29rem"
      />
      <img
        src="/shapes/circle-double-aye.svg "
        class="absolute z-10 rotate img-circle"
        style="width: 15rem; right: -6rem; top: 30rem"
      />
    <div class="container-home cont-hom-resp flex justify-center relative overflow-x-hidden overflow-y-hidden pb-36">
      <div class="w-4/6 flex pt-24">
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
                class="btn_primary btn_home_banner btn-visitarnos"
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

.btn-visitarnos{
  border-color: var(--primary);
}

.btn-visitarnos:hover{
  border-width: 2px;
  background: unset;
  color: var(--second);
}

@media screen and (min-width: 1500px) and (max-width: 1695px) {
  .title {
    font-size: 30px !important;
    line-height: 35px !important;
  }
  .logo-2 {
    font-size: 30px !important;
    line-height: 35px !important;
  }
  .sub-parrafo{
    font-size: 20px;
  }
  .btn_home_banner{
    font-size: 16px;
    line-height: 20px;
    height: 10%;
  }
  .img-circle-double{
    top: 25rem !important;
  }
  .cont-hom-resp{
    padding-bottom: 7rem !important;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1500px) {
.title {
    font-size: 25px !important;
    line-height: 30px !important;
  }
  .logo-2 {
    font-size: 25px !important;
    line-height: 30px !important;
  }
  .sub-parrafo{
    font-size: 18px !important;
    line-height: 20px !important;
  }
  .btn_home_banner{
    font-size: 16px !important;
    width: 40%;
  }
  .cont-hom-resp{
    padding-bottom: 5rem !important;
  }
  .img-circle-double{
    top: 22rem !important;
    z-index: -10;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1350px) {
  .img-circle-double{
    width: 6rem !important;
  }
  .circle-doble-aye{
    width: 6rem !important;
    top: 3rem;
    right: 16rem;
  }
  /* .img-circle{
    width: 10rem !important;
    right: -3rem !important;
  } */
}
@media screen and (min-width: 1140px) and (max-width: 1200px) {
  .img-circle-double{
    width: 4rem !important;
    top: 23rem !important;
  }
  .circle-doble-aye{
    width: 4rem !important;
    top: 2rem !important;
    right: 15rem !important;
  }
  .double-circle-transparent {
    width: 6rem !important;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1140px) {
  .img-circle-double{
    width: 4rem !important;
    top: 22rem !important;
  }
  .circle-doble-aye{
    width: 4rem !important;
    top: 2rem !important;
    right: 15rem !important;
  }
  .double-circle-transparent {
    width: 6rem !important;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1500px) {
  .img-circle{
      width: 10rem !important;
      right: -3rem !important;
  }
}
</style>