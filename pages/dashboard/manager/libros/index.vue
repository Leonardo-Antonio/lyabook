<template>
  <div>
    <div class="w-full flex flex-row">
      <div class="w-1/2">
        <h2 class="title_admin pl-4">Informe de libros</h2>
      </div>

      <div class="select_details select_rounded-full w-1/2">
        <div class="flex fle-row">
          <el-select
            class="w-1/2 pr-4 rounded-full"
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

          <el-select
            class="w-1/2 pl-4"
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
      <div class="py-10 w-11/12 mx-auto px-10">
        <div class="w-full flex flex-row">
          <div style="width: 70%">
            <line-chart
              class="char"
              :data="chartData"
              style="width: 100%"
            ></line-chart>
          </div>

          <div style="width: 30%">
            <div class="flex flex-col pl-10">
              <button class="btn_primary rounded-full w-full h-14 pb">
                Exportar data en cvs
              </button>
              <button class="btn_primary rounded-full w-full h-14 pb">
                Exportar data en hoja de calculo
              </button>
              <button class="btn_primary rounded-full w-full h-14 pb">
                Exportar data en texto plano
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
