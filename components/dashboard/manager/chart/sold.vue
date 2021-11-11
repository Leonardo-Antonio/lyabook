<template>
  <div>
    <div class="w-full h-96 mobile_pb-1" id="container_chart">
      <canvas id="chart"></canvas>
    </div>
    <div
      class="
        flex flex-row
        justify-between
        pt-8
        w-full
        mobile_w-full-important
        r-flex-col
      "
    >
      <div
        class="flex flex-col justify-between w-1/3 pl-10 mobile_px-0 r-w-full"
      >
        <div class="pb-4">
          <button
            @click="exportData"
            class="btn_primary rounded-full w-full h-14"
          >
            Exportar data en hoja de calculo
          </button>
        </div>
      </div>

      <div class="w-1/6 r-w-full">
        <div class="pl-10 mobile_px-0">
          <button
            @click="getReport"
            class="bg_second color_white btn_add_size rounded-full w-full h-14"
          >
            Generar reporte
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'

export default {
  data() {
    return {
      data: null,

      config: {
        type: 'bar',
        data: {
          labels: [],
          datasets: [
            {
              label: 'Más vendidos',
              backgroundColor: 'rgb(249,249,255)',
              data: [],
            },
            {
              label: 'Menos vendidos',
              backgroundColor: 'rgb(51,153,255)',
              data: [],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            y: {
              stacked: true,
              grid: {
                display: true,
                color: 'rgba(255,99,132,0.2)',
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        },
      },
    }
  },

  methods: {
    exportData() {
      const workSheet = XLSX.utils.json_to_sheet(this.data)
      const workBook = XLSX.utils.book_new()

      XLSX.utils.book_append_sheet(workBook, workSheet, 'stock')
      XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' })
      XLSX.writeFile(workBook, `stock.xlsx`)
    },

    async getData() {
      try {
        const { status, data } = await this.$payment({
          url: '/reports/books/sold',
          method: 'get',
        })
        if (status == 200) {
          this.data = data.data

          let max = 0
          let min = 0
          this.data.forEach((item) => {
            if (item.books_sold > max) {
              max = item.books_sold
            } else {
              min = item.books_sold
            }

            if (item.books_sold < min) {
              min = item.books_sold
            }
          })

          this.data.forEach((item) => {
            this.config.data.labels.push(item._id)

            if (item.books_sold == max || item.books_sold > min + 2) {
              this.config.data.datasets[0].data.push(item.books_sold)
            } else {
              this.config.data.datasets[1].data.push(item.books_sold)
            }
          })
        }
      } catch (error) {}
    },

    async getReport() {
      try {
        const { status, data } = await this.$manager({
          url: '/reports/books/stock/10',
          method: 'get',
          responseType: 'blob',
        })
        if (status == 200) {
          const url = window.URL.createObjectURL(new Blob([data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'stock.pdf')
          document.body.appendChild(link)
          link.click()
        }
      } catch (error) {}
    },
  },

  async mounted() {
    await this.getData()
    let chart = new Chart(
      document.getElementById('chart').getContext('2d'),
      this.config
    )
  },
}
</script>
