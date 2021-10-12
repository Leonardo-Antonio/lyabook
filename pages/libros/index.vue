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

      <div class="flex justify-center w-7/12 mx-auto pb-16">
        <div class="container-filter-father w-1/4" style="z-index: 20">
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
                          @change="filter(index, category.active, category._id)"
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
          <el-header class="header-list-book">
            <div class="flex relative items-center">
              <div class="container-title">
                <p>Libros</p>
              </div>
            </div>
          </el-header>
          <el-main>
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
                      class="pl-4 pb-8 w-1/4 container-book"
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
                              <p class="w-3/6 price-before">
                                S/.{{ item.price_before }}
                              </p>
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
                          <el-row>
                            <el-button
                              class="btn_add_size button-to-by"
                              type="primary"
                              round
                              @click="addCart(item)"
                              >Agregar al carrito</el-button
                            >
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
    }
  },
  methods: {
    hi(item) {
      console.log(item)
    },
    //------------------------------------PROCESO DEL FILTRADO
    filter(index, value, id_category) {
      this.books = this.books.filter((book) =>
        book.categories.includes(id_category)
      )
      console.log(
        '++++++++++++++++++++++FILTRADO+++++++++++++++++++++++++++++++'
      )
      console.log('ID index: ' + index)
      console.log('ID VALUE: ' + value)
      if (value) {
        this.value_category[index].active = !value
        console.log(
          '++++++++++++++++++++++LIBROS+++++++++++++++++++++++++++++++'
        )
        console.log('ID CATEGORIA: ' + id_category)
      }
      console.log('ID CATEGORIA: ' + id_category)
      console.log('++++++++++++++++++++++IDS+++++++++++++++++++++++++++++++')

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
        console.log(this.submaster_books)

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

        console.log(this.submaster_books)

        if (this.ids.length == 0) {
          this.books = this.master_books.filter(
            (book) => book.price_current <= this.value_barra
          )
        }
        this.value_category[index].active = !value
      }
    },
    filterEditorial(indexE, status, name_editorial) {
      console.log(
        '++++++++++++++++++++++FILTRADO Editorial+++++++++++++++++++++++++++++++'
      )
      console.log('STATUS: ' + status)
      console.log('NAME EDITORIAL: ' + name_editorial)
      console.log('++++++++++++++++++++++IDS+++++++++++++++++++++++++++++++')

      const cant_category = this.submaster_books.length
      console.log('CANTIDAD DE CATEGORIA: ' + cant_category)
      if (cant_category != 0) {
        console.log('hay categorias seleccionadas')
        this.books = this.submaster_books.filter(
          (book) =>
            book.editorial == name_editorial &&
            book.price_current <= this.value_barra
        )
      } else {
        console.log('editorial se filtra primero')
        const value = this.editorial_moment.includes(name_editorial)
        if (!value) {
          this.editorial_moment[0] = name_editorial
          console.log(this.editorial_moment)
          this.books = this.master_books.filter(
            (book) =>
              book.editorial == name_editorial &&
              book.price_current <= this.value_barra
          )
        } else {
          this.books = this.master_books.filter(
            (book) => book.price_current <= this.value_barra
          )
          console.log(this.books)
        }
      }
    },
    addCart(books) {
      console.log(
        '--------------------------DRAWER-------------------------------'
      )

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
        console.log('Agregado')
        localStorage.setItem('books', JSON.stringify(this.booksCard))
      } else {
        console.log('Ya fue Agregado')
        this.booksCard.pop()
        console.log('-------------------------------------------------')
        this.$message({
          type: 'info',
          message: 'El libro ya fue agregado al carrito.',
        })
      }
    },
  },
  watch: {
    value_barra: function (value) {
      console.log(
        '++++++++++++++++++++++FILTRADO PRECIO+++++++++++++++++++++++++++++++'
      )

      console.log(value)

      const cant_category = this.submaster_books.length
      console.log('CANTIDAD DE CATEGORIA: ' + cant_category)
      if (cant_category != 0) {
        console.log('hay categorias seleccionadas')
        this.books = this.submaster_books.filter(
          (book) => book.price_current <= value
        )
      } else {
        console.log('primer precio')
        this.books = this.master_books.filter(
          (book) => book.price_current <= value
        )
      }
    },
  },
  async created() {
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
        })

        console.log('----------------------MAXIMO-------------------')
        console.log(maximos)
        var contador = 0
        for (let i = 0; i < maximos.length; i++) {
          if (maximos[i] > contador) {
            contador = maximos[i]
          }
        }
        console.log('----------------------MAX-------------------')

        this.max = contador
        console.log(this.max)

        console.log('----------------------MINIMO-------------------')
        console.log(maximos)
        var contador_min = this.max
        for (let i = 0; i < maximos.length; i++) {
          if (maximos[i] < contador_min) {
            contador_min = maximos[i]
          }
        }
        console.log('----------------------MAX-------------------')

        this.min = contador_min
        console.log(this.min)

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

        console.log('-----------------------------------------------------')
        console.log(this.value_category)
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
    console.log(
      '-------------------------Book Cart----------------------------'
    )
    var local = localStorage.getItem('books')
    if (local != null) {
      this.booksCard = JSON.parse(local)
    }

    console.log(this.booksCard)
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
