<template>
  <div>
    <img
      src="/shapes/doble-cuadrado-button-right.png"
      class="absolute z-10"
      style="width: 20rem; left: 0rem; bottom: 0rem"
    />

    <div class="flex justify-center">
      <img
        src="/shapes/circle-double-aye.svg"
        class="absolute z-10 rotate"
        style="width: 7rem; left: -1rem; top: 8rem"
      />
      <div class="" style="width: 57%">
        <!-- container product  -->
        <div class="flex flex-row pt-20 container-product-slug">
          <div class="w-2/4 flex items-center justify-center">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="item in books.images_src" :key="item">
                <img :src="item" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="w-2/4 flex justify-center">
            <div class="conatiner-detail-product mx-12">
              <p class="editorial">{{ books.editorial }}</p>
              <p class="title">{{ books.name }}</p>
              <p class="author pt-4">Autor: {{ books.author }}</p>
              <div class="star pt-4">
                <div class="block">
                  <el-rate v-model="value1"></el-rate>
                </div>
              </div>
              <div class="container-price flex flex-row pt-4">
                <div class="container-price-current w-1/2">
                  <p class="price-current">{{ books.price_current }}</p>
                </div>
                <div class="container-price-before flex items-center w-1/2">
                  <p class="price-before">{{ books.price_before }}</p>
                </div>
              </div>
              <div class="container-select-format pt-4">
                <el-select v-model="type_book" clearable placeholder="Select">
                  <el-option
                    v-for="type in books.type"
                    :key="type"
                    :label="type.format"
                    :value="type.format"
                  >
                  </el-option>
                </el-select>
              </div>
              <div v-if="type_book == 'Fisico'">
                <div class="container-maps flex flex-row items-center pt-4">
                  <div class="conatiner-text w-1/2">
                    <p class="text">Recoger en:</p>
                  </div>
                  <div class="conatiner-enlace-maps w-1/2 flex justify-end">
                    <a
                      href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
                      ><p class="enlace-maps">Ver en Google Maps</p></a
                    >
                  </div>
                </div>
                <div class="container-direction pt-2">
                  <p class="direction">Calle 8, Cercado de Lima 15828</p>
                </div>
              </div>
              <div class="container-button-to-buy pt-8 flex justify-center">
                <el-row>
                  <el-button
                    class="btn_add_size button-to-by"
                    type="primary"
                    round
                    >COMPRAR</el-button
                  >
                </el-row>
              </div>
            </div>
          </div>
        </div>

        <!-- container tabs -->
        <div class="conatiner-tabs py-12 px-6">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Descripción" name="first"
              >{{books.description}}</el-tab-pane
            >
            <el-tab-pane label="Comentarios" name="second"
              >Comentarios</el-tab-pane
            >
            <el-tab-pane label="Detalle" name="third">
              <div v-for="item in books.details" :key="item">
                - {{item}}
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>

        <ImageHeader src="/shapes/doble-cuadrado-esquina-derecha.png" />
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

    //   tabs
    handleClick(tab, event) {
      console.log(tab, event)
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
      this.books = response.data.data
      console.log(this.books.details)
    } catch (error) {
      console.log(error)
    }
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
</style>
