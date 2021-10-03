<template>
  <div>
    <div class="mt-20 relative overflow-x-hidden overflow-y-hidden">
      <img
        src="/shapes/circle-double-aye.svg"
        class="absolute z-10 rotate"
        style="width: 10rem; left: -5rem; top: 0rem"
      />

      <img
        src="/shapes/circle-double-aye.svg"
        class="absolute z-10 rotate"
        style="width: 6rem; left: 40rem; top: 30rem"
      />

      <img
        src="/shapes/circle-double-aye.svg"
        class="absolute z-10 rotate"
        style="width: 12rem; right: 43rem; top: 40rem"
      />

      <img
        src="/shapes/doble-circle-claro.svg"
        class="absolute z-10"
        style="width: 5rem; right: -1rem; top: 42rem"
      />

      <div class="flex justify-center w-7/12 mx-auto">
        <div class="container-filter-father w-1/4">
          <!-- filter -->
          <div class="container-filter">
            <div class="header-filter px-6 py-4 rounded-t-2xl">
              <p class="header-title">Filtar por</p>
            </div>
            <div>
              <el-row class="tac">
                <el-col :span="12" class="column-menu">
                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo header-option-filter"
                    @open="handleOpen"
                    @close="handleClose"
                  >
                    <el-submenu index="1">
                      <template slot="title">
                        <!-- <i class="el-icon-location"></i> -->
                        <span class="subtitle-filter">Categoria</span>
                      </template>
                      <el-menu-item
                        v-for="(category, index) of value_category"
                        :key="category"
                      >
                        <el-checkbox id="checkbox" @change="filter(index, category.active, category._id)"
                          >{{ category.name }}
                        </el-checkbox>
                      </el-menu-item>
                    </el-submenu>
                  </el-menu>
                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo header-option-filter"
                    @open="handleOpen"
                    @close="handleClose"
                  >
                    <el-submenu index="2">
                      <template slot="title">
                        <!-- <i class="el-icon-location"></i> -->
                        <span class="subtitle-filter">Editorial</span>
                      </template>
                      <el-menu-item v-for="item of editorial" :key="item">
                        <el-checkbox @change="filter(item)"
                          >{{ item }}
                        </el-checkbox>
                      </el-menu-item>
                    </el-submenu>
                  </el-menu>
                  <el-menu class="rounded-b-2xl">
                    <div class="container-barra-price pt-4 pb-20">
                      <div class="block">
                        <span class="demonstration subtitle-filter"
                          >Precio</span
                        >
                        <el-slider
                          class="pt-2"
                          v-model="value_barra"
                        ></el-slider>
                      </div>
                    </div>
                  </el-menu>
                </el-col>
              </el-row>
            </div>
          </div>
          <!-- fin del filter -->
        </div>

        <!-- 2da barra -->
        <el-container
          class="container-list-books pt-2 w-9/12"
          style="z-index: 20"
        >
          <el-header class="header-list-book">
            <div class="flex relative items-center">
              <div class="container-title">
                <p>Libros</p>
              </div>
            </div>
          </el-header>
          <el-main>
            <div class="container-product flex justify-center">
              <div class="w-full">
                <div>
                  <div class="flex flex-wrap">
                    <div
                      v-for="item of books"
                      :key="item"
                      class="pl-4 pb-8 w-1/4 container-book"
                      style="height: 28rem"
                    >
                      <div
                        class="
                          container-portada
                          flex
                          justify-center
                          items-center
                        "
                        style="height: 60%"
                      >
                        <img
                          class="payment-card h-full"
                          :src="item.images_src[0]"
                        />
                      </div>
                      <div
                        class="container-detail relative"
                        style="height: 40%"
                      >
                        <div class="container-detail-externa px-2">
                          <p class="title-product-externa pt-2">
                            {{ item.name }}
                          </p>
                          <div
                            class="
                              flex
                              justify-center
                              items-center
                              pt-2
                              absolute
                              bottom-20
                            "
                          >
                            <p class="w-3/6 price-before">S/.20.0</p>
                            <p class="w-3/6 price-current pl-2">
                              S/.{{ item.price_current }}
                            </p>
                          </div>
                          <div class="star pt-4 absolute bottom-12">
                            <div class="block">
                              <el-rate v-model="value1"></el-rate>
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            container-button-to-buy
                            pt-4
                            flex
                            justify-center
                            items-center
                            -bottom-0
                            absolute
                            w-full
                          "
                        >
                          <el-row>
                            <nuxt-link :to="`/libros/${item.slug}`">
                              <el-button
                                class="btn_add_size button-to-by"
                                type="primary"
                                round
                                >Comprar</el-button
                              >
                            </nuxt-link>
                          </el-row>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-main>
          <el-footer>
            <div class="flex justify-center">
              <div class="block">
                <el-pagination layout="prev, pager, next" :total="1000">
                </el-pagination>
              </div>
            </div>
          </el-footer>
        </el-container>
        <!-- fin de la barra 2 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'client',
  data() {
    return {
      // star
      value1: null,
      // checkbox
      checked: true,
      // barra de precio
      value_barra: '',

      //-------------------------------VARIABLES
      valueCheckbox: '',

      //-------------------------------VARIABLES PARA APIS
      books: [],
      categories: [],
      editorial: [],
      //-------------------------------VARIABLES HELP EDITORIAL
      value_category: [],
      value_books:[],
      books_active: []
    }
  },
  methods: {
    hi(item) {
      console.log(item)
    },
    //------------------------------------PROCESO DEL FILTRADO
    async filter(index, value, id_category) {
      console.log('++++++++++++++++++++++FILTRADO+++++++++++++++++++++++++++++++')
      console.log("ID index: " +index)
      console.log("ID VALUE: " + value)
      if(value){
        this.value_category[index].active = !value
        console.log('++++++++++++++++++++++LIBROS+++++++++++++++++++++++++++++++')
        console.log("ID CATEGORIA: " + id_category)
        //this.books = this.books.filter(book => book.categories[0] == id_category || book.categories[1] == id_category|| book.categories.)
    
        // for (let i = 0; i < this.books.length; i++) {
        //   for (let x = 0; x < this.books[i].categories.length; x++) {
        //     if(this.books[i].categories[x] == id_category){
        //       console.log("encontrado")
        //       this.value_books.push(this.books[i])
        //     }
            
            
        //   }
        //   console.log("- - - - - - - - - - - - - - - - - - - - - - - ")
        // }

        // console.log("******************************RESULTADO********************************************")
        // console.log(this.value_books)
        // this.books = this.value_books
        
        //book => book.editorial == data || book.author == data
        // console.log(this.categories[0].active)
      }
      

      
    },
  },
  watch: {
    value_barra: function (value) {
      console.log(value)
    },
  },
  async created() {
    // -------------------------------------------Filtro Libro
    const list_book = await this.$apidata({
      url: '/books',
      method: 'get',
    })
    this.books = list_book.data.data.filter((b)=>b.active == true)

    // -------------------------------------------Filtro Category
    const category = await this.$apidata({
      url: '/categories',
      method: 'get',
    })
    this.categories = category.data.data
    this.value_category = this.categories.filter(
      (category) => category.active == true
    )

    console.log('-----------------------------------------------------')
    console.log(this.value_category)

    // -------------------------------------------Filtro Editorial
    const editorial = await this.$apidata({
      url: '/editorial',
      method: 'get',
    })
    this.editorial = editorial.data.data
    //--------------------------------------------
  },
}
</script>
<style>
.title-product-externa {
  line-height: normal;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
}

.header-filter {
  background: #021639;
  color: #fff;
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
}
.column-menu {
  width: 100% !important;
  padding-left: 1rem;
  padding-right: 1rem;
}

.container-filter {
  box-shadow: 2px 4px 10px rgba(49, 64, 95, 0.15);
  border-radius: 10px;
}
.container-title {
  font-family: Qucksand, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
}
.subtitle-filter {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;
  color: #000000;
}
.container-barra-price {
  padding-left: 1.2rem;
  padding-right: 1.2rem;
}
.header-list-book {
  padding-left: 2.5rem !important;
  padding-right: 4rem !important;
}
.price-before {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: line-through;
  color: #7f7f7f;
}
.price-current {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #5e20e4;
}
.container-barra-price .el-slider__button {
  border: 2px solid #021639;
}
.container-barra-price .el-slider__bar {
  background-color: #021639;
}
.header-title {
  padding-left: 1rem;
  padding-right: 1rem;
}
li.el-submenu {
  border-bottom: 1px solid #d5d5d5;
}
.el-menu {
  border-right: unset;
}
</style>
