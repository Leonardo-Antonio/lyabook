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
                        <el-tab-pane label="Mis Libros" class="tabOption">Mis Libros</el-tab-pane>
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
</style>