<template>
  <div>
    <div>
      <h1 class="title line-1">Bienvenid@ {{ data.name }}</h1>
      <p class="subtitle pt-4">
        Aquí un resumen de lo más importante de esta semana
      </p>
    </div>

    <div class="pt-20">
      <div class="w-3/5 mx-auto mobile_admin-home-container-cards mobile_w-full r-w-full">
        <div class="flex flex-row justify-between mobile_admin-home-container mobile_vertical">
          <CardInfo :count="20" text="Ventas" />
          <span class="mobile_spacer"></span>
          <CardInfo :count="cantClient" text="Clientes" />
          <span class="mobile_spacer"></span>
          <CardInfo :count="amountClaims" text="Reglamos" />
          <span class="mobile_spacer"></span>
        </div>
      </div>

      <div class="w-3/5 mx-auto pt-8 mobile_admin-home-container-cards mobile_w-full r-w-full">
        <div class="flex flex-row justify-between mobile_admin-home-container mobile_vertical">
          <CardLink
            to="manager/categorias"
            src="/images/promotions_admin.svg"
            text="Categorias"
          />
          <span class="mobile_spacer"></span>
          <CardLink
            to="manager/libros"
            src="/images/books_admin.svg"
            text="Libros"
          />
          <span class="mobile_spacer"></span>
          <CardLink
            to="manager/exportar"
            src="/images/categories_admin.svg"
            text="Exportar datos"
          />
          <span class="mobile_spacer"></span>
        </div>
      </div>
    </div>
    <span class="mobile_spacer"></span>
    <span class="mobile_spacer"></span>
    <span class="mobile_spacer"></span>
    <span class="mobile_spacer"></span>
  </div>
</template>

<script>
import CardInfo from '../../cards/info'
import CardLink from '../../cards/link'
export default {
  components: {
    CardInfo,
    CardLink,
  },
  data() {
    return {
      data: {
        name: 'example',
        auth: 'example',
        rol: 'example',
      },
      cantClient: 0,
      amountClaims: 0,
    }
  },
  async mounted() {
    const admin = JSON.parse(localStorage.getItem('user').toString())
    this.data.name = admin.user.name
    this.data.rol = admin.user.rol
    if (admin.user.email != undefined) {
      this.data.auth = admin.user.email
    } else {
      this.data.auth = admin.user.dni
    }

    await this.getCountClient()
    await this.getCountClaims()
  },

  methods: {
    async getCountClient() {
      try {
        const response = await this.$admin({
          url: '/users/count/admin',
          method: 'get',
        })
        if (response.status == 200) {
          this.cantClient = response.data.data
        }
      } catch (error) {
        console.log(error)
      }
    },

    async getCountClaims() {
      try {
        const response = await this.$admin({
          url: '/claims/amount',
          method: 'get',
        })

        if (response.status == 200) {
          this.amountClaims = response.data.data
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 21px;
  /* or 87% */

  color: #000000;
}
.subtitle {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 21px;
  color: #8d8d8d;
}
</style>
