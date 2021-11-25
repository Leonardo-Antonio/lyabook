<template>
  <div>
    <!-- <img
      src="/shapes/doble-cuadrado-button-right.png"
      class="absolute z-10 doble-cuadrado-button-right"
      style="width: 20rem; left: 0rem; bottom: 0rem"
    /> -->

    <div class="flex justify-center">
      <img
        src="/shapes/circle-double-aye.svg"
        class="absolute z-10 rotate circle-double-aye"
        style="width: 7rem; left: -1rem; top: 8rem"
      />
      <div class="container_slug mb-12" style="width: 57%">
        <!-- container product  -->
        <div class="flex flex-row pt-20 container-product-slug">
          <div class="w-2/4 flex items-center justify-center con-img">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="item in books.images_src" :key="item">
                <img :src="item" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="w-2/4 flex justify-center con-data">
            <div class="conatiner-detail-product mx-12">
              <p class="editorial">{{ books.editorial }}</p>
              <p class="title">{{ books.name }}</p>
              <p class="author pt-4">Autor: {{ books.author }}</p>
              <div class="star pt-4">
                <div v-if="books.star != 0" class="block">
                  <el-rate v-model="books.star"></el-rate>
                </div>

                <div v-else class="block">Sin calificaciones</div>
              </div>
              <div class="container-price flex flex-row pt-4">
                <div class="container-price-before flex items-center w-1/2">
                  <p class="price-before">S/.{{ books.price_before }}</p>
                </div>
                <div class="container-price-current w-1/2">
                  <p class="price-current">S/.{{ books.price_current }}</p>
                </div>
              </div>
              <div class="container-select-format pt-4">
                <el-select
                  v-model="type_book"
                  clearable
                  placeholder="Tipo"
                  v-show="books.format == 'df'"
                >
                  <el-option
                    v-for="type in books.type"
                    :key="type"
                    :label="type.format"
                    :value="type.format"
                  >
                  </el-option>
                </el-select>
              </div>
              <div v-show="type_book == 'Fisico' || books.format == 'f'">
                <div class="container-maps flex flex-row items-center pt-4">
                  <div class="conatiner-text w-1/2">
                    <p class="text">Recoger en:</p>
                  </div>
                  <div class="conatiner-enlace-maps w-1/2 flex justify-end">
                    <nuxt-link
                      :to="{
                        name: 'libros-mapa',
                        params: { position: books.type },
                      }"
                    >
                      <p class="enlace-maps">Ver el mapa</p>
                    </nuxt-link>
                  </div>
                </div>
                <div class="container-direction pt-2">
                  <p class="direction">{{ street }} - {{ name_street }}</p>
                </div>
              </div>
              <div class="container-button-to-buy pt-8 flex justify-center">
                <el-row v-show="books.property == null">
                  <el-button
                    class="btn_add_size button-to-by"
                    type="primary"
                    round
                    @click="addCart"
                    >Agregar al carrito</el-button
                  >
                </el-row>
                <el-row v-show="books.property != null">
                  <el-button
                    class="btn_add_size button-to-by"
                    type="primary"
                    round
                    @click="readText(books.type.digital.src)"
                    >Leer texto o libro</el-button
                  >
                </el-row>
              </div>
            </div>
          </div>
        </div>

        <!-- container tabs -->
        <div class="conatiner-tabs pt-12">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Descripción" name="first">{{
              books.description
            }}</el-tab-pane>
            <el-tab-pane label="Comentarios" name="second">
              <div class="flex">
                <el-input
                  placeholder="Agrega un comentario..."
                  v-model="addcomentary"
                  clearable
                  class="input mr-4"
                ></el-input>
                <el-button
                  id="btnComentary"
                  class="ml-2 px-4 button-comentary"
                  @click="addComentary"
                  :disabled="valueButtom"
                >
                  Comentar
                </el-button>
              </div>
              <div class="flex mb-4 mt-4">
                <p>Calificar:</p>
                <el-rate class="star pl-4" v-model="star"></el-rate>
              </div>

              <div
                v-for="comentary in books.commentaries"
                :key="comentary"
                class="pt-2"
              >
                <div class="container-comentary">
                  <p class="comentary-name">{{ comentary.name }}</p>
                  <p>{{ comentary.comentary }}</p>
                </div>
              </div>
              <div class="pt-4 flex justify-center" v-show="cant_category > 5">
                <div id="seeMore">
                  <el-button @click="seeMore" class="seeMoreButton"
                    >ver más</el-button
                  >
                </div>
                <div id="seeLess" class="hidden">
                  <el-button @click="seeLess" class="seeLessButton"
                    >ver menos</el-button
                  >
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Detalle" name="third">
              <div v-for="item in books.details" :key="item">- {{ item }}</div>
            </el-tab-pane>
          </el-tabs>
        </div>

        <ImageHeader
          src="/shapes/doble-cuadrado-esquina-derecha.png"
          class="doble-cuadrado-esquina-derecha"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ImageHeader from '../../layouts/client-image'
