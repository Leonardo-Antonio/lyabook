<template>
  <div>
    <div>
      <div class="ml-4">
        <p class="title-account pb-2">Mis Ordenes</p>
      </div>
      <div class="flex items-center container-return mb-2" v-show="!show">
        <el-button @click="show = true">
          <box-icon
            name="arrow-back"
            animation="flashing"
            color="#021639"
          ></box-icon>
        </el-button>

        <el-button
          class="return-button"
          type="primary"
          round
          @click="show = true"
          >Regresar</el-button
        >
      </div>

      <div class="list-order overflow-auto h-80" v-show="show">
        <div
          v-for="itemPayment of paymentList"
          :key="itemPayment"
          class="flex"
        >
          <div class="container-perfile px-12 py-6 m-4 w-3/5">
            <div class="flex">
              <div class="w-full">
                <p class="size-title mt-2">Boleta de venta</p>
                <p>B-{{ itemPayment.payment_id }}</p>
                <div class="mt-4 flex">
                  <el-button
                    class="w-1/2 btn-detail"
                    @click="showDetail(itemPayment)"
                    >Ver detalle</el-button
                  >
                  <el-button
                    class="w-1/2 btn-ticket"
                    @click="reporte(itemPayment._id)"
                    >Boleta de venta</el-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div v-show="!show" class="container-perfile px-4 py-6">
        <div class="flex h-48 header-boleta">
          <div class="container_boleta_right w-1/2">
            <div class="flex justify-center h-1/2">
              <img src="/images/LyaBook.svg" width="60%" />
            </div>
            <div
              class="
                container_boleta_botton
                pl-2
                h-1/2
                flex flex-col
                justify-center
              "
            >
              <p>Empresa: LyaBook S.A.C</p>
              <p>Correo Electrónico: lyabook@gmail.com</p>
              <p>Teléfono: 937 015 104 / 996 501 260</p>
            </div>
          </div>
          <div class="container_boleta_left w-1/2 h-full">
            <div
              class="
                flex flex-col
                justify-center
                items-center
                container_boleta_top
                px-2
                py-2
                h-1/2
              "
            >
              <p>RUC N° 999999999</p>
              <p>BOLETA DE VENTA</p>
              <p>B-{{ id_payment }}</p>
            </div>
            <div
              class="container_boleta_botton h-1/2 flex flex-col justify-center"
            >
              <p>
                Fecha y Hora de Emisión:
                {{ new Date(created_at).toLocaleString() }}
              </p>
              <p>Señor(es): {{ user.name }} {{ user.last_name }}</p>
              <p>DNI: {{ user.dni }}</p>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="name" label="Nombre" width="180">
            </el-table-column>
            <el-table-column prop="price" label="Precio Unitario">
            </el-table-column>
            <el-table-column prop="cant" label="Cantidad"> </el-table-column>
            <el-table-column prop="total" label="Total"> </el-table-column>
          </el-table>
        </div>
        <div class="container_boleta_botton pt-4">
          <p class="p_total text-right">Total: {{ total }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import RestorePassword from './restore-password'
export default {
  components: {
    // RestorePassword,
  },
  data() {
    return {
      tableData: [],
      //----------------------------------------------------
      user: [],
      show: true,
      paymentList: [],
      created_at: '',
      id_payment: '',
      total: 0,
    }
  },
  methods: {
    showDetail(data) {
      this.show = false
      this.tableData = []
      this.total = 0
      this.created_at = data.created_at
      this.id_payment = data.payment_id
      data.products.forEach((product) => {
        var dataTable = {
          img: product.picture_url,
          name: product.title,
          price: product.unit_price,
          cant: product.quantity,
          total: product.unit_price * product.quantity,
        }
        this.total += dataTable.total
        this.tableData.push(dataTable)
      })
      // var value={
      //   date: data.
      // }
    },
    async reporte(id) {
      const loading = this.$loading({
        lock: true,
        text: '  Generando reporte',
      })

      try {
        var res = await this.$axios({
          url: `https://api-lyabook.duckdns.org/api/v1/payments/boleta/${id}`,
          method: 'get',
          responseType: 'blob',
        })
        if (res.status == 200) {
          const url = window.URL.createObjectURL(new Blob([res.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'reporte-boleta-de-venta.pdf')
          document.body.appendChild(link)
          link.click()
        }
      } catch (error) {
        console.log(error)
      } finally {
        loading.close()
      }
    },
  },
  async created() {
    var user = localStorage.getItem('user')
    if (user != null) {
      this.user = JSON.parse(user).user

      const getPayCli = await this.$apidata({
        url: '/payments/' + this.user._id,
        method: 'get',
      })

      if (getPayCli.data.error == false) {
        getPayCli.data.data.forEach((payment) => {
          this.paymentList.push(payment)
        })
      }
    }
  },
}
</script>

<style scoped>
.size-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: var(--second);
}
.sub-size-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--second);
}
.size-date {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #7f7f7f;
}
.btn-detail {
  background: var(--second);
  border: solid 1px var(--second);
  color: var(--secundary);
  border-radius: 7px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
}
.btn-ticket {
  background: var(--primary);
  border: solid 1px var(--primary);
  color: var(--secundary);
  border-radius: 7px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
}

.container-return .el-button {
  padding: 0;
  border-color: #fff;
}

.container-return .el-button:hover {
  background: unset;
}

.return-button {
  padding: 0px !important;
  margin-left: 0.5rem !important;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #021639;
  background: unset;
  border-color: #fff;
}
.container_boleta_top {
  background: var(--primary);
  color: var(--secundary);
  border: solid 1px var(--primary);
  border-radius: 7px;
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
}
.container_boleta_botton {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
}
.p_total {
  font-weight: 500;
}

@media only screen and (max-width: 1400px) {
  .container-perfile {
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .list-order{
    overflow: hidden;
    height: auto;
  }
}
@media only screen and (max-width: 688px) {
  .container_boleta_botton {
    margin-top: 1rem;
  }
  .header-boleta {
    height: 14rem;
  }
  
}
@media screen and (min-width: 350px) and (max-width: 460px) {
  .container_boleta_top {
    font-size: 14px !important;
  }
  .container_boleta_left {
    padding-left: 1rem;
  }
  .header-boleta {
    height: 20rem;
  }
}

@media only screen and (max-width: 380px) {
.header-boleta{
  height: auto !important;
}
}
</style>
