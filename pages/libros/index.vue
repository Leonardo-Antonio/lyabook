<template>
  <div>
    <div class="mt-20 relative overflow-x-hidden overflow-y-hidden">
      <img
        src="/shapes/circle-double-aye.svg"
        class="absolute z-10 rotate z-10"
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

      <div class="flex justify-center mx-auto  mb-12" style="width: 70%">
        <div class="container-filter-father w-1/4 r-remove" style="z-index: 20">
          <!-- filter -->
          <div class="container-filter">
            <div class="header-filter px-6 py-4 rounded-t-2xl">
              <p class="header-title">Filtar por</p>
            </div>
            <div>
              <el-row class="tac">
                <el-col
                  :span="12"
                  class="column-menu rounded-b-2xl"
                  style="background: #fff"
                >
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
                        :key="index"
                      >
                        <el-checkbox
                          class="checkbox-filter"
                          id="checkbox"
                          @change="filter(index, category.active, category.ean)"
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
                        <span class="subtitle-filter">Editorial</span>
                      </template>
                      <div
                        v-for="(edi, indexE) of editorial"
                        :key="edi"
                        class="container-options-filter"
                      >
                        <el-menu-item
                          index="1-1"
                          class="menu-item"
                          @click="filterEditorial(indexE, edi.status, edi.name)"
                          >{{ edi.name }}</el-menu-item
                        >
                      </div>

                      <!-- <el-menu-item
                        v-for="(edi, indexE) of editorial"
                        :key="edi"
                      >
                        <el-menu-item index="1-1">item one</el-menu-item>
                      </el-menu-item> -->
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
                          :max="max"
                          :min="min"
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
          <div class="w-full pb-8 filter-response flex justify-center">
            <el-button class="w-full filter-button-response" @click="drawerFilter = true"
              >Filtrado</el-button
            >
          </div>
          <el-header class="header-list-book">
            <div class="flex relative items-center">
              <div class="container-title">
                <p>Libros</p>
              </div>
            </div>
          </el-header>
          <el-main style="overflow: overlay; height: 40rem">
            <div
              class="container-product flex justify-center"
              v-show="books.length != 0"
            >
              <div class="w-full">
                <div>
                  <div class="flex flex-wrap">
                    <div
                      v-for="item of books"
                      :key="item"
                      class="pl-4 pb-8 w-48 container-book"
                      style="height: 28rem"
                    >
                      <nuxt-link :to="`/libros/${item.slug}`">
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
                      </nuxt-link>
                      <div
                        class="container-detail relative"
                        style="height: 40%"
                      >
                        <nuxt-link :to="`/libros/${item.slug}`">
                          <div class="container-detail-externa px-2">
                            <p
                              v-if="item.name.length > 36"
                              class="title-product-externa pt-2"
                            >
                              {{ item.name.substring(0, 32) + '...' }}
                            </p>
                            <p v-else class="title-product-externa pt-2">
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
                              <p class="w-3/6 price-before">
                                S/.{{ item.price_before }}
                              </p>
                              <p class="w-3/6 price-current pl-2">
                                S/.{{ item.price_current }}
                              </p>
                            </div>
                            <div class="star pt-4 absolute bottom-12">
                              <div class="block">
                                <div v-if="item.star != 0">
                                  <el-rate
                                    v-model="item.star"
                                    text-color="#ff9900"
                                  />
                                </div>
                                <div v-else>Sin calificaciones</div>
                              </div>
                            </div>
                          </div>
                        </nuxt-link>
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
                          <el-row v-show="item.property == null">
                            <el-button
                              class="btn_add_size button-to-by"
                              type="primary"
                              round
                              @click="addCart(item)"
                              >Agregar al carrito</el-button
                            >
                          </el-row>
                          <el-row v-show="item.property != null">
                            <nuxt-link
                              :to="{
                                name: 'mi-cuenta-leer',
                                params: { pdf: item.type.digital.src },
                              }"
                            >
                              <el-button
                                class="btn_add_size button-to-by"
                                type="primary"
                                round
                                @click="readText()"
                                >Leer texto</el-button
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

            <div
              v-show="books.length == 0"
              class="
                px-6
                container-prod-vacio
                w-full
                flex
                justify-center
                align-center
              "
            >
              <el-empty description="Vacío"></el-empty>
            </div>
          </el-main>
          <el-footer>
            <div class="flex justify-center" v-show="showListProduct">
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
    <el-drawer
      title="I am the title"
      :visible.sync="drawerFilter"
      :with-header="false"
      size="85%"
      direction="ltr"
      class="drawer-filter"
    >
      <div class="container-filter">
        <div class="header-filter px-6 py-4 rounded-t-2xl">
          <p class="header-title">Filtar por</p>
        </div>
        <div>
          <el-row class="tac">
            <el-col
              :span="12"
              class="column-menu rounded-b-2xl"
              style="background: #fff"
            >
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
                    :key="index"
                  >
                    <el-checkbox
                      class="checkbox-filter"
                      id="checkbox"
                      @change="filter(index, category.active, category.ean)"
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
                    <span class="subtitle-filter">Editorial</span>
                  </template>
                  <div
                    v-for="(edi, indexE) of editorial"
                    :key="edi"
                    class="container-options-filter"
                  >
                    <el-menu-item
                      index="1-1"
                      class="menu-item"
                      @click="filterEditorial(indexE, edi.status, edi.name)"
                      >{{ edi.name }}</el-menu-item
                    >
                  </div>

                  <!-- <el-menu-item
                        v-for="(edi, indexE) of editorial"
                        :key="edi"
                      >
                        <el-menu-item index="1-1">item one</el-menu-item>
                      </el-menu-item> -->
                </el-submenu>
              </el-menu>
              <el-menu class="rounded-b-2xl">
                <div class="container-barra-price pt-4 pb-20">
                  <div class="block">
                    <span class="demonstration subtitle-filter">Precio</span>
                    <el-slider
                      class="pt-2"
                      v-model="value_barra"
                      :max="max"
                      :min="min"
                    ></el-slider>
                  </div>
                </div>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  layout: 'client',
  data() {
    return {
      // star
      value1: null,

      //-------------------------------VARIABLES
      showDrawer: false,
      // barra de precio
      value_barra: 0,
      max: 0,
      min: 0,

      editorial_moment: [],
      //-------------------------------VARIABLES PARA APIS
      books: [],
      categories: [],
      editorial: [],
      //-------------------------------VARIABLES HELP EDITORIAL
      value_category: [],
      value_books: [],
      books_active: [],
      ids: [],
      master_books: [],
      submaster_books: [],

      // -------------------------------DRAWER
      booksCard: [],
      valuesCard: [],

      drawerFilter: false,
    }
  },
  methods: {
    hi(item) {
      console.log(item)
    },

    openFilter() {
      alert(2)
    },

    //------------------------------------PROCESO DEL FILTRADO
    filter(index, value, id_category) {
      this.books = this.books.filter((book) =>
        book.categories.includes(id_category)
      )

      if (value) {
        this.value_category[index].active = !value
      }

      if (value) {
        this.books = this.master_books
        this.ids.push(id_category)
        this.ids.forEach((id) => {
          this.books = this.books.filter(
            (book) =>
              book.categories.includes(id) == true &&
              book.price_current <= this.value_barra
          )
        })

        this.submaster_books = this.books

        this.value_category[index].active = !value
      } else {
        const position = this.ids.indexOf(id_category)
        this.ids.splice(position, 1)

        for (let i = this.submaster_books.length; i > 0; i--) {
          this.submaster_books.pop()
        }

        this.ids.forEach((id) => {
          this.books = this.master_books.filter(
            (book) =>
              book.categories.includes(id) == true &&
              book.price_current <= this.value_barra
          )

          this.submaster_books = this.master_books.filter(
            (book) => book.categories.includes(id) == true
          )
        })

        if (this.ids.length == 0) {
          this.books = this.master_books.filter(
            (book) => book.price_current <= this.value_barra
          )
        }
        this.value_category[index].active = !value
      }
    },
    filterEditorial(indexE, status, name_editorial) {
      const cant_category = this.submaster_books.length
      if (cant_category != 0) {
        this.books = this.submaster_books.filter(
          (book) =>
            book.editorial == name_editorial &&
            book.price_current <= this.value_barra
        )
      } else {
        const value = this.editorial_moment.includes(name_editorial)
        if (!value) {
          this.editorial_moment[0] = name_editorial
          this.books = this.master_books.filter(
            (book) =>
              book.editorial == name_editorial &&
              book.price_current <= this.value_barra
          )
        } else {
          this.books = this.master_books.filter(
            (book) => book.price_current <= this.value_barra
          )
        }
      }
    },
    addCart(books) {
      var local = localStorage.getItem('books')
      if (local != null) {
        this.booksCard = JSON.parse(local)
      }

      let cant = {
        cant: 1,
      }

      this.booksCard.push(Object.assign(books, cant))
      var validate = this.booksCard.filter((book) => book._id == books._id)

      if (validate.length == 1) {
        localStorage.setItem('books', JSON.stringify(this.booksCard))
      } else {
        this.booksCard.pop()
        this.$message({
          type: 'info',
          message: 'El libro ya fue agregado al carrito.',
        })
      }
    },
    readText() {
      console.log('leer libro')
    },
  },
  watch: {
    value_barra: function (value) {
      const cant_category = this.submaster_books.length
      if (cant_category != 0) {
        this.books = this.submaster_books.filter(
          (book) => book.price_current <= value
        )
      } else {
        this.books = this.master_books.filter(
          (book) => book.price_current <= value
        )
      }
    },
  },
  async created() {
    // -------------------------------------------User
    var user = JSON.parse(localStorage.getItem('user')).user
    if(user.rol != "Client"){
      this.$router.push('/errors/403')
    }

    // -------------------------------------------Filtro Libro
    try {
      const list_book = await this.$apidata({
        url: '/books',
        method: 'get',
      })
      if (list_book.status == 200) {
        this.books = list_book.data.data.filter((book) => book.active == true)
        this.master_books = list_book.data.data.filter(
          (book) => book.active == true
        )

        const maximos = []
        const minimos = []

        this.books.forEach((book) => {
          const value = maximos.includes(book.price_current)
          if (!value) {
            maximos.push(book.price_current)
          }

          let cantidad = 0
          let total = 0
          book.commentaries.forEach((commentary) => {
            cantidad++
            total += commentary.star
          })

          const promedio = total / cantidad
          book['star'] = isNaN(promedio) ? 0 : promedio
        })

        var contador = 0
        for (let i = 0; i < maximos.length; i++) {
          if (maximos[i] > contador) {
            contador = maximos[i]
          }
        }

        this.max = contador

        var contador_min = this.max
        for (let i = 0; i < maximos.length; i++) {
          if (maximos[i] < contador_min) {
            contador_min = maximos[i]
          }
        }

        this.min = contador_min

        this.value_barra = this.max
      } else {
        console.log('Error en el servidor al obtener libros')
      }
    } catch (error) {
      console.log('Error en el servidor - libros')
    }

    // -------------------------------------------Filtro Category
    try {
      const category = await this.$apidata({
        url: '/categories',
        method: 'get',
      })
      if (category.status == 200) {
        this.categories = category.data.data
        this.value_category = this.categories.filter(
          (category) => category.active == true
        )
      } else {
        console.log('error en el servidor al obtener la categoria.')
      }
    } catch (error) {
      console.log('error en el servidor - categoria.')
    }

    // -------------------------------------------Filtro Editorial
    try {
      const editorial = await this.$apidata({
        url: '/editorial',
        method: 'get',
      })
      if (editorial.status == 200) {
        this.editorial = editorial.data.data
      } else {
        console.log('Error en el servidor al obtener editorial')
      }
    } catch (error) {
      console.log('Error en el servidor - editorial')
    }

    //-------------------------------------------Book Cart
    var local = localStorage.getItem('books')
    if (local != null) {
      this.booksCard = JSON.parse(local)
    }
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
@media (min-width: 1300px) {
  .filter-response {
    display: none;
  }
  
}
@media (max-width: 1299px) {
  .container-filter-father {
    display: none;
  }
  .container-filter {
    box-shadow: none !important;
    border-radius: 0px !important;
  }
  .header-filter{
    border-top-left-radius: 0px !important;                                                     
    border-top-right-radius: 0px !important;
  }
}
.filter-button-response{
  background: var(--secundary);
  color: var(--primary);
  border: solid 1px var(--primary);
  width: 95%;
}
.filter-button-response:active{
  background: var(--secundary) !important;
  color: var(--primary) !important;
  border: solid 1px var(--primary) !important;
  width: 95% !important;
}
@media screen and (min-width: 800px) and (max-width: 1300px){
  .drawer-filter{
    width: 40% !important;
  }
}
@media screen and (min-width: 640px) and (max-width: 800px){
  .drawer-filter{
    width: 50% !important;
  }
}
</style>
