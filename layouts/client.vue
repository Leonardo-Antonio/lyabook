<template>
  <div>
    <div class="flex justify-center container mx-auto">
      <div>
        <img class="absolute" style="right: 0px; top: 0px" :src="src" />
      </div>

      <div class="flex justify-center w-3/4 container-f-header">
        <div class="pt-8 w-full">
          <!-- header -->
          <div class="flex items-center justify-center px-2">
            <div class="image-logo">
              <nuxt-link :to="`/`">
                <img
                  class="img-portada"
                  src="/images/LyaBook.svg"
                  width="40%"
                />
              </nuxt-link>
            </div>
            <div class="search-autocomplete">
              <el-autocomplete
                v-model="state"
                :fetch-suggestions="querySearchAsync"
                placeholder="Busca un libro..."
                @select="handleSelect"
                class="input-search-autocomplete"
              ></el-autocomplete>
            </div>
            <div class="enlaces-header">
              <nuxt-link :to="`/libros/`">
                <h1>Libros</h1>
              </nuxt-link>
            </div>
            <div class="icon-login">
              <div>
                <box-icon
                  name="user"
                  @click="showLogin = !showLogin"
                ></box-icon>
              </div>
            </div>
            <div class="icon-shopping-cart">
              <box-icon
                name="cart"
                animation="tada"
                @click="showDrawer = true"
              ></box-icon>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center w-3/4 container-f-header-mobile">
        <div class="pt-8 w-full">
          <!-- header -->
          <el-row class="flex items-center">
            <el-col :span="12" class="flex items-center">
              <div class="image-logo-mobile">
                <nuxt-link :to="`/`">
                  <img
                    class="img-portada-mobile"
                    src="/images/LyaBook.svg"
                    width="40%"
                  />
                </nuxt-link>
              </div>
            </el-col>
            <el-col :span="12" class="flex justify-center items-center">
              <el-col :span="8" class="flex justify-center">
                <div class="enlaces-header-mobile">
                  <nuxt-link :to="`/libros/`">
                    <h1>Libros</h1>
                  </nuxt-link>
                </div>
              </el-col>
              <el-col :span="8" class="flex justify-center">
                <div class="icon-login-mobile">
                  <div>
                    <box-icon
                      name="user"
                      @click="showDrawerLogin = true"
                    ></box-icon>
                  </div>
                </div>
              </el-col>
              <el-col :span="8" class="flex justify-center">
                <div class="icon-shopping-cart-mobile">
                  <box-icon
                    name="cart"
                    animation="tada"
                    @click="showDrawer = true"
                  ></box-icon>
                </div>
              </el-col>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <div class="search-autocomplete-mobile flex justify-center pt-4">
                <el-autocomplete
                  v-model="state"
                  :fetch-suggestions="querySearchAsync"
                  placeholder="Busca un libro..."
                  @select="handleSelect"
                  class="input-search-autocomplete"
                ></el-autocomplete>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div v-show="showLogin" class="relative">
      <div
        class="absolute bottom-0 right-1/4 top-0.5 z-10 w-1/6 container-login-x"
      >
        <div class="container-login p-2 flex flex-col">
          <div v-show="showOpen">
            <nuxt-link :to="`/login`">
              <el-button class="w-full button-log">Iniciar Sesión</el-button>
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
              <el-button class="w-full button-log" @click="showLogin = false"
                >Mi cuenta</el-button
              >
            </nuxt-link>
            <a href="/cerrar-sesion">
              <el-button class="w-full button-log" @click="closeSeccion"
                >Cerrar Sección</el-button
              ></a
            >
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      title="Elegir método de pago:"
      :visible.sync="dialogPayment"
      width="30%"
      @open="openDialog"
      @close="closeDialog"
      class="dialog-container-payment"
    >
      <div class="cho-container" id="nodo"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogPayment = false">Cancel</el-button>
      </span>
    </el-dialog>

    <el-drawer
      title="I am the title"
      :visible.sync="showDrawer"
      :with-header="false"
      @open="openDrawer"
      class="relative drawer-product"
    >
      <p class="text-center title-drawer">Carrito</p>
      <div v-show="getbook.length != 0">
        <div
          class="productDrawer pb-4 px-8"
          v-for="(gb, index) of getbook"
          :key="gb"
        >
          <div class="flex">
            <div class="" style="width: 30%">
              <img class="" :src="gb.images_src[0]" />
            </div>
            <div class="pl-4" style="width: 65%">
              <div class="pb-2">
                <p class="name-drawer">{{ gb.name }}</p>
                <div class="flex items-center pt-2">
                  <p class="price price_before">S/.{{ gb.price_before }}</p>
                  <p class="price price_current pl-4">
                    S/.{{ gb.price_current }}
                  </p>
                </div>
              </div>
              <div v-show="gb.format == 'df'">
                <el-switch
                  v-model="gb.valueFormat"
                  active-color="#5E20E4"
                  inactive-color="#021639"
                  active-text="Físico"
                  inactive-text="Digital"
                >
                </el-switch>
              </div>
              <div
                v-show="gb.format == 'f' || gb.valueFormat == true"
                class="mt-2"
              >
                <el-input-number
                  class="input input_number input-number-drawer"
                  v-model="gb.cant"
                  controls-position="right"
                  :min="1"
                  :max="10"
                ></el-input-number>
              </div>
            </div>
            <div style="width: 5%">
              <box-icon
                name="trash"
                type="solid"
                color="#5e20e4"
                @click="DeleteElement(index)"
              ></box-icon>
            </div>
          </div>
        </div>

        <button
          id="btn_mercadoPago"
          @click="tobuy"
          class="
            absolute
            bottom-0
            w-full
            flex
            justify-center
            container-tobuy-drawer
          "
        >
          Comprar
        </button>
      </div>
      <div
        v-show="getbook.length == 0"
        class="
          h-full
          overflow-x-hidden overflow-y-hidden
          container-drawer-vacio
        "
      >
        <el-empty
          class="h-full justify-center items-center"
          description="Vacío"
        ></el-empty>
      </div>
    </el-drawer>

    <el-drawer
      title="I am the title"
      :visible.sync="showDrawerLogin"
      :with-header="false"
      direction="ltr"
      class="container-drawer-login"
    >
      <div class="container-data-drawer">
        <div v-show="showOpen">
          <nuxt-link :to="`/login`">
            <el-button class="w-full button-log">Iniciar Sesión</el-button>
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
            <el-button class="w-full button-log" @click="showDrawerLogin = false"
              >Mi cuenta</el-button
            >
          </nuxt-link>
          <a href="/cerrar-sesion">
            <el-button class="w-full button-log" @click="closeSeccion"
              >Cerrar Sección</el-button
            ></a
          >
        </div>
      </div>
    </el-drawer>

    <nuxt />
    <Footer />
    <!-- <div class="footer flex justify-center px-8">
      <div class="conatiner-footer flex flex-row justify-center w-3/4 py-8">
        <div class="container-column-1 w-1/5">
          <div class="container-contact-us">
            <p class="title-footer title-contact-us">Contacto</p>
            <div class="footer-data conatiner-telephone flex flex-row">
              <box-icon name="phone" color="#ffffff"></box-icon>
              <a href="tel:+51 993 583 805"
                ><p class="subtitle-footer number-phone">+51 993 583 805</p></a
              >
            </div>
            <div class="footer-data container-mail flex flex-row">
              <box-icon name="mail-send" color="#ffffff"></box-icon>
              <a href="mailto:atenciónalcliente@lyabook.com"
                ><p class="subtitle-footer direction-mail">
                  atenciónalcliente@lyabook.com
                </p></a
              >
            </div>
            <div class="footer-data conatiner-location flex flex-row">
              <box-icon name="location-plus" color="#ffffff"></box-icon>
              <p class="subtitle-footer location">
                Paseo de la República 5613- Miraflores. Lima, Perú
              </p>
            </div>
          </div>

          <div class="container-follow-us pt-16">
            <p class="title-footer title-follow-us">Síguenos</p>
            <div class="footer-data flex flex-row">
              <div class="">
                <box-icon
                  size="md"
                  name="facebook-circle"
                  type="logo"
                  color="#ffffff"
                ></box-icon>
              </div>
              <div class="px-2">
                <box-icon
                  size="md"
                  name="youtube"
                  type="logo"
                  color="#ffffff"
                ></box-icon>
              </div>
              <div class="">
                <box-icon
                  size="md"
                  name="instagram-alt"
                  type="logo"
                  color="#ffffff"
                ></box-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="container-column-2 w-1/5">
          <p class="title-footer title-my-account">Contacto</p>
          <div class="footer-data my-profile flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer profile">Mi Perfil</p></a
            >
          </div>
          <div class="footer-data favorite flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <NuxtLink to="/"
              ><p class="subtitle-footer favorite">Mis favoritos</p></NuxtLink
            >
          </div>
          <div class="footer-data orders flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer order">Mis órdenes</p></a
            >
          </div>
          <div class="footer-data us flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer us">Nosotros</p></a
            >
          </div>
          <div class="footer-data contact-us flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer contact-us">Contáctanos</p></a
            >
          </div>
        </div>
        <div class="container-column-3 w-1/5">
          <p class="title-footer title-category">Categorías</p>
          <div class="footer-data romance flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer romance">Romance</p></a
            >
          </div>
          <div class="footer-data comedy flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer comedy">Comedia</p></a
            >
          </div>
          <div class="footer-data mystery flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer mystery">Misterio</p></a
            >
          </div>
          <div class="footer-data footer-data terror flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer terror">Terror</p></a
            >
          </div>
          <div class="footer-data adventure flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer adventure">Aventura</p></a
            >
          </div>
        </div>
        <div class="container-column-4 w-1/5">
          <div class="container-medium">
            <p class="title-footer title-medium">Soporte</p>
            <div class="footer-data frequent-questions flex flex-row">
              <box-icon name="right-arrow" color="#ffffff"></box-icon>
              <a
                href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
                ><p class="subtitle-footer frequent-questions">
                  Preguntas frecuentes
                </p></a
              >
            </div>
            <div class="footer-data complaints-book flex flex-row">
              <box-icon name="right-arrow" color="#ffffff"></box-icon>
              <a
                href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
                ><p class="subtitle-footer complaints-book">
                  Libro de reclamaciones
                </p></a
              >
            </div>
            <div class="footer-data terms-and-conditions flex flex-row">
              <box-icon name="right-arrow" color="#ffffff"></box-icon>
              <a
                href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
                ><p class="subtitle-footer terms-and-conditions">
                  Términos y condiciones
                </p></a
              >
            </div>
            <div class="footer-data privacy-policies flex flex-row">
              <box-icon name="right-arrow" color="#ffffff"></box-icon>
              <a
                href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
                ><p class="subtitle-footer privacy-policies">
                  Políticas de privacidad
                </p></a
              >
            </div>
          </div>
          <div class="container-payment-methods pt-8">
            <p class="title-footer title-payment-methods">Métodos de pago</p>
            <div class="footer-data flex flex-row">
              <img
                class="payment-card"
                src="/images/metodo-de-pago-express.png"
              />
              <img
                class="payment-card"
                src="/images/metodo-de-pago-express.png"
              />
              <img
                class="payment-card"
                src="/images/metodo-de-pago-express.png"
              />
              <img
                class="payment-card"
                src="/images/metodo-de-pago-express.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div> -->
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
import Footer from '../components/layouts/footer'
export default {
  props: {
    src: {
      type: String,
    },
  },
  components: {
    Footer,
  },
  data() {
    return {
      showDrawer: false,
      getbook: '',
      cant: 0,
      cart: [],
      finalResult: [],
      showFormat: false,
      response_id: '',
      dialogPayment: false,
      showLogin: false,
      showOpen: true,
      showDrawerLogin: false,
      //--------------------------------------AUTOCOMPLETE----------------------------------
      links: [],
      state: '',
      timeout: null,
    }
  },
  methods: {
    // openDialogLogin(){

    // },
    openDrawer() {
      try {
        var local = localStorage.getItem('books')
        if (local != null) {
          this.getbook = JSON.parse(local)
        }
      } catch (error) {}
    },
    DeleteElement(position) {
      try {
        this.getbook.splice(position, 1)
        localStorage.setItem('books', JSON.stringify(this.getbook))
      } catch (error) {}
    },
    tobuy() {
      try {
        this.getbook.forEach((book) => {
          var change = false
          var type = ''
          if (book.format == 'df') {
            change = true
            if (book.valueFormat == null || book.valueFormat == false) {
              book.format = 'd'
              book.cant = 1
            } else {
              book.format = 'f'
            }
          }
          if (book.format == 'd') {
            type = book.type.digital.src
          } else {
            type = book.type.fisico.log + ' ' + book.type.fisico.lat
          }
          var books = {
            id: book.author,
            title: book.name,
            unit_price: book.price_current,
            quantity: book.cant,
            description: book.format,
            picture_url: book.images_src[0],
            category_id: type,
          }
          this.finalResult.push(books)
          if (change) {
            book.format = 'df'
          }
        })
        this.dialogPayment = true
      } catch {}
    },
    async openDialog() {
      try {
        const response = await this.$apidata({
          url: '/orders',
          method: 'post',
          data: this.finalResult,
        })
        if (response.data.data.status == 201) {
          this.response_id = response.data.id
          const mp = new MercadoPago(
            'TEST-32e01da3-6294-476b-adfd-004faa209766',
            {
              locale: 'es-AR',
            }
          )
          mp.checkout({
            preference: {
              id: this.response_id,
            },
            render: {
              container: '.cho-container',
              label: 'Mercado Pago',
            },
          })
          for (let i = this.finalResult.length; i > 0; i--) {
            this.finalResult.pop()
          }
        } else {
        }
      } catch (error) {
        console.log(error)
      }
    },
    closeDialog() {
      try {
        let nodo = document.getElementById('nodo')
        if (nodo.lastChild != null) {
          nodo.removeChild(nodo.lastChild)
        }
      } catch (error) {}
    },
    switchChange(value) {},

    closeSeccion() {
      this.$router.push('/cerrar-sesion')
    },
    //-------------------------------------AUTOCOMPLETE----------------------------------------------
    querySearchAsync(queryString, cb) {
      var links = this.links
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 0 * Math.random())
    },
    createFilter(queryString) {
      return (link) => {
        return link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      }
    },
    handleSelect(item) {
      this.$router.push('/libros/'+item.slug)
      this.state = ''
    },
    //-----------------------------------------------------------------------------------------------
  },
  async mounted() {
    var books = []
    var response = await this.$apidata({
      url: '/books/',
      method: 'get',
    })
    response.data.data.forEach((res) => {
      var book = {
        value: res.name,
        slug: res.slug,
      }
      books.push(book)
    })
    this.links = books
  },
  async created() {
    try {
      //--------------------------------------------USER
      var user = localStorage.getItem('user')
      if (user != null) {
        this.showOpen = false
      }
      //--------------------------------------------DRAWER
      var format = {
        valueFormat: false,
      }
      var local = localStorage.getItem('books')
      if (local != null) {
        this.getbook = JSON.parse(local)
      }
      this.getbook.forEach((book) => {
        this.getbook.push(Object.assign(book, format))
      })
    } catch (error) {}
  },
}
</script>

