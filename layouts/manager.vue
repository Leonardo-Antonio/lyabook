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
    <div class="w-full">
      <Header />
      <div class="p-10">
        <div class="h-screen z-10">
          <div class="overflow-y-auto overflow-x-hidden" style="height: 85vh">
            <div class="p-4">
              <nuxt />
            </div>
          </div>
        </div>

        <div class="fixed right-4 bottom-2 z-10">
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
    <div class="w-1/5 pt-20 bg_white h-full shadow_card">
      <div>
        <div>
          <div class="flex justify-center">
            <img src="/logos/main.svg" alt="logo" class="px-8" />
          </div>

          <div class="pt-8 px-8">
            <div>
              <div class="flex flex-col links__panel">
                <nuxt-link
                  to="/dashboard/manager"
                  no-prefetch
                  class="py-1 panel_link home__inactive"
                >
                  <BtnDashBoard :icon="btns.home.icon" :text="btns.home.text" />
                </nuxt-link>

                <nuxt-link
                  to="/dashboard/manager/mi-perfil"
                  no-prefetch
                  class="py-1 panel_link"
                >
                  <BtnDashBoard
                    :icon="btns.users.icon"
                    :text="btns.users.text"
                  />
                </nuxt-link>

                <nuxt-link
                  to="/dashboard/manager/administradores"
                  no-prefetch
                  class="py-1 panel_link"
                >
                  <BtnDashBoard
                    :icon="btns.admin.icon"
                    :text="btns.admin.text"
                  />
                </nuxt-link>

                <nuxt-link
                  to="/dashboard/manager/categorias"
                  no-prefetch
                  class="py-1 panel_link"
                >
                  <BtnDashBoard
                    :icon="btns.categories.icon"
                    :text="btns.categories.text"
                  />
                </nuxt-link>

                <nuxt-link
                  to="/dashboard/manager/libros"
                  no-prefetch
                  class="py-1 panel_link"
                >
                  <BtnDashBoard
                    :icon="btns.books.icon"
                    :text="btns.books.text"
                  />
                </nuxt-link>

                <nuxt-link
                  to="/dashboard/manager/exportar"
                  no-prefetch
                  class="py-1 panel_link"
                >
                  <BtnDashBoard
                    :icon="btns.export.icon"
                    :text="btns.export.text"
                  />
                </nuxt-link>

                <button @click="showDialog = true">
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
        users: {
          text: 'Mi perfil',
          icon: 'el-icon-s-custom',
          methods: this.users,
        },
        admin: {
          text: 'Admins',
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
        export: {
          text: 'Exportar',
          icon: 'el-icon-download',
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
</style>
