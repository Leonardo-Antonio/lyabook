<template>
  <div>
    <div
      class="flex justify-center h-160 relative"
      style="background: #f9f9ff; height: 33rem"
    >
      <img
        src="/shapes/circle-degradado-complete.svg"
        class="absolute z-10 rotate"
        style="
          width: 12rem;
          left: -6rem;
          top: 2rem;
          transform: rotate(-355deg);
        "
      />
      <div class="w-4/6 flex">
        <div class="w-1/2 flex items-end justify-center">
          <img src="/images/banner-2-home.svg" class="absolute z-10" />
        </div>
        <div class="w-1/2 flex items-center flex-col justify-center">
          <div>
            <p class="title-banner2 pb-4">Libros digitales y fisicos</p>
            <div class="">
              <p class="parrafos-banner2">
                La venta de los libros son digitales y en casos
              </p>
              <p class="parrafos-banner2 prrf-2">
                fisicos con recojo en tiendas o librerias
              </p>
              <p class="parrafos-banner2">para la meyor experiencia.</p>
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
</style>