<style scoped>
.image-logo {
  width: 25%;
}
.search-autocomplete {
  display: flex;
  justify-content: center;
  width: 35%;
}
.input-search-autocomplete {
  width: 90%;
}
.enlaces-header {
  display: flex;
  justify-content: center;
  width: 10%;
}
.icon-login {
  display: flex;
  justify-content: center;
  width: 5%;
}
.icon-shopping-cart {
  display: flex;
  justify-content: center;
  width: 5%;
}
.editorial {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
}
.title {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 52px;
}
.author {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
}
.price-current {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 69px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.price-before {
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 43px;
  text-decoration-line: line-through;
  color: #7f7f7f;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.button-to-by {
  background: #5e20e4;
  border-color: #5e20e4;
  border-radius: 50px !important;
  width: 25rem;
  height: 4.5rem;
}
.text {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
}
.enlace-maps {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-decoration-line: underline;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.direction {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #5e20e4;
}
.footer {
  background: #021639;
}
.title-footer {
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 172%;
  color: #f9f9ff;
}
.subtitle-footer {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 172%;
  color: #ffffff;
  padding-left: 0.5rem;
}
.footer-data {
  padding-top: 2rem;
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
.location {
  width: 80%;
}
.container-tobuy-drawer {
  background: var(--primary);
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 70px;
  color: #ffffff;
}
.title-drawer {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 70px;
  color: var(--primary);
}
.name-drawer {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #000;
}
.price_before {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  -webkit-text-decoration-line: line-through;
  text-decoration-line: line-through;
  color: #7f7f7f;
}
.price_current {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #5e20e4;
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

@media (max-width: 640px) {
  .text-footer {
    font-size: 12px !important;
  }
}

@media (max-width: 380px) {
  .footer-author{
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (min-width: 1280px) {
  .img-portada {
    width: 40% !important;
  }
  .search-autocomplete {
    width: 35% !important;
  }
  .container-f-header {
    width: 75% !important;
  }
  .container-f-header-mobile {
    display: none;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1280px) {
  .img-portada {
    width: 40% !important;
  }
  .container-f-header-mobile {
    display: none;
  }
  /* .container-f-header{
    width: 100% !important;
  } */
}

@media screen and (min-width: 1280px) and (max-width: 1281px) {
  .container-f-header {
    width: 60% !important;
    /* width: 70% !important; */
  }
  .search-autocomplete {
    width: 60% !important;
  }
  .img-portada {
    width: 60% !important;
  }
}
@media screen and (min-width: 1270px) and (max-width: 1279px) {
  .container-f-header {
    width: 70% !important;
  }
  .search-autocomplete {
    width: 60% !important;
  }
  .img-portada {
    width: 60% !important;
  }
  .container-f-header-mobile {
    display: none;
  }
}
@media screen and (min-width: 1075px) and (max-width: 1270px) {
  .container-f-header {
    width: 80%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .search-autocomplete {
    width: 60%;
  }
  .img-portada {
    width: 60%;
  }
  .container-f-header-mobile {
    display: none;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1074px) {
  .container-f-header {
    width: 80% !important;
  }
  .search-autocomplete {
    width: 60%;
  }
  .img-portada {
    width: 60%;
  }
  .container-f-header-mobile {
    display: none;
  }
}

@media screen and (min-width: 830px) and (max-width: 1023px) {
  .container-f-header {
    width: 100%;
  }
  .search-autocomplete {
    width: 60%;
  }
  .img-portada {
    width: 60%;
  }
  .container-f-header-mobile {
    display: none;
  }
}

@media (max-width: 830px) {
  .container-f-header {
    display: none !important;
  }

  .container-f-header-mobile {
    display: block !important;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .search-autocomplete-mobile .input-search-autocomplete {
    width: 100% !important;
  }

  .img-portada-mobile {
    width: 80%;
  }
}

@media (max-width: 600px) {
  .img-portada-mobile {
    width: 80%;
  }
}

@media screen and (min-width: 1170px) and (max-width: 1270px) {
  .container-login-x {
    right: 19% !important;
  }
}
@media screen and (min-width: 935px) and (max-width: 1170px) {
  .container-login-x {
    right: 13% !important;
  }
}
@media screen and (min-width: 831px) and (max-width: 935px) {
  .container-login-x {
    right: 7% !important;
  }
}
@media (max-width: 830px) {
  .container-login-x {
    display: none;
  }
}

</style>