export default {
  layout: 'client',
  components: {
    ImageHeader,
  },
  data() {
    return {
      // search autocomplete
      links: [],
      state: '',
      timeout: null,
      // star
      value1: null,
      //select
      options: [
        {
          value: 'Libro Digital',
          label: 'Libro Digital',
        },
        {
          value: 'Libro Fisico',
          label: 'Libro Fisico',
        },
      ],
      type_book: '',
      //tabs
      activeName: 'first',
      //--------------------------------------------------------Variable api
      books: {},
      booksCard: [],
      user: [],
      addcomentary: '',
      star: 0,
      valueButtom: true,
      seeMoreButton: [],
      seeLessButton: [],
      cant_category: 0,
      street: '',
      name_street: '',
    }
  },
  methods: {
    // search autocomplete
    loadAll() {
      return [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
      ]
    },
    querySearchAsync(queryString, cb) {
      var links = this.links
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createFilter(queryString) {
      return (link) => {
        return link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      }
    },
    handleSelect(item) {
      console.log(item)
    },
    readText(direction) {
      console.log(direction)
      this.$router.push({
        name: 'mi-cuenta-leer',
        params: { pdf: direction },
      })
    },

    //   tabs
    handleClick(tab, event) {
      console.log(tab, event)
    },
    //-----------------------------------AGREGAR AL CARRITO
    addCart() {
      var local = localStorage.getItem('books')
      if (local != null) {
        this.booksCard = JSON.parse(local)
      }

      let cant = {
        cant: 1,
      }

      this.booksCard.push(Object.assign(this.books, cant))
      var validate = this.booksCard.filter((book) => book._id == this.books._id)

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
    async addComentary() {
      try {
        var user = localStorage.getItem('user')
        if (user != null) {
          this.user = JSON.parse(user).user
        }

        this.books.commentaries = {
          name: this.user.name + ' ' + this.user.last_name,
          comentary: this.addcomentary,
          star: this.star,
        }

        await this.$apidata({
          url: '/books/' + this.books._id,
          method: 'put',
          data: this.books,
        })

        var response = await this.$apidata({
          url: '/books/' + this.books.slug,
          method: 'get',
          data: this.books,
        })

        // this.books = response.data.data
        this.seeMoreButton = []
        this.seeLessButton = []
        this.books.commentaries = []

        this.seeMoreButton = response.data.data.commentaries
        this.seeLessButton = response.data.data.commentaries
          .reverse()
          .slice(0, 5)
        this.books.commentaries = this.seeLessButton

        this.cant_category = this.seeMoreButton.length
        this.addcomentary = ''
      } catch (error) {
        console.log('error al agregar un comentario')
      }
    },
    seeMore() {
      this.books.commentaries = this.seeMoreButton
      const seeMore = document.getElementById('seeMore')
      seeMore.classList.add('hidden')

      const seeLess = document.getElementById('seeLess')
      seeLess.classList.remove('hidden')
    },
    seeLess() {
      this.books.commentaries = this.seeLessButton
      const seeMore = document.getElementById('seeMore')
      seeMore.classList.remove('hidden')

      const seeLess = document.getElementById('seeLess')
      seeLess.classList.add('hidden')
    },
  },
  watch: {
    addcomentary: function (value) {
      if (value.trim().length != 0) {
        if (value.length > 0) {
          this.valueButtom = false
        }
      } else {
        this.valueButtom = true
      }
    },
  },
  // search autocomplete
  async mounted() {
    this.links = this.loadAll()
    const slug = this.$route.params.slug
    try {
      const response = await this.$apidata({
        url: `/books/${slug}`,
        method: 'get',
      })
      if (response.status == 200) {
        this.books = response.data.data
        console.log(this.books)
        this.seeMoreButton = response.data.data.commentaries
        this.seeLessButton = this.books.commentaries.reverse().slice(0, 5)
        this.books.commentaries = this.seeLessButton

        this.cant_category = this.seeMoreButton.length

        let total = 0
        if (response.data.data.commentaries.length != 0) {
          response.data.data.commentaries.forEach((item) => {
            total += item.star
          })
        }

        const promedio = total / response.data.data.commentaries.length
        this.books['star'] = isNaN(promedio) ? 0 : promedio
      }
    } catch (error) {
      console.log(error)
    }
  },
  async created() {
    var res = await this.$axios.get(
      'https://api.mymappi.com/v2/places/search?apikey=5a6f0cf3-af52-4aaf-bb06-2c5ed3dd0da7&lat=-12.1692&lon=-77.0244&radius=10&limit=25'
    )
    this.street = res.data.data[0].tags['addr:street']
    this.name_street = res.data.data[0].tags.name
  },
}
</script>
<style scoped>
.image-logo {
  width: 25%;
}
.search-autocomplete {
  display: flex;
  justify-content: center;
  width: 35%;
}
.input-search-autocomplete {
  width: 90%;
}

.enlaces-header {
  display: flex;
  justify-content: center;
  width: 10%;
}
.icon-login {
  display: flex;
  justify-content: center;
  width: 5%;
}
.icon-shopping-cart {
  display: flex;
  justify-content: center;
  width: 5%;
}
.editorial {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
}
.title {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 52px;
}
.author {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
}
.price-current {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 69px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.price-before {
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 43px;
  text-decoration-line: line-through;
  color: #7f7f7f;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.button-to-by {
  background: #5e20e4;
  border-color: #5e20e4;
  border-radius: 50px !important;
  width: 25rem;
  height: 4.5rem;
}
.text {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
}
.enlace-maps {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-decoration-line: underline;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.direction {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #5e20e4;
}

.footer {
  background: #021639;
}

.title-footer {
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 172%;
  color: #f9f9ff;
}

.subtitle-footer {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 172%;
  color: #ffffff;
  padding-left: 0.5rem;
}

.footer-data {
  padding-top: 2rem;
}

.footer-author {
  background: #011e51;
}

.text-footer {
  font-family: Saira;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 31px;
  text-align: center;

  color: #ffffff;
}

.location {
  width: 80%;
}
.container-comentary {
  background: #f0f0ff;
  padding: 1rem;
  border-radius: 1rem;
}
.container-comentary .comentary-name {
  font-weight: 500;
}
.button-comentary {
  background: var(--primary);
  border: solid 1px var(--primary);
  color: #fff;
  font-weight: 500;
  border-radius: 1rem;
}
.button-comentary:hover {
  background: var(--primary);
  border: solid 1px var(--primary);
  color: #fff;
  font-weight: 500;
}
.seeMoreButton {
  border: solid 1px var(--primary);
  color: var(--primary);
}
.seeMoreButton:hover {
  background: #5e20e40f;
}
.seeLessButton {
  border: solid 1px var(--primary);
  color: var(--primary);
}
.seeLessButton:hover {
  background: #5e20e40f;
}

@media screen and (min-width: 1400px) and (max-width: 1700px) {
  .container_slug {
    width: 70% !important;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1400px) {
  .container_slug {
    width: 80% !important;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .container_slug {
    width: 95% !important;
  }
}
@media screen and (min-width: 500px) and (max-width: 639px) {
  .conatiner-tabs {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
@media (max-width: 1025px) {
  .doble-cuadrado-button-right {
    display: none;
  }
  .doble-cuadrado-esquina-derecha {
    display: none;
  }
  .circle-double-aye {
    display: none;
  }
}
@media (max-width: 640px) {
  .container-product-slug {
    flex-direction: column;
  }
  .con-img {
    width: 100%;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .con-data {
    width: 100%;
  }
  .container_slug {
    width: 100% !important;
  }
  .container-price-before {
    justify-content: center;
  }
  .container-price-current {
    justify-content: center;
  }
  /* .conatiner-tabs {
    padding-left: 3rem;
    padding-right: 3rem;
  } */
  .conatiner-detail-product {
    width: 100% !important;
  }
  .button-to-by {
    width: 100%;
  }
  .container-button-to-buy .el-row {
    width: 100%;
  }
}
@media (max-width: 500px) {
  .con-data {
    padding-left: 0px;
    padding-right: 0px;
  }
  .con-img {
    padding-left: 0px;
    padding-right: 0px;
  }
  .conatiner-tabs {
    padding-left: 0px;
    padding-right: 0px;
  }
  .conatiner-detail-product {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
  .container_slug {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .conatiner-detail-product .title {
    font-size: 30px;
    line-height: 40px;
    padding-top: 1rem;
  }
}

@media screen and (min-width: 640px) and (max-width: 1025px) {
  .container-product-slug {
    flex-direction: column;
  }
  .container_slug {
    width: 100% !important;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .con-img {
    width: 100%;
  }
  .con-data {
    width: 100%;
  }
  .conatiner-detail-product {
    margin-left: 0px;
    margin-right: 0px;
  }
  .container-button-to-buy .el-row {
    width: 100%;
  }
  .button-to-by {
    width: 100%;
  }
  .container-price-before {
    justify-content: center;
  }
  .container-price-current {
    justify-content: center;
  }
  .doble-cuadrado-button-right {
    display: none;
  }
  .doble-cuadrado-esquina-derecha {
    display: none;
  }
}
@media (max-width: 1700px) {
  .doble-cuadrado-button-right {
    display: none;
  }
}
@media (max-width: 1300px) {
  .circle-double-aye {
    display: none;
  }
  .doble-cuadrado-esquina-derecha {
    display: none;
  }
}

@media screen and (min-width: 640px) and (max-width: 1025px) {
  .conatiner-detail-product {
    width: 100% !important;
  }
}
</style>
