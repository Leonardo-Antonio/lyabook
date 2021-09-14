<template>
  <div class="overflow-y-auto overflow-x-hidden" style="height: 83vh">
    <div class="p-4">
      <div>
        <h1 class="title">Bienvenid@ {{ data.name }}</h1>
        <p class="subtitle pt-4">
          Aquí un resumen de lo más importante de esta semana
        </p>
      </div>

      <div class="pt-20">
        <div class="w-3/5 mx-auto">
          <div class="flex flex-row justify-between">
            <CardInfo :count="20" text="Ventas" />
            <CardInfo :count="cantClient" text="Clientes" />
            <CardInfo :count="amountClaims" text="Reglamos" />
          </div>
        </div>

        <div class="w-3/5 mx-auto pt-8">
          <div class="flex flex-row justify-between">
            <CardLink
              to="admin/promotions"
              src="/images/promotions_admin.svg"
              text="Nueva promoción"
            />
            <CardLink
              to="admin/books/new"
              src="/images/books_admin.svg"
              text="Nuevo libro"
            />
            <CardLink
              to="admin/reglamos"
              src="/images/categories_admin.svg"
              text="Ver reglamos"
            />
          </div>
        </div>
      </div>
    </div>
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
