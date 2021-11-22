<template>
  <div class="overflow-y-auto overflow-x-hidden" style="height: 83vh">
    <div class="p-4 r-space-container r-pt-4">
      <div>
        <h1 class="title-admin-home">Bienvenid@ {{ data.name }}</h1>
        <p class="subtitle-admin-home pt-4">
          Aquí un resumen de lo más importante de esta semana
        </p>
      </div>

      <div class="pt-20">
        <div class="w-3/5 mx-auto mobile_admin-home-container-cards r-w-full">
          <div
            class="flex flex-row justify-between mobile_admin-home-container"
          >
            <CardInfo :count="20" text="Ventas" />
            <span class="mobile_spacer"></span>
            <CardInfo :count="cantClient" text="Clientes" />
            <span class="mobile_spacer"></span>
            <CardInfo :count="amountClaims" text="Reglamos" />
          </div>
        </div>

        <div
          class="w-3/5 mx-auto pt-8 mobile_admin-home-container-cards r-w-full"
        >
          <div
            class="flex flex-row justify-between mobile_admin-home-container"
          >
            <CardLink
              to="admin/promotions"
              src="/images/promotions_admin.svg"
              text="Nueva promoción"
            />
            <span class="mobile_spacer"></span>
            <CardLink
              to="admin/books/new"
              src="/images/books_admin.svg"
              text="Nuevo libro"
            />
            <span class="mobile_spacer"></span>
            <CardLink
              to="admin/entrega-libros"
              src="/images/entrega_.svg"
              text="Entrega"
            />
          </div>
        </div>
      </div>
      <span class="mobile_spacer"></span>
      <span class="mobile_spacer"></span>
      <span class="mobile_spacer"></span>
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
@media (max-width: 640px) {
  .mobile_admin-home-container {
    flex-direction: column;
  }

  .mobile_admin-home-container-cards {
    width: 100%;
  }
}
.title-admin-home {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 1;
  /* or 87% */

  color: #000000;
}
.subtitle-admin-home {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 21px;
  color: #8d8d8d;
}
</style>
