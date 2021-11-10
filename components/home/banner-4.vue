<template>
  <div>
    <div
      class="flex justify-center h-160 relative"
      style="background: #f9f9ff; height: 30rem"
    >
      <div class="w-4/6 flex">
        <div class="w-1/2 flex items-center container-img">
          <div>
            <p class="title-banner4 pb-4">Publica tu libro</p>
            <div class="">
              <p class="parrafos-banner4 mb-8">
                Sube tu libro, historia, etc en nuestro apartado que tenemos
                para ti, para que puedas dar a concer tu talento además de tener
                la opción de poder bonificar tu esfurzo.
              </p>
            </div>
            <el-button class="btn_banner4 w-5/6 h-16" type="primary"
              >Sea parte del team</el-button
            >
          </div>
        </div>
        <div class="w-1/2 flex justify-center items-center">
          <img src="/images/image-banner4.svg" class="absolute z-20" />
        </div>
      </div>

      <img
        src="/shapes/circle-double-aye.svg"
        class="absolute z-10 rotate"
        style="width: 8rem; right: -2rem; top: 5rem"
      />
      <img
        src="/shapes/double-circle-transparent.svg"
        class="absolute z-10"
        style="width: 8rem; left: -2rem; top: 10rem"
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
.title-banner4 {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 58px;
  color: #000000;
}

.parrafos-banner4 {
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 30px;
  color: var(--resaltado);
}

.btn_banner4 {
  background: var(--primary);
  border-color: var(--primary);
  border-radius: 5rem;
  font-family: "Baloo Chettan 2";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 40px;
}

@media screen and (min-width: 1500px) and (max-width: 1695px) {
  .parrafos-banner4{
    font-size: 20px;
  }
  .title-banner4{
    font-size: 30px;
  }
  .btn_banner4{
    font-size: 20px;
  }

}
@media screen and (min-width: 1300px) and (max-width:1500px) {
  .title-banner4 {
    font-size: 25px !important;
    line-height: 30px !important;
  }
  .parrafos-banner4 {
    font-size: 18px;
    line-height: 20px !important;
  }
  .btn_banner4{
    font-size: 18px;
  }
      
}
@media screen and (min-width: 1025px) and (max-width:1300px) {
  .title-banner4 {
    font-size: 25px !important;
    line-height: 30px !important;
  }
  .parrafos-banner4 {
    font-size: 18px;
    line-height: 20px !important;
  }
  .btn_banner4{
    font-size: 18px;
  }
  .container-img{
    margin-right: 2rem !important;
  }
}
</style>
