<template>
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
        <div class="footer">

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
    
</style>