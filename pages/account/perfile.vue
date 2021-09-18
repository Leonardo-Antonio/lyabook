<template>
    <div>
        <div class="flex justify-center">
            <div class="container-account w-3/5 flex justify-center flex-col my-16">
                <div class="flex items-center">
                    <div class="demo-basic--circle mr-2">
                        <div class="block"><el-avatar :size="60" :src="circleUrl"></el-avatar></div>
                        <div class="block" v-for="size in sizeList" :key="size">
                        <el-avatar :size="size" :src="circleUrl"></el-avatar>
                        </div>
                    </div>
                    <div>
                        <p class="welcome">Bienvenido a Lyabook</p>
                        <p class="nameUser">Pedro Lopez</p>
                    </div>
                </div>
                <div class="mt-4">
                    <el-tabs :tab-position="tabPosition" style="height: 200px;">
                        <el-tab-pane label="Perfil" class="tabOption">
                            <Profile/>
                        </el-tab-pane>

                        <el-tab-pane label="Mis Libros" class="tabOption">
                            <div class="ml-4">
                                <p class="title-account pb-2">Mis Libros</p>
                            </div>
                            <MyBook/>
                        </el-tab-pane>

                        <el-tab-pane label="Publcar Libros" class="tabOption">
                            <div class="ml-4">
                                <p class="title-account pb-2">Publcar Libros</p>
                            </div> 
                            <div class="container-tabs-public-book">
                                <el-tabs type="card" @tab-click="handleClick">
                                    <el-tab-pane class="tab1" label="Terminos y Condiciones">
                                        <div>
                                            si acepta los terminos y  condiciones se monetisara el libro registrado, pero el 50% de la ganancia
                                            lo ganara la empresa y el 50% el usuario.
                                            si no acepta los terminos y condiciones, no tendra la opción el usuario de agregar un precio y será gratis el libro.
                                        </div>
                                    </el-tab-pane>

                                    <el-tab-pane class="tab2" label="Nuevo Libro">
                                        <NewBook/>
                                    </el-tab-pane>
                                </el-tabs>
                            </div>      
                        </el-tab-pane>

                        <el-tab-pane label="Libros Publicados" class="tabOption">
                            <div class="ml-4">
                                <p class="title-account pb-2">Libros Publicados</p>
                            </div>
                            <BookPublic/>
                        </el-tab-pane>
                        <el-tab-pane label="Cerrar Sesión" class="tabOption">Cerrar Sesión</el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Profile from '../../components/account/profile/profile'
import NewBook from '../../components/account/public-book/new-book'
import MyBook from '../../components/account/my-book/my-book'
import BookPublic from '../../components/account/book-public/book-public'
export default {
    layout: 'client',
    components: {
        Profile,
        NewBook,
        MyBook,
        BookPublic
    },
    data () {
      return {
        // image perfile
        circleUrl: "/images/icon_user.png",
        // tabs main position
        tabPosition: 'left',
        //tabs publicar libro
         activeName: 'first',
        //form name
         name:'',
        //form categoria
          categoria: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value_categoria: '',
      }
    },
    methods: {
      //tabs publicar libro
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
