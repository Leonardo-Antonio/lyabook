<template>
  <div>
    <div class="contents justify-center container mx-auto">
      <div class="flex justify-center w-full container-header">
        <div class="py-4 w-full flex justify-center">
          <!-- header -->
          <div class="flex items-center justify-center" style="width: 78%">
            <div class="image-logo">
              <nuxt-link :to="`/`">
                <img
                  class="img_logo_pdf"
                  src="/images/LyaBook2Logo.svg"
                  width="8%"
                />
              </nuxt-link>
            </div>
            <div class="enlaces-header flex justify-end">
              <nuxt-link :to="`/libros/`">
                <h1>Libros</h1>
              </nuxt-link>
            </div>
            <div class="ml-4 icon-login flex justify-end">
              <div>
                <box-icon
                  name="user"
                  @click="showLogin = !showLogin"
                  color="#ffffff"
                ></box-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="showLogin" class="relative">
      <div class="absolute bottom-0 top-2 z-10 w-1/6" style="right: 5%">
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
              <el-button class="w-full button-log" @click="myAccount"
                >Mi cuenta</el-button
              >
            </nuxt-link>
            <el-button class="w-full button-log" @click="closeSeccion"
              >Cerrar Sección</el-button
            >
          </div>
        </div>
      </div>
    </div>

    <nuxt />

    <div class="footer-author py-4 flex justify-center fixed w-full bottom-0">
      <p class="text-footer pr-2 pad-r">Powered by</p>
      <div class="flex justify-center">
        <a href="https://github.com/AlexaJNavarro" target="_blank"
          ><h1 class="text-footer">@AlexaJNavarro</h1></a
        >
        <h1 class="text-footer px-2 dob-pad">and</h1>
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
    closeSeccion() {
      localStorage.removeItem('user')
      this.showOpen = false
    },
    myAccount() {
      localStorage.setItem('tab', JSON.stringify({ position: '0' }))
    },
  },
  created() {
    var user = localStorage.getItem('user')
    if (user != null) {
      this.showOpen = false
    }
  },
}
</script>

<style scoped>
.container-header {
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

@media screen and (min-width: 1200px) and (max-width: 1450px) {
  .img_logo_pdf {
    width: 10% !important;
  }
}

@media screen and (min-width: 850px) and (max-width: 1200px) {
  .img_logo_pdf {
    width: 13% !important;
  }
}
@media screen and (min-width: 640px) and (max-width: 850px) {
  .img_logo_pdf {
    width: 18% !important;
  }
}
@media screen and (min-width: 550px) and (max-width: 640px) {
  .img_logo_pdf {
    width: 20% !important;
  }
}
@media screen and (min-width: 460px) and (max-width: 550px) {
  .img_logo_pdf {
    width: 25% !important;
  }
}
@media (max-width: 460px) {
  .img_logo_pdf {
    width: 28% !important;
  }
}
@media screen and (min-width: 450px) and (max-width: 1080px) {
  .text-footer {
    font-size: 14px !important;
  }
}
@media (max-width: 450px) {
  .text-footer {
    font-size: 12px !important;
  }
}
@media (max-width: 1100px) {
  .pad-r{
    padding-right: 0.2rem;
  }
  .dob-pad{
    padding-left: 00.2rem;
    padding-right: 0.2rem;
  }
}
</style>
