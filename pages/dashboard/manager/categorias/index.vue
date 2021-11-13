<template>
  <div>
    <div class="w-full flex flex-row mobile_vertical">
      <div class="w-1/2 mobile_w-full pt-1 mobile_pb-1">
        <h2 class="title_admin pl-4">Reporte de categorias</h2>
      </div>

      <div
        class="
          select_details select_rounded-full
          w-1/2
          mobile_w-full mobile_px-1
        "
      >
        <div class="flex fle-row mobile_vertical mobile_w-full">
          <span class="mobile_spacer-sm"></span>
        </div>
      </div>
    </div>

    <div class="pt-8">
      <h4 class="name_item_card">Gráfico</h4>
    </div>
    <section class="card">
      <div class="py-10 w-11/12 mx-auto px-10 mobile_px-0">
        <div class="w-full flex flex-col mobile_vertical">
          <Sold />
        </div>
      </div>
    </section>
    <span class="mobile_spacer"></span>
    <span class="mobile_spacer"></span>
    <span class="mobile_spacer"></span>
    <span class="mobile_spacer"></span>
  </div>
</template>

<script>
import Sold from '../../../../components/dashboard/manager/chart/sold-category'
export default {
  layout: 'manager',
  components: {
    Sold,
  },
}
</script>

<style>
.w70 {
  width: 70%;
}

.w30 {
  width: 30%;
}
</style>
