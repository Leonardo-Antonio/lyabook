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
        type: 'line',
        data: {
          labels: [],
          datasets: [
            {
              label: '',
              backgroundColor: 'rgb(249,249,255)',
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
      const loading = this.$loading({
        lock: true,
        text: 'Cargando...',
      })
      const workSheet = XLSX.utils.json_to_sheet(this.data)
      const workBook = XLSX.utils.book_new()

      XLSX.utils.book_append_sheet(workBook, workSheet, 'new-books')
      XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' })
      XLSX.writeFile(workBook, `new-books.xlsx`)
      loading.close()
    },

    async getDataBooksByStock() {
      const loading = this.$loading({
        lock: true,
        text: 'Cargando...',
      })
      try {
        const { status, data } = await this.$manager({
          url: '/reports/data/new/books/7',
          method: 'get',
        })
        if (status == 200) {
          this.data = data.data
          this.data.forEach((book) => {
            this.config.data.labels.push(book.name)
            if (book.type.fisico.stock == undefined) {
              this.config.data.datasets[0].data.push(0)
            } else {
              this.config.data.datasets[0].data.push(book.type.fisico.stock)
            }
            this.config.data.datasets[0].label = 'libros nuevos'

            book.stock = book.type.fisico.stock
            book.categories = book.categories.join(';')
            delete book.type
            delete book.details
            delete book.commentaries
          })
          loading.close()
        } else {
          this.$message({
            message: 'no hay contenido que exportar',
            type: 'info',
          })
          loading.close()
        }
      } catch (error) {
        this.$message({
          message: 'Acaba de ocurrir un error',
          type: 'error',
        })
        loading.close()
      }
    },

    async getReport() {
      const loading = this.$loading({
        lock: true,
        text: 'Cargando...',
      })
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
          loading.close()
        } else {
          this.$message({
            message: 'no hay contenido que exportar',
            type: 'info',
          })
          loading.close()
        }
      } catch (error) {
        this.$message({
          message: 'Acaba de ocurrir un error',
          type: 'error',
        })
        loading.close()
      }
    },
  },

  async mounted() {
    await this.getDataBooksByStock()
    let chart = new Chart(
      document.getElementById('chart').getContext('2d'),
      this.config
    )
  },
}
</script>
