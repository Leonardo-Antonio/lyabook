<template>
  <div>
    <div v-for="item of my_books" :key="item" class="pb-2">
      <div class="flex">
        <div class="container-my-books p-6 m-4 w-full">
          <div class="flex">
            <div class="w-1/5">
              <img class="portada-book" src="/images/portada-la-corona.jpg" />
            </div>
            <div class="container-star">
              <div class="h-1/2">
                <p class="title-primary">Autor: {{item.id_payment}}</p>
                <p class="title-book pt-2">{{item.title}}</p>
              </div>
              <div class="h-1/2 pt-6">
                <p class="title-primary">Formato</p>
                <div class=" pt-2" v-show="item.description == 'd'">
                  <p class="title-book  w-1/2">Digital</p>
                </div>
                <div class=" pt-2" v-show="item.description == 'f'" >
                  <p class="title-book  w-1/2">Físico</p>
                </div>
              </div>
            </div>
            <div class="w-1/4">
              <div class="h-1/3">
                <p class="title-primary">Precio Unitario:</p>
                <p class="name-category pt-2">S/.{{item.unit_price}}</p>
              </div>
              <div class="h-1/3">
                <p class="title-primary">Cantidad:</p>
                <p class="name-category pt-2">S/.{{item.quantity}}</p>
              </div>
              <div class="h-1/3">
                <p class="title-primary">Total:</p>
                <p class="name-category pt-2">S/.{{item.unit_price * item.quantity}}</p>
              </div>
              
            </div>
            <div class="w-1/4 flex justify-end">
              <div class="relative h-full">
                <div class="">
                  <p class="fecha p-2 px-6">{{new Date(item.created_at).toLocaleString() }}</p>
                </div>
                <div class="absolute -bottom-0 right-px">
                  <a href="#" class="p-comentary">Ver comentarios</a>
                  <el-button class="btn_readBook" type="primary"
                    >Leer Libro</el-button
                  >
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
      products:[],
      slug: [],
      my_books: []
    }
  },
  async created() {

    //--------------------------------GET USER---------------------------------

    var user = localStorage.getItem('user') 
    if (user != null) {
      this.user = JSON.parse(user).user
    }

    //--------------------------------PAYMENT-----------------------------------------------

    if ((this.$route.query.status != null && this.$route.query.status == 'approved')||(this.$route.query.status != null && this.$route.query.status == 'in_process')) {
      await this.$axios
        .get(`${'https://api.mercadopago.com/v1/payments/' + this.$route.query.payment_id}`,{
            headers: {
              Authorization:
                'Bearer TEST-6706525738118846-082101-03ee4a59346a45ff4f27a6f2eb905cf4-775792906',
            },
          }
        )
        .then((res) => {
          console.log(res.data.additional_info.items)
          res.data.additional_info.items.forEach(data => {
            var product = {
              id_payment: data.id,
              title: data.title,
              unit_price: parseFloat(data.unit_price), 
              quantity: parseInt(data.quantity),
              description: data.description,
              picture_url: data.picture_url,
              category_id: data.category_id
            }
            this.products.push(product)
            
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
        active: true
      }

      const response = await this.$apidata({
        url: '/payments/',
        method: 'post',
        data: body
      })

      if(response.data.error == false){
        this.$router.replace({'query': null})
      }
    }

    //--------------------------------GET PAYMENT BY CLIENT---------------------------------
      console.log('***********************RESPONSE API***********************')
      const getPayCli = await this.$apidata({
        url: '/payments/' + this.user._id,
        method: 'get'
      })

      if(getPayCli.data.error == false){
        getPayCli.data.data.forEach(data => {
          data.products.forEach(product => {
            console.log('PRODUCT-----------------')
            data={
              created_at: data.created_at
            }
            Object.assign(product, data)
            this.my_books.push(product)

          })
        })
      }
      
      console.log(this.my_books)

  },
}
</script>
