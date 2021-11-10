<template>
  <div>
    <div class="contents justify-center container mx-auto">
      <div class="flex justify-center w-full container-header">
        <div class="py-4 w-full flex justify-center ">
          <!-- header -->
          <div class="flex items-center justify-center" style="width: 78%;">
            <div class="image-logo">
              <nuxt-link :to="`/`">
                <img src="/images/LyaBook2.svg" width="8%" />
              </nuxt-link>
            </div>
            <div class="enlaces-header flex justify-end">
              <nuxt-link :to="`/libros/`">
                <h1>Libros</h1>
              </nuxt-link>
            </div>
            <div class=" ml-4 icon-login flex justify-end">
              <div>
                <box-icon
                  name="user"
                  @click="showLogin = !showLogin"
                  color='#ffffff'
                ></box-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div v-show="showLogin" class="relative">
      <div class="absolute bottom-0 top-2 z-10 w-1/6" style="right: 5%;">
        <div class="container-login p-2 flex flex-col">
          <div v-show="showOpen">
            <nuxt-link :to="`/login`">
              <el-button class="w-full button-log">Log In</el-button>
            </nuxt-link>
            <nuxt-link :to="`/sign-up/dni`">
              <el-button class="w-full button-log" style="margin-top: 0.5rem"
                >Registrate por DNI</el-button
              >
            </nuxt-link>
            <nuxt-link :to="`/sign-up/email`">
              <el-button class="w-full button-log" style="margin-top: 0.5rem"
                >Registrate por email y contraseña</el-button
              >
            </nuxt-link>
          </div>
          <div v-show="!showOpen">
            <nuxt-link :to="`/mi-cuenta`">
              <el-button class="w-full button-log">Mi cuenta</el-button>
            </nuxt-link>
            <el-button class="w-full button-log" @click="closeSeccion">Cerrar Sección</el-button>
          </div>
        </div>
      </div>
    </div>

    <nuxt />

    <div class="footer-author py-4 flex justify-center">
      <p class="text-footer pr-2">Powered by</p>
      <div class="flex justify-center">
        <a href="https://github.com/AlexaJNavarro" target="_blank"
          ><h1 class="text-footer">@AlexaJNavarro</h1></a
        >
        <h1 class="text-footer px-2">and</h1>
        <a href="https://github.com/Leonardo-Antonio" target="_blank"
          ><h1 class="text-footer">@Leonardo-Antonio</h1></a
        >
      </div>
    </div>

    <script src="https://sdk.mercadopago.com/js/v2"></script>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
  },
  data() {
    return {
      showLogin: false,
      showOpen: true,

    }
  },
  methods: {
    closeDialog() {
      try {
        console.log('el dialog se cerro')
        let nodo = document.getElementById('nodo')
        if (nodo.lastChild != null) {
          nodo.removeChild(nodo.lastChild)
        }
      } catch (error) {
        console.log('error al cerrar el dialogo')
      }
    },
    closeSeccion(){
      localStorage.removeItem('user')
      this.showOpen = false
    },
  },
  created(){
      var user = localStorage.getItem('user')
      if (user != null) {
        this.showOpen = false
      }
  }
}
</script>

<style scoped>
.container-header{
    background: var(--second);
}

.image-logo {
  width: 90%;
}


.enlaces-header {
  width: 5%;
  color: #ffffff;
}
.icon-login {
  width: 5%;
}
.footer-author {
  background: #011e51;
}
.text-footer {
  font-family: Saira;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 31px;
  text-align: center;

  color: #ffffff;
}

.container-login {
  box-shadow: 0px 4px 20px #5e20e340;
  border-radius: 7px;
}

.button-log:hover {
  color: var(--primary);
  background: var(--secundary);
}

.button-log {
  border: unset;
  color: #5e20e3a1;
  height: 3rem;
  font-family: Roboto;
}
</style>
