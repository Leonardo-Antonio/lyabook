<template>
  <div>
    <div
      class="
        flex
        justify-center
        h-160
        relative
        container-img-banner2
        cont-bann2
      "
      style="background: #f9f9ff; height: 33rem"
    >
      <img
        src="/shapes/circle-degradado-complete.svg"
        class="absolute z-10 rotate circle-degradado"
        style="width: 12rem; left: -6rem; top: 2rem; transform: rotate(-355deg)"
      />
      <div class="w-4/6 flex">
        <div class="w-1/2 flex items-end justify-center pr-8 medio1">
          <img
            src="/images/banner-2-home.svg"
            class="absolute z-10 img-banner2"
          />
        </div>
        <div class="w-1/2 flex items-center flex-col justify-center medio2">
          <div>
            <p class="title-banner2 pb-4">Libros digitales y fisicos</p>
            <div class="">
              <p class="parrafos-banner2">
                La venta de los libros son digitales y en el caso de los
              </p>
              <p class="parrafos-banner2 prrf-2">
                libros físicos son con recojo en tiendas o librerias
              </p>
              <p class="parrafos-banner2">para la meyor experiencia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cont-bann2-response p-12">
      <div>
        <p class="title-banner2 pb-4">Libros digitales y fisicos</p>
        <div class="pb-12">
          <p class="parrafos-banner2">
            La venta de los libros son digitales y en el caso de los <span
              class="parrafos-banner2 prrf-2"
            >
              libros físicos son con recojo en tiendas o librerias
            </span>
            para la meyor experiencia.
          </p>
        </div>
        <div class="flex justify-center">
          <img
            src="/images/banner-2-home.svg"
          />
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
.title-banner2 {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 58px;
  color: #000000;
}
.parrafos-banner2 {
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 30px;
  color: var(--resaltado);
}
.prrf-2 {
  color: var(--second) !important;
}

@media screen and (min-width: 1500px) and (max-width: 1695px) {
  .parrafos-banner2 {
    font-size: 20px;
  }
  .title-banner2 {
    font-size: 30px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1500px) {
  .title-banner2 {
    font-size: 25px !important;
    line-height: 30px !important;
  }
  .parrafos-banner2 {
    font-size: 18px;
    line-height: 20px !important;
  }
  .img-banner2 {
    width: 30% !important;
  }
  .container-img-banner2 {
    height: 28rem !important;
  }
  .circle-degradado {
    width: 10rem !important;
    top: 5rem !important;
    left: -5rem !important;
  }
}

@media screen and (min-width: 1220px) and (max-width: 1300px) {
  .img-banner2 {
    width: 35% !important;
    padding-right: 1rem;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1220px) {
  .medio1 {
    width: 40% !important;
    margin-right: 2rem !important;
  }
  .medio2 {
    width: 60% !important;
    margin-left: 2rem;
  }
  .img-banner2 {
    width: 35% !important;
  }
}
@media (max-width: 1025px) {
  .cont-bann2 {
    display: none;
  }
  .title-banner2{
    font-size: 25px !important;
    line-height: 30px !important;
  }
  .parrafos-banner2{
    font-size: 18px !important;
    line-height: 20px !important;
  }
  .cont-bann2-response{
    background: rgb(249, 249, 255);
  }
}
@media (min-width: 1026px) {
  .cont-bann2-response {
    display: none;
  }
  
  
}
</style>
