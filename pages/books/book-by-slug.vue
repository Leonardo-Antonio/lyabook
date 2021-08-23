<template>
    <div>
        <div class="flex justify-center container mx-auto">
            <div class="flex justify-center w-3/4">
                <div class="pt-8 w-full">
                    <!-- header -->
                    <div class="flex items-center justify-center">
                        <div class="image-logo">
                            <img
                                src="/images/LyaBook.svg"
                                width="40%"
                            />
                        </div>
                        <div class="search-autocomplete">
                            <el-autocomplete
                                v-model="state"
                                :fetch-suggestions="querySearchAsync"
                                placeholder="Please input"
                                @select="handleSelect"
                                class="input-search-autocomplete"
                                style="border-color: #021639 !important;"
                            ></el-autocomplete>
                        </div>
                        <div class="enlaces-header">
                            <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><h1>Libros</h1></a>

                        </div>
                        <div class="enlaces-header">
                            <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><h1>Promociones</h1></a>

                        </div>
                        <div class="icon-login">
                            <box-icon name='user' ></box-icon>
                        </div>
                        <div class="icon-shopping-cart">
                            <box-icon name='cart' animation='tada' ></box-icon>
                        </div>
                    </div>

                    <!-- container product  -->
                    <div class="flex flex-row pt-20">
                        <div class="w-2/4 flex items-center justify-center">
                            <img
                                src="/images/portada-la-corona.jpg"
                                width="500px"
                                height="800px"
                            />
                
                        </div>
                        <div class="w-2/4 flex justify-center">
                            <div class="conatiner-detail-product">
                                <p class="editorial">HarperCollins</p>
                                <p class="title">LA SELECCIÓN - LA CORONA</p>
                                <p class="author pt-4">Autor: Kiera Cass</p>
                                <div class="star pt-4">
                                    <div class="block">
                                        <el-rate v-model="value1"></el-rate>
                                    </div>
                                </div>
                                <div class="container-price flex flex-row pt-4">
                                    <div class="container-price-current w-1/2">
                                        <p class="price-current">s/.30.00</p>
                                    </div>
                                    <div class="container-price-before flex items-center w-1/2">
                                        <p class="price-before">s/.100.00</p>
                                    </div>
                                </div>
                                <div class="container-select-format pt-4">
                                    <el-select v-model="value" clearable placeholder="Select">
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="container-maps flex flex-row items-center pt-4">
                                    <div class="conatiner-text w-1/2">
                                        <p class="text">Recoger en:</p>
                                    </div>
                                    <div class="conatiner-enlace-maps w-1/2 flex justify-end">
                                        <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="enlace-maps">Ver en Google Maps</p></a>
                                    </div>
                                </div>
                                <div class="container-direction pt-2">
                                    <p class="direction">Calle 8, Cercado de Lima 15828</p>
                                </div>
                                <div class="container-button-to-buy pt-8">
                                    <el-row>
                                        <el-button class="btn_add_size button-to-by" type="primary" round>COMPRAR</el-button>
                                    </el-row>
                                </div>
                            </div>

                        </div>

                    </div>

                    <!-- container tabs -->
                    <div class="conatiner-tabs px-8 py-12">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="Descripción" name="first">Descripción</el-tab-pane>
                            <el-tab-pane label="Comentarios" name="second">Comentarios</el-tab-pane>
                            <el-tab-pane label="Detalle" name="third">Detalle</el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer flex justify-center px-8">
            <div class="conatiner-footer flex flex-row justify-center w-3/4 py-8">
                <div class="container-column-1 w-1/5">
                    <div class="container-contact-us">
                        <p class="title-footer title-contact-us">Contacto</p>
                        <div class="footer-data conatiner-telephone flex flex-row">
                            <box-icon name='phone' color='#ffffff' ></box-icon>
                            <p class="subtitle-footer  number-phone">+51 993 583 805</p>
                        </div>
                        <div class="footer-data container-mail flex flex-row">
                            <box-icon name='mail-send' color='#ffffff' ></box-icon>
                            <p class="subtitle-footer direction-mail">atenciónalcliente@lyabook.com</p>
                        </div>
                        <div class="footer-data conatiner-location flex flex-row">
                            <box-icon name='location-plus' color='#ffffff' ></box-icon>
                            <p class="subtitle-footer  location">Paseo de la República 5613- Miraflores. Lima, Perú</p>
                        </div>
                    </div>

                    <div class="container-follow-us pt-16"> 
                        <p class="title-footer title-follow-us">Síguenos</p>
                        <div class="footer-data flex flex-row">
                            <box-icon name='facebook-circle' type='logo' color='#ffffff' ></box-icon>
                            <box-icon name='youtube' type='logo' color='#ffffff' ></box-icon>
                            <box-icon name='instagram-alt' type='logo' color='#ffffff' ></box-icon>
                        </div>
                    </div>
                    
                </div>
                <div class="container-column-2 w-1/5">
                    <p class="title-footer title-my-account">Contacto</p>
                    <div class="footer-data my-profile flex flex-row">
                        <box-icon name='right-arrow' color='#ffffff'></box-icon>
                        <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="subtitle-footer profile">Mi Perfil</p></a>
                    </div>
                    <div class="footer-data favorite flex flex-row">
                        <box-icon name='right-arrow' color='#ffffff'></box-icon>
                        <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="subtitle-footer favorite">Mis favoritos</p></a>
                    </div>
                    <div class="footer-data orders flex flex-row">
                        <box-icon name='right-arrow' color='#ffffff'></box-icon>
                        <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="subtitle-footer order">Mis órdenes</p></a>
                    </div>
                    <div class="footer-data us flex flex-row">
                        <box-icon name='right-arrow' color='#ffffff'></box-icon>
                        <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="subtitle-footer us">Nosotros</p></a>
                    </div>
                    <div class="footer-data contact-us flex flex-row">
                        <box-icon name='right-arrow' color='#ffffff'></box-icon>
                        <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="subtitle-footer contact-us">Contáctanos</p></a>
                    </div>
                </div>
                <div class="container-column-3 w-1/5">
                    <p class="title-footer title-category">Categorías</p>
                    <div class="footer-data romance flex flex-row">
                        <box-icon name='right-arrow' color='#ffffff'></box-icon>
                        <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="subtitle-footer romance">Romance</p></a>
                    </div>
                    <div class="footer-data comedy flex flex-row">
                        <box-icon name='right-arrow' color='#ffffff'></box-icon>
                        <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="subtitle-footer comedy">Comedia</p></a>
                    </div>
                    <div class="footer-data mystery flex flex-row">
                        <box-icon name='right-arrow' color='#ffffff'></box-icon>
                        <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="subtitle-footer mystery">Misterio</p></a>
                    </div>
                    <div class="footer-data footer-data terror flex flex-row">
                        <box-icon name='right-arrow' color='#ffffff'></box-icon>
                        <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="subtitle-footer terror">Terror</p></a>
                    </div>
                    <div class="footer-data adventure flex flex-row">
                        <box-icon name='right-arrow' color='#ffffff'></box-icon>
                        <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="subtitle-footer adventure">Aventura</p></a>
                    </div>
                </div>
                <div class="container-column-4 w-1/5">
                    <div class="container-medium">
                        <p class="title-footer title-medium">Soporte</p>
                        <div class="footer-data frequent-questions flex flex-row">
                            <box-icon name='right-arrow' color='#ffffff'></box-icon>
                            <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="subtitle-footer frequent-questions">Preguntas frecuentes</p></a>
                        </div>
                        <div class="footer-data complaints-book flex flex-row">
                            <box-icon name='right-arrow' color='#ffffff'></box-icon>
                            <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="subtitle-footer complaints-book">Libro de reclamaciones</p></a>
                        </div>
                        <div class="footer-data terms-and-conditions flex flex-row">
                            <box-icon name='right-arrow' color='#ffffff'></box-icon>
                            <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="subtitle-footer terms-and-conditions">Términos y condiciones</p></a>
                        </div>
                        <div class="footer-data privacy-policies flex flex-row">
                            <box-icon name='right-arrow' color='#ffffff'></box-icon>
                            <a href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"><p class="subtitle-footer privacy-policies">Políticas de privacidad</p></a>
                        </div>
                    </div>
                    <div class="container-payment-methods pt-8">
                        <p class="title-footer title-payment-methods">Métodos de pago</p>
                        <div class="footer-data flex flex-row">
                            <img class="payment-card" src="/images/metodo-de-pago-express.png"/>
                            <img class="payment-card" src="/images/metodo-de-pago-express.png"/>
                            <img class="payment-card" src="/images/metodo-de-pago-express.png"/>
                            <img class="payment-card" src="/images/metodo-de-pago-express.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components:{

    },
    data(){
        return{
            // search autocomplete
            links: [],
            state: '',
            timeout:  null,
            // star
            value1: null,
            //select
            options: [{
            value: 'Libro Digital',
            label: 'Libro Digital'
            }, {
            value: 'Libro Fisico',
            label: 'Libro Fisico'
            }],
            value: '',
            //tabs
            activeName: 'first'
        }
    },
    methods: {

    // search autocomplete
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },

    //   tabs
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    // search autocomplete
    mounted() {
      this.links = this.loadAll();
    }
}
</script>
<style scoped>
    .image-logo{
        width: 25%;
    }
    .search-autocomplete{
        display: flex;
        justify-content: center;
        width: 35%;
    }
    .input-search-autocomplete{
        width: 90%;
    }
    
    .enlaces-header{
        display: flex;
        justify-content: center;
        width: 10%;
    }
    .icon-login{
        display: flex;
        justify-content: center;
        width: 5%;
    }
    .icon-shopping-cart{
        display: flex;
        justify-content: center;
        width: 5%;
    }
    .editorial{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
    }
    .title{
        font-family: "Baloo Chettan 2";
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 52px;
    }
    .author{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
    }
    .price-current{
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 69px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .price-before{
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 43px;
        text-decoration-line: line-through;
        color: #7F7F7F;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .button-to-by {
        background: #5E20E4;
        border-color: #5E20E4;
        border-radius: 50px !important;
        width: 444px;
        height: 79.51px;
    }
    .text{
        font-family: "Baloo Chettan 2";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 35px;
    }
    .enlace-maps{
        font-family: "Baloo Chettan 2";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        text-decoration-line: underline;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .direction{
        font-family: "Baloo Chettan 2";
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 35px;
        color: #5E20E4;
    }

    .footer{
        background: #021639;
    }

    .title-footer{
        font-family: Roboto;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 172%;
        color: #F9F9FF;
    }

    .subtitle-footer{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 172%;
        color: #FFFFFF;
    }

    .footer-data{
        padding-top: 2rem;
    }
    
</style>