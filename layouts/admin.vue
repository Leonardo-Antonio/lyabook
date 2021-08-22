<template>
  <div class="h-screen w-full bg_secundary flex flex-row-reverse overflow-hidden">
    <div class="w-full">
      <Header />
      <div class="p-10">
        <div class="h-screen">
          <nuxt />
        </div>

        <div class="fixed right-4 bottom-2 z-10">
          <div class="rounded-full">
            <div class="text-6xl">
              <a href="#">
                <i class="el-icon-info"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/5 pt-20 bg_white h-screen shadow_card">
      <div>
        <div>
          <div class="flex justify-center">
            <img src="/logos/main.svg" alt="logo" class="px-8" />
          </div>

          <div class="pt-8 px-8">
            <div>
              <div class="flex flex-col">
                <nuxt-link to="/dashboard/admin" no-prefetch class="py-1">
                  <BtnDashBoard :icon="btns.home.icon" :text="btns.home.text" />
                </nuxt-link>

                <nuxt-link to="/dashboard/admin/users" no-prefetch class="py-1">
                  <BtnDashBoard
                    :icon="btns.users.icon"
                    :text="btns.users.text"
                  />
                </nuxt-link>

                <nuxt-link
                  to="/dashboard/admin/categories"
                  no-prefetch
                  class="py-1"
                >
                  <BtnDashBoard
                    :icon="btns.categories.icon"
                    :text="btns.categories.text"
                  />
                </nuxt-link>

                <nuxt-link to="/dashboard/admin/books" no-prefetch class="py-1">
                  <BtnDashBoard
                    :icon="btns.books.icon"
                    :text="btns.books.text"
                  />
                </nuxt-link>

                <nuxt-link
                  to="/dashboard/admin/promotions"
                  no-prefetch
                  class="py-1"
                >
                  <BtnDashBoard
                    :icon="btns.promotions.icon"
                    :text="btns.promotions.text"
                  />
                </nuxt-link>

                <nuxt-link
                  to="/dashboard/admin/claims"
                  no-prefetch
                  class="py-1"
                >
                  <BtnDashBoard
                    :icon="btns.claims.icon"
                    :text="btns.claims.text"
                  />
                </nuxt-link>

                <button @click="signOut">
                  <BtnDashBoard
                    :icon="btns.signOut.icon"
                    :text="btns.signOut.text"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnDashBoard from '../components/buttons/btn-dashboard'
import Header from '../components/dashboard/header'

export default {
  components: {
    BtnDashBoard,
    Header,
  },
  methods: {
      signOut() {
          alert("adios")
      }
  },
  data() {
    return {
      btns: {
        home: {
          text: 'Inicio',
          icon: 'el-icon-s-home',
          methods: this.home,
        },
        users: {
          text: 'Usuarios',
          icon: 'el-icon-user-solid',
          methods: this.users,
        },
        categories: {
          text: 'Cateorias',
          icon: 'el-icon-menu',
        },
        books: {
          text: 'Libros',
          icon: 'el-icon-notebook-2',
        },
        promotions: {
          text: 'Promosciones',
          icon: 'el-icon-s-ticket',
        },
        claims: {
          text: 'Reclamos',
          icon: 'el-icon-s-management',
        },
        signOut: {
          text: 'Cerrar Sesión',
          icon: 'el-icon-back',
        },
      },
    }
  },
}
</script>
