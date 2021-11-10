<template>
  <div>
    <div>
      <p class="title-banner pb-16">Libros recomendados</p>
      <div class="container-home flex justify-center">
        <div class="container-banner-3">
          <el-carousel :interval="4000" type="card">
            <el-carousel-item v-for="item in books" :key="item._id">
              <nuxt-link :to="`/libros/${item.slug}`">
                <div class="w-full flex h-1/2">
                  <div
                    class="h-full container-left flex flex-col p-4 justify-center"
                    style="width: 68%"
                  >
                    <p class="title-product-home pb-4">{{item.name}}</p>
                    <p class="sipnosis-product-home">
                      {{item.description}}
                    </p>
                  </div>
                  <div class="h-full container-right" style="width: 32%">
                    <img
                      class="h-full w-full"
                      style="border-top-right-radius: 10px"
                      :src="item.images_src[0]"
                    />
                  </div>
                </div>
              </nuxt-link>
              <div class="w-full container-bottom h-1/2">
               <nuxt-link :to="`/libros/${item.slug}`">
                <div class="flex justify-between p-4">
                    <p class="parrafo-home" style="text-transform: uppercase">
                      LIBROS RECOMENDADOS
                    </p>
                    <div v-show="item.format == 'df'">
                      <p class="parrafo-home">Digital y Físico</p>
                    </div>
                    <div v-show="item.format == 'f'">
                      <p class="parrafo-home">Físico</p>
                    </div>
                    <div v-show="item.format == 'd'">
                      <p class="parrafo-home">Digital</p>
                    </div>
                </div>
              </nuxt-link>
              <nuxt-link :to="`/libros/${item.slug}`">
                <p class="author-product-home px-4">{{item.author}}</p>
                <p class="pag-product-home p-4">{{item.editorial}}</p>
              </nuxt-link>
                <div class="btn-product-home flex justify-center px-4">
                  <el-button
                    class="btn-comp btn_add_size w-full"
                    type="primary"
                    round
                    @click="addCart(item)"
                    >Agregar al carrito</el-button
                  >
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      books:[],
      booksCard: []
    }
  },
  methods:{
    addCart(books){
      console.log('*******************AGREGAR AL CARRITO***************************')
      console.log(books)
      //-----------------------------------------------------------------------------

      var local = localStorage.getItem('books')
      if (local != null) {
        this.booksCard = JSON.parse(local)
      }

      let cant = {
        cant: 1,
      }

      this.booksCard.push(Object.assign(books, cant))
      var validate = this.booksCard.filter((book) => book._id == books._id)

      console.log(this.booksCard)

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
    }
  },
  async created(){
    var response = await this.$apidata({
      url: '/books/',
      method: 'get'
    })
    console.log('---------------------------------Libros destacados------------------------------')
    response.data.data.forEach(res => {
      res.description = res.description.slice(0, 200) + '...'
    })
    this.books = response.data.data.slice(0, 5)

    //-------------------------------------------Book Cart-------------------------------------------
    // console.log(
    //   '-------------------------Book Cart----------------------------'
    // )
    var local = localStorage.getItem('books')
    if (local != null) {
      this.booksCard = JSON.parse(local)
    }

    // console.log(this.booksCard)
  }
}
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
} */

/* .el-carousel__item:nth-child(2n + 1) {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
} */

.container-banner-3 {
  width: 63%;
}

.container-banner-3 .el-carousel__item {
  border-radius: 10px;
}

.container-left {
  background: var(--second);
}

.container-bottom {
  background: var(--secundary);
}

.title-product-home {
  font-family: Saira;
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 20px;
  color: #fff;
}
.sipnosis-product-home {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
}
.parrafo-home {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #006788;
}
.author-product-home {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 15px;
}
.pag-product-home {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  color: #006788;
}
.container-banner-3 .is-in-stage {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.btn-product-home .btn-comp {
  background: var(--primary);
  border-color: var(--primary);
}
.btn-product-home .btn-comp:hover {
  transform: unset;
}
.title-banner {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 58px;
}
</style>
