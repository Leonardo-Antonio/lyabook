<template>
  <div>
    <div
      class="
        bg_primary
        text-center
        h-20
        flex
        justify-center
        items-center
        color_white
        mt-8
      "
      style="padding: 5.5rem"
    >
      <h1 style="font-size: 2.1rem">Nosotros</h1>
    </div>
    <div class="container-about-us py-12">
      <!-- <div class="banner-about-us flex justify-center">
                <img
                    class="img-portada-mobile-about"
                    src="/images/LyaBookLogo.svg"
                    width="40%"
                  />
            </div> -->
      <div class="container-data-about flex justify-center">
        <div class="w-10/12">
          <p class="title-about">Conocenos...</p>
          <p class="parrafo-about">
            La empresa “LyaBook” fue fundada el 25 de octubre del 2010 en Lima,
            Perú. Inició con la venta y compra de libros a nivel local y luego
            fue creciendo hasta ser una empresa que está en el mercado
            competitivo a nivel nacional. Esta trayectoria los llevó a
            consolidarse exitosamente en el mercado, en concordancia con los
            años de servicio y la excelencia empresarial.
          </p>

          <p class="title-about">Misión</p>
          <p class="parrafo-about">
            Nuestra misión es contribuir con el aprendizaje y creatividad
            brindándole libros de buena calidad y diversas categorías.
          </p>
          <p class="title-about">Visión</p>
          <p class="parrafo-about">
            Nuestra visión es convertirnos en la principal elección de nuestros
            clientes de manera que podamos alcanzar las metas de crecimiento,
            además de ser líderes en el mercado en el que competimos.
          </p>
          <p class="title-about">Objetivos</p>
          <p class="parrafo-about">
            Nuestro objetivo es poder brindar una buena experiencia, además de
            ser la empresa líder del mercado y ofrecer libros de calidad a
            nuestros clientes.
          </p>
          <!-- <p class="title-about">Valores de la empresa</p>
                    <p class="parrafo-about">- Responsabilidad en el cumplimiento de las tareas asignadas y el horario establecido.</p>
                    <p class="parrafo-about">- Actitud para desempeñarse en las tareas siendo competente.</p>
                    <p class="parrafo-about">- Honestidad para llevar una conducta recta y honrada en el día a día.</p>
                    <p class="parrafo-about">- Creatividad para aportar ideas y soluciones.</p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'client',
}
</script>
<style scoped>
.title-about {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 66px;
  color: var(--primary);
}
.parrafo-about {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 30px;
}
@media (max-width: 1024px) {
  .title-about {
    font-size: 24px;
    line-height: 66px;
  }
  .parrafo-about {
    font-size: 18px;
    line-height: 30px;
  }
}
@media (max-width: 640px) {
  .img-portada-mobile-about {
    width: 80% !important;
  }
}
</style>
