<template>
  <div>
    <div class="flex justify-center">
      <!-- <img
        src="/shapes/doble-cuadrado-left.svg"
        class="absolute z-10 doble-cuadrado-left"
        style="width: 20rem; left: 0rem; bottom: 0rem"
      /> -->
      <div class="container-account w-3/5 flex justify-center flex-col mt-16">
        <div class="flex items-center">
          <div class="demo-basic--circle mr-2">
            <div class="block">
              <el-avatar :size="60" :src="circleUrl"></el-avatar>
            </div>
            <div class="block" v-for="size in sizeList" :key="size">
              <el-avatar :size="size" :src="circleUrl"></el-avatar>
            </div>
          </div>
          <div>
            <p class="welcome">Bienvenido a Lyabook</p>
            <p class="nameUser">{{ this.user.name }}</p>
          </div>
        </div>
        <div class="mt-4 container-desktop mb-12">
          <el-tabs
            v-model="editableTabsValue"
            :tab-position="tabPosition"
            style="height: 200px"
            @tab-click="handleClick"
          >
            <el-tab-pane label="Perfil" class="tabOption">
              <Profile />
            </el-tab-pane>

            <el-tab-pane label="Mis Ordenes" class="tabOption">
              <MyOrder />
            </el-tab-pane>

            <el-tab-pane label="Mis Libros" class="tabOption">
              <div class="ml-4">
                <p class="title-account pb-2">Mis Libros</p>
              </div>
              <MyBook />
            </el-tab-pane>

            <el-tab-pane label="Publcar Textos" class="tabOption">
              <div class="ml-4">
                <p class="title-account pb-2">Publcar Textos</p>
              </div>
              <div class="container-tabs-public-book">
                <el-tabs
                  type="card"
                  v-model="tabsPublic"
                  @tab-click="handleClickPublic"
                >
                  <el-tab-pane class="tab1" label="Términos y Condiciones">
                    <div>
                      <p class="par-ter">
                        Algunos de los servicios permiten que usted nos
                        proporcione información directamente. Por ejemplo:
                      </p>
                      <p class="par-ter par-ter-lis">
                        - Al momento en que usted cree su cuenta y cuando acceda
                        a dicha cuenta una vez creada, podremos necesitar su
                        nombre de usuario, dirección de correo electrónico.
                      </p>
                      <p class="par-ter par-ter-lis">
                        - Cuando usted se comunique con nuestro personal,
                        incluyendo el libro de reclamaciones, sus comunicaciones
                        serán transmitidas a través de nuestros sistemas a
                        través de su dirección de correo electrónico.
                      </p>
                      <p class="par-ter par-ter-etiqueta py-2">
                        [Para Creadores]
                      </p>
                      <p class="par-ter par-ter-lis">
                        - Se debe tomar en cuenta que este medio es para poder
                        dar a conocer su talento, por lo tanto tendrá la opción
                        de publicar novelas, poemas, textos narrativos, etc. Sin
                        embargo, no será monetizado.
                      </p>
                    </div>
                    <div>
                      <el-row class="par-ter mt-4">
                        <div class="flex items-center" v-show="value_accept">
                          <el-button class="btn_dis_ter" @click="accept"
                            ><box-icon
                              name="shield-alt-2"
                              type="solid"
                              color="#5e20e4"
                              class="mr-2"
                            ></box-icon
                          ></el-button>
                          Acepto los términos y condiciones de LyaBook
                        </div>
                        <div class="flex items-center" v-show="!value_accept">
                          <el-button class="btn_dis_ter" disabled
                            ><box-icon
                              name="shield-alt-2"
                              type="solid"
                              color="#5e20e4"
                              class="mr-2"
                            ></box-icon
                          ></el-button>
                          Se aceptaron los términos y condiciones de LyaBook
                        </div>
                      </el-row>
                    </div>
                  </el-tab-pane>

                  <el-tab-pane class="tab2" label="Nuevo Texto">
                    <NewBook />
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-tab-pane>

            <el-tab-pane label="Textos Publicados" class="tabOption">
              <div class="ml-4">
                <p class="title-account pb-2">Textos Publicados</p>
              </div>
              <BookPublic />
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="mt-4 container-response">
          <el-tabs
            v-model="editableTabsValue"
            tab-position="top"
            style="height: 200px"
            @tab-click="handleClick"
          >
            <el-tab-pane>
              <span slot="label"
                ><box-icon name="user" color="#021639"></box-icon
              ></span>
              <Profile />
            </el-tab-pane>

            <el-tab-pane>
              <span slot="label"
                ><box-icon name="purchase-tag-alt" color="#021639"></box-icon
              ></span>
              <MyOrder />
            </el-tab-pane>

            <el-tab-pane>
              <span slot="label"
                ><box-icon name="book-reader" color="#021639"></box-icon
              ></span>
              <div class="ml-4">
                <p class="title-account pb-2">Mis Libros</p>
              </div>
              <MyBook />
            </el-tab-pane>

            <el-tab-pane>
              <span slot="label"
                ><box-icon name="book-add" color="#021639"></box-icon
              ></span>
              <div class="ml-4">
                <p class="title-account pb-2">Publcar Libros</p>
              </div>
              <div class="container-tabs-public-book">
                <el-tabs type="card" class="conatiner-tabs">
                  <el-tab-pane class="tab1" label="Términos y Condiciones">
                    <div class="mb-4">
                      <p class="par-ter">
                        Algunos de los servicios permiten que usted nos
                        proporcione información directamente. Por ejemplo:
                      </p>
                      <p class="par-ter par-ter-lis">
                        - Al momento en que usted cree su cuenta y cuando acceda
                        a dicha cuenta una vez creada, podremos necesitar su
                        nombre de usuario, dirección de correo electrónico.
                      </p>
                      <p class="par-ter par-ter-lis">
                        - Cuando usted se comunique con nuestro personal,
                        incluyendo el libro de reclamaciones, sus comunicaciones
                        serán transmitidas a través de nuestros sistemas a
                        través de su dirección de correo electrónico.
                      </p>
                      <p class="par-ter par-ter-etiqueta py-2">
                        [Para Creadores]
                      </p>
                      <p class="par-ter par-ter-lis">
                        - Se debe tomar en cuenta que este medio es para poder
                        dar a conocer su talento, por lo tanto tendrá la opción
                        de publicar novelas, poemas, textos narrativos, etc. Sin
                        embargo, no será monetizado.
                      </p>
                    </div>
                    <div>
                      <el-row class="par-ter mt-4">
                        <div class="flex items-center" v-show="value_accept">
                          <el-button class="btn_dis_ter" @click="accept"
                            ><box-icon
                              name="shield-alt-2"
                              type="solid"
                              color="#5e20e4"
                              class="mr-2"
                            ></box-icon
                          ></el-button>
                          Acepto los términos y condiciones de LyaBook
                        </div>
                        <div class="flex items-center" v-show="!value_accept">
                          <el-button class="btn_dis_ter" disabled
                            ><box-icon
                              name="shield-alt-2"
                              type="solid"
                              color="#5e20e4"
                              class="mr-2"
                            ></box-icon
                          ></el-button>
                          Se aceptaron los términos y condiciones de LyaBook
                        </div>
                      </el-row>
                    </div>
                  </el-tab-pane>

                  <el-tab-pane class="tab2" label="Nuevo Libro">
                    <NewBook />
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-tab-pane>

            <el-tab-pane>
              <span slot="label"
                ><box-icon name="book" color="#021639"></box-icon
              ></span>
              <div class="ml-4">
                <p class="title-account pb-2">Libros Publicados</p>
              </div>
              <BookPublic />
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <ImageHeader
      class="doble-cuadrado-mi-cuenta"
      src="/shapes/doble-cuadrado-mi-cuenta.png"
    />
  </div>
