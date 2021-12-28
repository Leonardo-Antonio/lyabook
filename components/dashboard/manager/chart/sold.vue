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
        type: 'radar',
        data: {
          labels: [],
          datasets: [
            {
              label: 'Más vendidos',
              backgroundColor: 'rgb(2,22,57,85%)',
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
    async exportData() {
      const loading = this.$loading({
        lock: true,
        text: 'Cargando...',
      })

      try {
        const { status, data } = await this.$payment({
          url: '/payments/reports/books/sold/0',
          method: 'get',
        })
        if (status == 200) {
          let dataReport = []
          let max = 0

          data.data.forEach((book) => {
            if (book.sold_book.books_sold > max) max = book.sold_book.books_sold
          })

          data.data.forEach((book) => {
            dataReport.push({
              nombre: book.data.name,
              precio_actual: book.data.price_current,
              editorial: book.data.editorial,
              formato: book.data.format,
              categorias: Array(book.data.categories).join('; '),
              veces_vendido: book.sold_book.times_sold,
              libros_vendidos: book.sold_book.books_sold,
              tag:
                book.sold_book.books_sold > max / 5
                  ? 'Más vendido'
                  : 'Menos vendido',
            })
          })

          const workSheet = XLSX.utils.json_to_sheet(dataReport)
          const workBook = XLSX.utils.book_new()

          XLSX.utils.book_append_sheet(
            workBook,
            workSheet,
            'categorias-mas-menos-populares'
          )
          XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' })
          XLSX.writeFile(workBook, `categorias-mas-menos-populares.xlsx`)
          loading.close()
        } else {
          this.$message({
            message: 'No hay datos para exportar',
            type: 'info',
          })
          loading.close()
        }
      } catch (error) {
        this.$message({
          message: 'Error al exportar',
          type: 'error',
        })
        loading.close()
      }
    },

    async getData() {
      const loading = this.$loading({
        lock: true,
        text: 'Cargando...',
      })
      try {
        const { status, data } = await this.$payment({
          url: '/payments/reports/books/sold/15',
          method: 'get',
        })
        if (status == 200) {
          this.data = data.data
          let dataReport = []
          let max = 0

          this.data.forEach((book) => {
            if (book.sold_book.books_sold > max) max = book.sold_book.books_sold
          })

          this.data.forEach((book) => {
            dataReport.push({
              nombre: book.data.name,
              precio_actual: book.data.price_current,
              editorial: book.data.editorial,
              formato: book.data.format,
              categorias: Array(book.data.categories).join('; '),
              veces_vendido: book.sold_book.times_sold,
              libros_vendidos: book.sold_book.books_sold,
              tag:
                book.sold_book.books_sold > max / 5
                  ? 'Más vendido'
                  : 'Menos vendido',
            })
          })

          this.data = dataReport

          const booksData = dataReport
          booksData.forEach((item) => {
            this.config.data.labels.push(item.nombre)
          })

          let m1 = booksData.splice(0, booksData.length / 2)
          m1.forEach((item) => {
            this.config.data.datasets[0].data.push(item.libros_vendidos)
          })

          let m2 = booksData.splice(0, booksData.length)
          m2.forEach((item) => {
            this.config.data.datasets[1].data.push(item.libros_vendidos)
          })

          loading.close()
        } else {
          this.$message({
            message: 'No hay datos para exportar',
            type: 'info',
          })
          loading.close()
        }
      } catch (error) {
        this.$message({
          message: 'Error al exportar',
          type: 'info',
        })
        loading.close()
      }
    },

    async getReport() {
      const loading = this.$loading({
        lock: true,
        text: 'Exportando',
      })
      try {
        const { status, data } = await this.$manager({
          url: '/reports/books/sold',
          method: 'get',
          responseType: 'blob',
        })
        if (status == 200) {
          const url = window.URL.createObjectURL(new Blob([data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'libros_vendidos.pdf')
          document.body.appendChild(link)
          link.click()
          loading.close()
        }
      } catch (error) {
        loading.close()
      }
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
