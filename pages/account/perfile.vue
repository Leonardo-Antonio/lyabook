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
                                <div v-for="item of [2, 3, 4, 5, 6, 7, 8]" :key="item" class="pb-2">
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
                            </div>
                        </el-tab-pane>

                        <el-tab-pane label="Publcar Libros" class="tabOption">
                            <div class="ml-4">
                                <p class="title-account pb-2">Publcar Libros</p>
                            </div> 
                            <div class="container-tabs-public-book">
                                <el-tabs type="card" @tab-click="handleClick">
                                    <el-tab-pane class="tab1" label="Terminos y Condiciones">
                                        Terminos y Condiciones
                                    </el-tab-pane>

                                    <el-tab-pane class="tab2" label="Nuevo Libro">
                                        <div class="p-12 container-new-book">
                                            <div class="flex">
                                                <div class="w-3/5">
                                                    <div>
                                                        <p class="titulo-form-book">Nombre</p>
                                                        <el-input class="input mt-2"
                                                            placeholder="Nombre"
                                                            v-model="name"
                                                            clearable>
                                                        </el-input>
                                                    </div>
                                                </div>
                                                <div class="w-2/5 pl-12">
                                                    <div>
                                                        <p class="titulo-form-book">Categoría</p>
                                                        <el-select
                                                            class="input mt-2"
                                                            v-model="value_categoria"
                                                            multiple
                                                            filterable
                                                            allow-create
                                                            placeholder="">
                                                            <el-option
                                                            v-for="item in categoria"
                                                            :key="item.value"
                                                            :label="item.label"
                                                            :value="item.value">
                                                            </el-option>
                                                        </el-select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col w-full text_area_new_admin input mt-4	">
                                                    <!-- <span class="title_input">Resumen*</span> -->
                                                    <p class="titulo-form-book">Resumen</p>
                                                    <el-input
                                                        class="mt-2 inp-resumen"
                                                        type="textarea"
                                                        placeholder="Menos de 500 caracteristicas..."
                                                        maxlength="500"
                                                        show-word-limit
                                                        v-model="resumen"
                                                    >
                                                    </el-input>
                                            </div>

                                            <div class="mt-4">
                                                <p class="titulo-form-book">Imágenes</p>
                                            </div>
                                            <div>
                                                <el-upload
                                                class="mt-2"
                                                action="http://localhost:8001/api/v1/images?key=LyA1308_MORSAC25TQMor25_NNLiviN_SAkur4"
                                                list-type="picture-card"
                                                accept="image/png"
                                                :before-upload="beforeUpload"
                                                :on-preview="handlePictureCardPreview"
                                                :on-remove="handleRemove"
                                                :on-success="successImages"
                                                >
                                                <i class="el-icon-plus"></i>
                                                </el-upload>
                                                <el-dialog :visible.sync="dialogVisible">
                                                <img width="100%" :src="dialogImageUrl" alt="" />
                                                </el-dialog>
                                            </div>

                                            <div class="flex flex-col pt-4">
                                                <p class="info_text_md">
                                                    El formato de las imágenes deben de ser en JPG con una
                                                    resolución mínima de 1080x1080 px.
                                                </p>
                                                <span class="info_text_md">Peso max 500 KB</span>
                                            </div>

                                            <div class="upload_pdf mt-4	">
                                                <el-upload
                                                drag
                                                action="http://192.168.1.7:8001/api/v1/pdfs?key=LyA1308_MORSAC25TQMor25_NNLiviN_SAkur4"
                                                accept="application/pdf"
                                                :before-upload="beforeUploadPdf"
                                                :on-success="successPdf"
                                                multiple
                                                >
                                                <i class="el-icon-upload"></i>
                                                <div class="el-upload__text">
                                                    Suelta tu archivo aquí o <em>haz clic para cargar</em>
                                                </div>
                                                <!-- <div slot="tip" class="el-upload__tip">
                                                    Solo archivos pdf/ebug con un tamaño menor de 500kb
                                                </div> -->
                                                </el-upload>
                                            </div>

                                            <div class="flex mt-4">
                                                <div class="flex w-1/2 justify-center items-center">
                                                    <p class="w-1/2 titulo-form-book">Precio normal</p>
                                                    <el-input
                                                            class="w-1/2 input"
                                                            placeholder="Precio"
                                                            v-model="price_normal"
                                                            clearable>
                                                    </el-input>
                                                </div>
                                                <div class="w-1/2 flex justify-end items-center">
                                                    <el-button class="btn_readBook-public" type="primary">Publicar libro</el-button>
                                                </div>
                                            </div>

                                        </div>
                                    </el-tab-pane>
                                </el-tabs>
                            </div>      
                        </el-tab-pane>

                        <el-tab-pane label="Libros Publicados" class="tabOption">
                            <div class="ml-4">
                                <p class="title-account pb-2">Libros Publicados</p>
                            </div>
                            <div class="container-book-public">
                                <div v-for="item of [2]" :key="item" class="pb-2">
                                    <div class="container-bookPublic flex p-6 m-4">
                                        <div class="w-1/5">
                                            <img class="portada-book"
                                                src="/images/portada-la-corona.jpg"
                                            />
                                        </div>
                                        <div class="w-2/5 relative">
                                            <div class="w-1/2">
                                                <p class="title-primary">Autor: Pedro Lopez</p>
                                                <p class="title-book pt-4">La Selección</p>
                                            </div>
                                            <div class="w-1/2 absolute -bottom-0">
                                                <p class="title-primary">Categoria</p>
                                                <div class="flex pt-4">
                                                    <p class="name-category w-1/2">Romance</p>
                                                    <p class="name-category w-1/2 ml-4">Comedia</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-1/5"></div>
                                        <div class="w-2/5 flex flex-col justify-between items-end">
                                            <div class="flex">
                                                <p class="lb-fondo">50 kb</p>
                                                <p class="lb-fondo ml-4">PDF</p>
                                            </div>
                                            <div class="">
                                                <el-button class="btn_publicBook_Edit w-48 rounded-xl" type="primary">Editar</el-button>
                                            </div>
                                            <div class="">
                                                <el-button class="btn_publicBook_Delete w-48 rounded-xl" type="primary">Eliminar</el-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
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
/* publcar libros */