</template>
<script>
import ImageHeader from '../../layouts/client-image'
import Profile from '../../components/account/profile/profile'
import NewBook from '../../components/account/public-book/new-book'
import MyBook from '../../components/account/my-book/my-book'
import BookPublic from '../../components/account/book-public/book-public'
import MyOrder from '../../components/account/my-order/my-order'

export default {
  layout: 'client',
  components: {
    Profile,
    NewBook,
    MyBook,
    BookPublic,
    ImageHeader,
    MyOrder,
  },
  data() {
    return {
      tabsPublic: '0',
      editableTabsValue: '0',
      // image perfile
      circleUrl: '/images/icon_user.png',
      // tabs main position
      tabPosition: 'left',
      //tabs publicar libro
      activeName: 'first',
      //form name
      name: '',
      //form categoria
      categoria: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ],
      value_categoria: '',
      //----------------------------------------------Variables
      user: [],
      //---------------------------------------------Posición de tab
      posicTab: '',
      value_accept: true,
    }
  },
  methods: {
    accept() {
      try {
        localStorage.setItem('condicion', JSON.stringify({ condicion: false }))
        window.location.reload(true)
      } catch (error) {
        this.$message({
          message:
            'No se pudo aceptar correctamente los términos y condiciones.',
          type: 'error',
        })
      }
    },
    // handleClickPublic(tab, event){
    //   if(tab.index == 1){
    //     console.log(tab.index)
    //     this.tabsPublic = '0'

    //   }
    // },
    //tabs publicar libro
    handleClick(tab, event) {
      if (tab.index == '0') {
        this.posicTab = '0'
      } else if (tab.index == '1') {
        this.posicTab = '1'
      } else if (tab.index == '2') {
        this.posicTab = '2'
      } else if (tab.index == '3') {
        this.posicTab = '3'
      } else if (tab.index == '4') {
        this.posicTab = '4'
      }
      this.editableTabsValue = this.posicTab
      localStorage.setItem('tab', JSON.stringify({ position: this.posicTab }))
      if (this.posicTab == 4) {
        window.location.reload(true)
      }
    },
  },
  created() {
    try {
      var user = localStorage.getItem('user')
      if (user != null) {
        this.user = JSON.parse(user).user
        if (this.user.rol != 'Client') {
          this.$router.push('/errors/403')
        }
        //----------------------------------------
        var value = JSON.parse(localStorage.getItem('tab')).position
        if (value != null || value != undefined) {
          this.editableTabsValue = value
        }
        //----------------------------------------
        var condicion = localStorage.getItem('condicion')
        if (condicion != null) {
          var termino = JSON.parse(condicion).condicion
          if (!termino) {
            this.value_accept = false
          }
        }
      } else {
        this.$router.push('/login')
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
<style scoped>
/* MOBILE */
@media only screen and (max-width: 641px) {
  .container-account {
    width: 90% !important;
  }
  .doble-cuadrado-left {
    display: none;
  }

  .doble-cuadrado-mi-cuenta {
    display: none;
  }
  .container-desktop {
    display: none;
  }
  /* .container-response .el-tabs{
    display: flex;
    flex-direction: column-reverse;
  } */
}
/* TABLET */
@media screen and (min-width: 640px) and (max-width: 1025px) {
  .container-account {
    width: 90% !important;
  }

  .doble-cuadrado-left {
    display: none;
  }

  .doble-cuadrado-mi-cuenta {
    display: none;
  }

  .container-desktop {
    display: none;
  }
}
/* SUB TABLET */
@media screen and (min-width: 1025px) and (max-width: 1270px) {
  .doble-cuadrado-left {
    display: none;
  }

  .doble-cuadrado-mi-cuenta {
    display: none;
  }
  .container-account {
    width: 90% !important;
  }
}
/* SUB DESKTOP */
@media screen and (min-width: 1024px) and (max-width: 1399px) {
  .container-desktop {
    display: none;
  }
}

/* DESKTOP */
@media only screen and (min-width: 1400px) {
  .container-response {
    display: none;
  }
}

/* EXTRA */
@media screen and (min-width: 1269px) and (max-width: 1630px) {
  .doble-cuadrado-left {
    display: none;
  }

  .doble-cuadrado-mi-cuenta {
    display: none;
  }
}
.par-ter {
  font-family: Roboto;
  font-style: normal;
  font-size: 16px;
}
.par-ter-lis {
  color: var(--resaltado);
}
.btn_dis_ter {
  padding: 0;
  border: unset;
}
.btn_dis_ter:hover {
  background: unset;
}
</style>
