<template>
  <div
    class="
      h-screen
      w-full
      bg_secundary
      flex flex-row-reverse
      overflow-hidden
      relative
    "
  >
    <div class="w77 r-w-full">
      <Header />
      <div class="p-10 container_main_admin-dashboard">
        <div class="h-screen z-10">
          <nuxt />
        </div>

        <div class="fixed right-4 bottom-2 z-10 mobile_admin-icon_fixed-info">
          <el-popover
            placement="bottom"
            title="Info"
            width="200"
            trigger="click"
            content="Recuerdo que cualquier dato que ingrese se establecera por defecto en camelcase"
          >
            <div class="rounded-full" slot="reference">
              <div class="text-6xl">
                <a href="#">
                  <i class="el-icon-info"></i>
                </a>
              </div>
            </div>
          </el-popover>
        </div>
      </div>
    </div>
    <div
      class="
        mobile_container-admin
        pt-20
        bg_white
        h-full
        shadow_card
        z-50
        w23
      "
    >
      <div class="mobile_container-admin_items-menu">
        <div>
          <div>
            <div class="flex justify-center mobile_admin-logo">
              <img src="/logos/main.svg" alt="logo" class="px-8" />
            </div>

            <div class="pt-8 px-8 mobile_container_admin-dashboard">
              <div class="mobile_container_admin-menu_dashboard">
                <div class="flex flex-col links__panel">
                  <nuxt-link
                    to="/dashboard/admin"
                    no-prefetch
                    class="py-1 mobile_admin-link panel_link home__inactive"
                  >
                    <BtnDashBoard
                      :icon="btns.home.icon"
                      :text="btns.home.text"
                    />
                  </nuxt-link>

                  <nuxt-link
                    to="/dashboard/admin/mi-cuenta"
                    no-prefetch
                    class="
                      py-1
                      mobile_admin-link
                      panel_link
                      home__inactive
                      mobile_admin-menu_item-remove
                    "
                  >
                    <BtnDashBoard
                      :icon="btns.my_account.icon"
                      :text="btns.my_account.text"
                    />
                  </nuxt-link>

                  <nuxt-link
                    to="/dashboard/admin/categories"
                    no-prefetch
                    class="py-1 mobile_admin-link panel_link"
                  >
                    <BtnDashBoard
                      :icon="btns.categories.icon"
                      :text="btns.categories.text"
                    />
                  </nuxt-link>

                  <nuxt-link
                    to="/dashboard/admin/books"
                    no-prefetch
                    class="py-1 mobile_admin-link panel_link"
                  >
                    <BtnDashBoard
                      :icon="btns.books.icon"
                      :text="btns.books.text"
                    />
                  </nuxt-link>

                  <nuxt-link
                    to="/dashboard/admin/promotions"
                    no-prefetch
                    class="py-1 mobile_admin-link panel_link"
                  >
                    <BtnDashBoard
                      :icon="btns.promotions.icon"
                      :text="btns.promotions.text"
                    />
                  </nuxt-link>

                  <nuxt-link
                    to="/dashboard/admin/reglamos"
                    no-prefetch
                    class="py-1 mobile_admin-link panel_link"
                  >
                    <BtnDashBoard
                      :icon="btns.claims.icon"
                      :text="btns.claims.text"
                    />
                  </nuxt-link>

                  <button
                    @click="showDialog = true"
                    class="mobile_admin-menu_item-remove"
                  >
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

    <el-dialog
      title="Cerrar sesión"
      :visible.sync="showDialog"
      width="30%"
      center
    >
      <span
        >Hola, <strong>{{ data.name }} {{ data.last_name }}</strong></span
      ><br />
      <span
        >estas seguro que deseas cancela la sesión y salir de la
        platadorma?</span
      >
      <span slot="footer" class="dialog-footer">
        <button
          @click="showDialog = false"
          class="bg_second rounded-md h-10 color_white"
          style="width: 6.5rem"
        >
          Cancelar
        </button>
        <button
          @click="signOut"
          class="bg_primary rounded-md h-10 color_white"
          style="width: 6.5rem"
        >
          Salir
        </button>
      </span>
    </el-dialog>
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
      localStorage.removeItem('user')
      this.$router.push('/login')
    },
  },
  data() {
    return {
      data: {},
      showDialog: false,
      btns: {
        home: {
          text: 'Inicio',
          icon: 'el-icon-s-home',
          methods: this.home,
        },
        my_account: {
          text: 'Mi cuenta',
          icon: 'el-icon-user-solid',
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
  mounted() {
    const data = localStorage.getItem('user').toString()
    this.data = JSON.parse(data).user
  },
}
</script>

<style>
.w23 {
  width: 23%;
}

.w77 {
  width: 78%;
}

.panel_link.home__inactive.nuxt-link-active div span {
  color: #000;
  font-weight: 400;
}

.home__inactive.nuxt-link-active {
  background-color: rgba(0, 0, 0, 0) !important;
}

.home__inactive.nuxt-link-active i {
  color: var(--primary) !important;
}

.panel_link.nuxt-link-active {
  height: 3rem;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border-radius: 0.78rem;
}
/* exact link will show the primary color for only the exact matching link */
.panel_link.nuxt-link-exact-active,
.panel_link.home__inactive.nuxt-link-exact-active {
  height: 3rem;
  background-color: var(--primary) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border-radius: 0.78rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.panel_link.nuxt-link-exact-active div > span,
.panel_link.nuxt-link-exact-active div > i,
.home__inactive.nuxt-link-exact-active div > span,
.home__inactive.nuxt-link-exact-active div > i {
  color: #fff !important;
  font-weight: bold !important;
}

.panel_link.nuxt-link-active div > span,
.panel_link.nuxt-link-active div > i {
  color: #fff;
  font-weight: bold;
}

.links__panel .py-1 {
  padding: 0;
  margin: 0;
}

@media (max-width: 640px) {
  .mobile_container-admin {
    width: 100%;
    height: 5rem;
    position: absolute;
    bottom: 0;
  }

  .mobile_admin-logo {
    display: none;
  }

  .mobile_container_admin-menu_dashboard > .flex-col {
    flex-direction: row;
    justify-content: space-between;
  }

  .mobile_admin-link {
    width: 100%;
  }

  .mobile_container_admin-dashboard {
    padding-top: 0;
    padding-bottom: 1rem;
  }

  .mobile_container-admin_items-menu {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  /* icon flotante */
  .mobile_admin-icon_fixed-info {
    bottom: 5.5rem;
  }

  /* remove items menu */
  .mobile_admin-menu_item-remove {
    display: none !important;
  }

  .container_main_admin-dashboard {
    padding: 0.5rem;
  }
}

@media (max-width: 1024px) {
  .mobile_container-admin {
    width: 100%;
    height: 5rem;
    position: absolute;
    bottom: 0;
  }

  .mobile_admin-logo {
    display: none;
  }

  .mobile_container_admin-menu_dashboard > .flex-col {
    flex-direction: row;
    justify-content: space-between;
  }

  .mobile_admin-link {
    width: 100%;
  }

  .mobile_container_admin-dashboard {
    padding-top: 0;
    padding-bottom: 1rem;
  }

  .mobile_container-admin_items-menu {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  /* icon flotante */
  .mobile_admin-icon_fixed-info {
    bottom: 5.5rem;
  }

  /* remove items menu */
  .mobile_admin-menu_item-remove {
    display: none !important;
  }

  .container_main_admin-dashboard {
    padding: 0.5rem;
  }
}
</style>
