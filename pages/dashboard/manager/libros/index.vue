<template>
  <div>
    <div class="w-full flex flex-row mobile_vertical">
      <div class="w-1/2 mobile_w-full pt-1 mobile_pb-1">
        <h2 class="title_admin pl-4">Informe de libros</h2>
      </div>

      <div
        class="
          select_details select_rounded-full
          w-1/2
          mobile_w-full mobile_px-1
        "
      >
        <div class="flex fle-row mobile_vertical mobile_w-full">
          <el-select
            class="w-1/2 pr-4 rounded-full mobile_px-0 mobile_w-full-important"
            v-model="graphic"
            clearable
            placeholder="Grafico de"
          >
            <el-option
              v-for="item in graphicOptions"
              :key="item.value"
              :label="item"
              :value="item"
            />
          </el-select>
          <span class="mobile_spacer-sm"></span>
          <el-select
            class="w-1/2 pl-4 mobile_px-0 mobile_w-full-important"
            v-model="filterBy"
            clearable
            placeholder="Filtrar por"
          >
            <el-option
              v-for="item in filterByOptions"
              :key="item.value"
              :label="item"
              :value="item"
            />
          </el-select>
        </div>
      </div>
    </div>

    <div class="pt-8">
      <h4 class="name_item_card">Gráfico</h4>
    </div>
    <section class="card">
      <div class="py-10 w-11/12 mx-auto px-10 mobile_px-0">
        <div class="w-full flex flex-row mobile_vertical">
          <div class="w70 mobile_pb-1">
            <line-chart
              class="char"
              :data="chartData"
              style="width: 100%"
            ></line-chart>
          </div>

          <div class="flex flex-col justify-between w30 mobile_w-full-important">
            <div class="flex flex-col pl-10 mobile_px-0">
              <div class="pb-4">
                <button
                  class="btn_primary hover:shadow-2xl rounded-full w-full h-14"
                >
                  Exportar data en cvs
                </button>
              </div>
              <div class="pb-4">
                <button class="btn_primary rounded-full w-full h-14">
                  Exportar data en hoja de calculo
                </button>
              </div>
              <div class="pb-4">
                <button class="btn_primary rounded-full w-full h-14">
                  Exportar data en texto plano
                </button>
              </div>
            </div>

            <div>
              <div class="pl-10 mobile_px-0">
                <button
                  class="
                    bg_second
                    color_white
                    btn_add_size
                    rounded-full
                    w-full
                    h-14
                  "
                >
                  Generar reporte
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <span class="mobile_spacer"></span>
    <span class="mobile_spacer"></span>
    <span class="mobile_spacer"></span>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  data() {
    return {
      graphic: '',
      filterBy: '',
      graphicOptions: ['Barras', 'Linar', 'Torta'],
      filterByOptions: ['Más vendidos', 'Menos comprados', 'Nuevos'],
      chartData: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
        datasets: [
          {
            label: 'mi',
            data: [23, 32, 32, 32, 3, 23, 2, 3, 23],
            fill: false,
            stepped: true,
          },
          {
            label: 'amorcito',
            data: [23, 32, 32, 32, 3, 23, 2, 3, 23],
            fill: false,
            stepped: true,
          },
          {
            label: '<3',
            data: [23, 32, 32, 32, 3, 23, 2, 3, 23],
            fill: false,
            stepped: true,
          },
        ],
      },
    }
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