.container-tabs-public-book .el-tabs__header{
    width: 100%;
    padding-top: 0rem !important;
}
.container-tabs-public-book .el-tabs__header .el-tabs__nav{
    display: flex;
}

.container-tabs-public-book  .el-tabs{
    padding: 1rem;
}
.container-tabs-public-book .el-tabs__item{
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 10px !important;
    line-height: 16px;
    color: #000000;
    padding: .5rem 2rem .5rem 2rem !important;
}
.container-tabs-public-book .el-tabs__nav  .is-active{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 10px !important;
    line-height: 16px;
    color: #fff !important;
    background: #5E20E4;
}
.container-tabs-public-book .el-tabs__nav  .is-active:hover{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 10px !important;
    line-height: 16px;
    color: #fff !important;
}
.container-tabs-public-book .el-tabs--card>.el-tabs__header .el-tabs__nav{
    border: 1px solid #5E20E4;
}

.container-tabs-public-book .el-upload-dragger{
    border-color: #5E20E4;
    border-width: 1px;
}
.container-tabs-public-book .el-upload--picture-card{
    border-color: #5E20E4;
    border-width: 1px;
}
.container-tabs-public-book  .el-upload-dragger .el-icon-upload{
    color: #5E20E4;
}

.container-tabs-public-book  .el-upload-dragger .el-upload__text > em{
    color: #5E20E4;
}

.container-tabs-public-book .el-select .el-input__inner{
    padding: 1.4rem 4rem;
}

.container-tabs-public-book .btn_readBook-public{   
    width: 90%;
    height: 100%;
    background: #5E20E4;
    border-color: #5E20E4;
    border-radius: 50px;
}

.container-new-book{
    border: solid 1px #5E20E4;
    border-radius: 4px;
}

.titulo-form-book{
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 21px;
    color: #000000;
}

.container-new-book .input .el-input__inner::placeholder{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 21px;
    color: #A6A6A6;
}

.container-new-book  .inp-resumen ::placeholder{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 21px;
    color: #A6A6A6;
}
/* libros publicados */
.container-bookPublic{
    border: solid 1px #194B9F;
    border-radius: 7px;
}
.lb-fondo{
    background: #F9F9FF;
    border-radius: 7px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    padding: .5rem;
}
.btn_publicBook_Edit{
    background: #021639;
    color: #F9F9FF;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    border-color: #021639;
}

.btn_publicBook_Edit:hover{
    background: #5E20E4;
    border-color: #5E20E4;
}

.btn_publicBook_Delete{
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    border-color: #021639;
    color: #021639;
    background: #fff;
    border-width: 2px;
}

.btn_publicBook_Delete:hover{
    border-color: #5E20E4;
    color: #5E20E4;
    background: #fff;
}

</style>