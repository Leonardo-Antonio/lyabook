<template>
  <div>
    <div class="flex justify-center">
      <img
        src="/shapes/doble-cuadrado-left.svg"
        class="absolute z-10 doble-cuadrado-left"
        style="width: 20rem; left: 0rem; bottom: 0rem"
      />
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
        <div class="mt-4 container-desktop">
          <el-tabs :tab-position="tabPosition" style="height: 200px">
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

            <el-tab-pane label="Publcar Libros" class="tabOption">
              <div class="ml-4">
                <p class="title-account pb-2">Publcar Libros</p>
              </div>
              <div class="container-tabs-public-book">
                <el-tabs type="card" @tab-click="handleClick">
                  <el-tab-pane class="tab1" label="Terminos y Condiciones">
                    <div>
                      si acepta los terminos y condiciones se monetisara el
                      libro registrado, pero el 50% de la ganancia lo ganara la
                      empresa y el 50% el usuario. si no acepta los terminos y
                      condiciones, no tendra la opción el usuario de agregar un
                      precio y será gratis el libro.
                    </div>
                  </el-tab-pane>

                  <el-tab-pane class="tab2" label="Nuevo Libro">
                    <NewBook />
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-tab-pane>

            <el-tab-pane label="Libros Publicados" class="tabOption">
              <div class="ml-4">
                <p class="title-account pb-2">Libros Publicados</p>
              </div>
              <BookPublic />
            </el-tab-pane>
            <el-tab-pane label="Cerrar Sesión" class="tabOption"
              >Cerrar Sesión</el-tab-pane
            >
          </el-tabs>
        </div>
        <div class="mt-4 container-response">
          <el-tabs tab-position="top" style="height: 200px">
            <el-tab-pane>
              <span slot="label"><box-icon name='user' color='#021639' ></box-icon></span>
              <Profile />
            </el-tab-pane>

            <el-tab-pane>
              <span slot="label"><box-icon name='purchase-tag-alt' color='#021639'></box-icon></span>
              <MyOrder />
            </el-tab-pane>

            <el-tab-pane>
              <span slot="label"><box-icon name='book-reader' color='#021639' ></box-icon></span>
              <div class="ml-4">
                <p class="title-account pb-2">Mis Libros</p>
              </div>
              <MyBook />
            </el-tab-pane>

            <el-tab-pane>
              <span slot="label"><box-icon name='book-add' color='#021639'></box-icon></span>
              <div class="ml-4">
                <p class="title-account pb-2">Publcar Libros</p>
              </div>
              <div class="container-tabs-public-book">
                <el-tabs type="card" @tab-click="handleClick" class="conatiner-tabs">
                  <el-tab-pane class="tab1" label="Terminos y Condiciones">
                    <div>
                      si acepta los terminos y condiciones se monetisara el
                      libro registrado, pero el 50% de la ganancia lo ganara la
                      empresa y el 50% el usuario. si no acepta los terminos y
                      condiciones, no tendra la opción el usuario de agregar un
                      precio y será gratis el libro.
                    </div>
                  </el-tab-pane>

                  <el-tab-pane class="tab2" label="Nuevo Libro">
                    <NewBook />
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-tab-pane>

            <el-tab-pane>
              <span slot="label"><box-icon name='book' color='#021639' ></box-icon></span>
              <div class="ml-4">
                <p class="title-account pb-2">Libros Publicados</p>
              </div>
              <BookPublic />
            </el-tab-pane>
            <el-tab-pane><span slot="label"><box-icon type='solid' name='exit' color='#021639'></box-icon></span></el-tab-pane
            >
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
    }
  },
  methods: {
    //tabs publicar libro
    handleClick(tab, event) {
      console.log(tab, event)
    },
  },
  created() {
    var user = localStorage.getItem('user')
    if (user != null) {
      this.user = JSON.parse(user).user
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
  .container-desktop{
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
  
  .container-desktop{
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
  .container-desktop{
    display: none;
  }
}

/* DESKTOP */
@media only screen and (min-width: 1400px) {
  .container-response{
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

</style>
