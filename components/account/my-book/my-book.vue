<template>
  <div>
    <div class="list-my-book overflow-auto h-80">
      <div v-for="item of my_books" :key="item._id" class="pb-2">
        <div class="flex">
          <div class="container-my-books p-6 m-4 w-full">
            <div class="flex container-colum-my-books">
              <div class="w-1/5 flex justify-center container-portada">
                <img class="portada-book" :src="item.picture_url" />
              </div>
              <div class="container-star pl-4">
                <div class="h-1/2 pr-4">
                  <p class="title-primary">Autor: {{ item.id_payment }}</p>
                  <p class="title-book pt-2">{{ item.title }}</p>
                </div>
                <div class="h-1/2 pt-6">
                  <p class="title-primary">Formato</p>
                  <div class="pt-2" v-show="item.description == 'd'">
                    <p class="title-book w-1/2">Digital</p>
                  </div>
                  <div class="pt-2" v-show="item.description == 'f'">
                    <p class="title-book w-1/2">Físico</p>
                  </div>
                </div>
              </div>
              <div class="w-1/4 container-space-book"></div>
              <div class="w-1/4 flex justify-end container-bottom">
                <div class="h-full container-column-book">
                  <div class="h-1/3 btn-top">
                    <p class="fecha p-2 px-6">
                      {{ new Date(item.created_at).toLocaleString() }}
                    </p>
                  </div>
                  <div class="h-1/3 btn-top">
                    <div v-show="item.status == 'approved'">
                      <p class="parrafo-status text-center">Aprobado</p>
                    </div>
                    <div v-show="item.status == 'in_process'">
                      <p class="parrafo-status text-center">En proceso</p>
                    </div>
                  </div>
                  <div class="h-1/3 btn-top" v-show="item.description == 'd'">
                    <!-- <nuxt-link :to="`/mi-cuenta/leer/${item.category_id}/`"> -->
                    <nuxt-link
                      :to="{
                        name: 'mi-cuenta-leer',
                        params: { pdf: item.category_id },
                      }"
                    >
                      <el-button class="btn_readBook" type="primary"
                        >Leer Libro</el-button
                      >
                    </nuxt-link>
                  </div>

                  <div class="h-1/3 btn-top" v-show="item.description == 'f'">
                    <nuxt-link
                      :to="{
                        name: 'libros-mapa',
                        params: { position: item.category_id },
                      }"
                    >
                      <el-button class="btn_readBook" type="primary"
                        >Ver ubicación</el-button
                      >
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: [],
      products: [],
      slug: [],
      my_books: [],
    }
  },
  async mounted() {
    //--------------------------------GET USER---------------------------------

    try {
      var user = localStorage.getItem('user')
      if (user != null) {
        this.user = JSON.parse(user).user
        if (
          (this.$route.query.status != null &&
            this.$route.query.status == 'approved') ||
          (this.$route.query.status != null &&
            this.$route.query.status == 'in_process')
        ) {
          await this.$axios
            .get(
              `https://api.mercadopago.com/v1/payments/${this.$route.query.payment_id}`,
              {
                headers: {
                  Authorization:
                    'Bearer TEST-6706525738118846-082101-03ee4a59346a45ff4f27a6f2eb905cf4-775792906',
                },
              }
            )
            .then((res) => {
              console.log('#################')
              console.log(res)
              console.log('#################')
              res.data.additional_info.items.forEach(async (data) => {
                var product = {
                  id_payment: data.id,
                  title: data.title,
                  unit_price: parseFloat(data.unit_price),
                  quantity: parseInt(data.quantity),
                  description: data.description,
                  picture_url: data.picture_url,
                  category_id: data.category_id,
                }
                this.products.push(product)

                if (data.description == 'f' || data.description == 'df') {
                  const getBook = await this.$apidata({
                    url: '/books/name/' + data.title,
                    method: 'get',
                  })

                  if (getBook.data.error == false) {
                    var dataBodyUpdate = {
                      stock:
                        getBook.data.data.type.fisico.stock -
                        parseInt(data.quantity),
                    }

                    const updateByNameBook = await this.$apidata({
                      url: '/books/name/' + data.title,
                      method: 'put',
                      data: dataBodyUpdate,
                    })
                  }
                }
              })
            })
            .catch((error) => {
              console.error(error)
            })

          var body = {
            id_client: this.user._id,
            payment_id: this.$route.query.payment_id,
            status: this.$route.query.status,
            products: this.products,
            active: true,
          }

          try {
            const response = await this.$apidata({
              url: '/payments',
              method: 'post',
              data: body,
            })

            if (response.data.error == false) {
              this.$router.replace({ query: null })
            }
          } catch (error) {}
        }

        //--------------------------------GET PAYMENT BY CLIENT---------------------------------
        const getPayCli = await this.$apidata({
          url: '/payments/' + this.user._id,
          method: 'get',
        })

        if (getPayCli.data.error == false) {
          getPayCli.data.data.forEach(async (data) => {
            console.log(data)
            await this.$axios
              .get(
                'https://api.mercadopago.com/v1/payments/' + data.payment_id,
                {
                  headers: {
                    Authorization:
                      'Bearer TEST-6706525738118846-082101-03ee4a59346a45ff4f27a6f2eb905cf4-775792906',
                  },
                }
              )
              .then(async (res) => {
                //--------------------------------VALIDATE STATUS---------------------------------

                if (res.data.status != data.status && data.status != null) {
                  var status = {
                    status: res.data.status,
                  }
                  const validate_status = await this.$apidata({
                    url: '/payments/' + data._id,
                    method: 'put',
                    data: status,
                  })
                }
              })
              .catch((error) => {
                console.error(error)
              })

            //--------------------------------ADD ARRAY LIST---------------------------------
            data.products.forEach((product) => {
              data = {
                created_at: data.created_at,
                status: data.status,
              }

              Object.assign(product, data)
              this.my_books.push(product)
            })
          })
        }
      } else {
        this.$router.push('/login')
      }
    } catch (error) {
      this.$router.push('/login')
    }

    //--------------------------------PAYMENT-----------------------------------------------

    //--------------------------------CONSULT PAYMENT---------------------------------
  },
}
</script>
<style scoped>
.parrafo-status {
  background: var(--second);
  color: var(--secundary);
  padding: 0.2rem 0 0.2rem 0rem;
  border-radius: 7px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
}
@media only screen and (max-width: 900px) {
  .container-colum-my-books {
    flex-direction: column;
  }
  .container-star {
    width: 100%;
    padding-top: 2rem;
    padding-left: 0;
  }
  .container-bottom {
    width: 100%;
    justify-content: center;
  }
  .btn-top {
    padding-top: 0.5rem;
  }
  .container-column-book {
    width: 100%;
    padding-top: 0.5rem;
  }
  .btn_readBook {
    width: 100%;
  }
  .fecha {
    text-align: center;
  }
  .container-portada {
    width: 100%;
  }
  /* .portada-book{
    height: 100%;
  } */
  .container-space-book {
    display: none;
  }
}
@media only screen and (max-width: 1399px) {
  .list-my-book {
    overflow: hidden !important;
    height: auto !important;
  }
}
</style>
