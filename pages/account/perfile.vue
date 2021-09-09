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
                            <div class="ml-4">
                                <p class="title-account pb-2">Perfil</p>
                            </div>
                            <div class="flex"> 
                                <div class="container-perfile p-12 m-4 w-3/5">
                                    <div class="flex">                                
                                        <div class="cp-1">
                                            <div>
                                                <p class="text-title">Nombre</p>
                                                <p class="text-p mt-2">Pedro</p>
                                            </div>
                                            <div class="mt-8">
                                                <p class="text-title">Email</p>
                                                <p class="text-p mt-2">pedrolopez@gmail.com</p>
                                            </div>
                                            <div class="mt-8">
                                                <p class="text-title">DNI</p>
                                                <p class="text-p mt-2">12345678</p>
                                            </div>
                                            <div class="mt-8">
                                                <p class="text-title">Fecha de nacimiento</p>
                                                <p class="text-p mt-2">12 de enero 1996</p>
                                            </div>
                                        </div>
                                        <div class="cp-2">
                                            <div>
                                                <p class="text-title">Apellido</p>
                                                <p class="text-p mt-2">Lopez</p>
                                            </div>
                                            <div class="space">

                                            </div>
                                            <div class="mt-8">
                                                <p class="text-title">Género</p>
                                                <p class="text-p mt-2">Masculino</p>
                                            </div>
                                            <div class="mt-8">
                                                <p class="text-title">Celular</p>
                                                <p class="text-p mt-2">999 999 999</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container-button-edit">
                                        <el-button class="btn_add_size button-to-by btn-edit" type="primary" round>Editar</el-button>
                                    </div>
                                </div>

                                <div class="w-2/5">
                                    <div class="container-password p-12 m-4 ">
                                        <p class="text-title">Contraseña</p>
                                        <p class="text-p mt-2">Usted todavía no tiene una contraseña definida</p>
                                        <div class="container-btn-password flex justify-end">
                                            <el-button class="btn_add_size button-to-by btn-password" type="primary" round>Definir Contraseña</el-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="Mis Libros" class="tabOption">
                            <div class="ml-4">
                                <p class="title-account pb-2">Mis Libros</p>
                            </div>
                            <div class="flex"> 
                                <div class="container-my-books p-6 m-4 w-full">
                                    <div class="flex">
                                        <div class="w-1/5">
                                            <img class="portada-book"
                                                src="/images/portada-la-corona.jpg"
                                            />
                                        </div>
                                        <div class="container-star">
                                            <div class="h-1/2">
                                                <p class="title-primary">Autor: Kiera Cass</p>
                                                <p class="title-book pt-4">Memory - Lyabook</p>
                                            </div>
                                            <div class="h-1/2 pt-4">
                                                <p class="title-primary">Categoria</p>
                                                <!-- <div v-for="item of [2, 3, 4, 5, 6, 7, 8]" :key="item" class="pl-4 pb-8"></div> -->
                                                <div class="flex pt-4">
                                                    <p class="name-category w-1/2">Romance</p>
                                                    <p class="name-category w-1/2">Comedia</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-1/4">
                                            <div>
                                                <p class="title-primary">Estrellas:</p>
                                            </div>
                                            <div class="block pt-4 start-container">
                                                <el-rate v-model="value1"></el-rate>
                                            </div>
                                        </div>
                                        <div class="w-1/4 flex justify-end">
                                            <div class="relative h-full">
                                                <div class="">
                                                    <p class="fecha p-2	px-6">6 de Agosto del 2020</p>
                                                </div>
                                                <div class="absolute -bottom-0 right-px">
                                                    <a href="#" class="p-comentary">Ver comentarios</a>
                                                    <el-button class="btn_readBook" type="primary" >Leer Libro</el-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="Publcar Libros" class="tabOption">Publcar Libros</el-tab-pane>
                        <el-tab-pane label="Libros Publicados" class="tabOption">Libros Publicados</el-tab-pane>
                        <el-tab-pane label="Cerrar Sesión" class="tabOption">Cerrar Sesión</el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'client',
    data () {
      return {
        // image perfile
        circleUrl: "/images/icon_user.png",
        // tabs main position
        tabPosition: 'left'
      }
    }
}
</script>
<style>
.el-tabs--left{
    height: auto !important;
}
.container-perfile{
    border: solid 1px #194B9F;
    border-radius: 10px;
}
.container-password{
    border: solid 1px #194B9F;
    border-radius: 10px;
}
.container-account .el-tabs--left .el-tabs__item.is-left{
    text-align: left !important;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}
.el-tabs--left .el-tabs__active-bar.is-left, .el-tabs--left .el-tabs__nav-wrap.is-left::after {
    right: auto;
    left: 0;
    width: .4rem;
}

.container-account .el-tabs__active-bar{
    background: #021639;
}
.btn-edit {
    background: unset;
    border: unset;
    padding: 2rem 0 0 0 !important;
}
.btn-edit:hover {
    background: unset;
    border: unset;
}
.btn-edit > span{
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    text-decoration-line: underline;
    color: #021639;
}
.btn-password{
    background: unset;
    border: unset;
    padding: 2rem 0 0 0 !important;
}
.btn-password:hover{
    background: unset;
    border: unset;
}
.btn-password > span{
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    text-decoration-line: underline;
    color: #021639;
}
.text-title{
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #2E374A;
}
.text-p{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #696969;
}
.container-button-edit{
    display: flex;
    justify-content: flex-end;
}
.space{
    margin-bottom: 6.6rem;
}
.cp-1{
    width: 55%;
}
.cp-2{
    width: 45%;
}
.title-account{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #021639;
}
.container-account .el-tabs--left .el-tabs__nav-scroll .el-tabs__nav > div{
    display: flex;
    align-items: center;
}
.container-account .el-tabs--left .el-tabs__nav-scroll .el-tabs__nav .is-active{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #021639;
}
.container-account .el-tabs--left .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item{
    border-bottom: 1px solid #DEDEDE;
    padding: 2rem;
}
.container-account .el-tabs__header{
    width: 20%;
}
.welcome{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #7F7F7F;
}
.nameUser{
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;

    color: #000000;
}
.container-account  .el-tabs__header{
    padding-top: 3rem;
}

.el-button--primary.is-active, .el-button--primary:active{
    background: unset;
    border-color: unset;
}
.title-primary{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #7F7F7F;
}
.title-book{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 19px;
    color: #021639;
}
.name-category{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #021639;
}

.fecha{
    background: #F9F9FF;
    font-size: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    color: #021639;
    border-radius: 7px;
}
.btn_readBook{
    background: #5E20E4;
    border-color: #5E20E4;
    width: 10rem;
    margin-top: 2rem !important;
}
.portada-book{
    height: 10rem;
    border-radius: 10px;
}
.start-container .el-rate__icon{
    font-size: 25px;
}
.container-my-books{
    border: solid 1px #194B9F;
    border-radius: 7px;
}
.p-comentary{
    margin-left: 3.5rem !important;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #021639;
}
.container-star{
    width: 30%;
}

</style>