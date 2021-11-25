<template>
  <div>
    <div class="flex justify-center container mx-auto">
      <div>
        <img class="absolute" style="right: 0px; top: 0px" :src="src" />
      </div>

      <div class="flex justify-center w-3/4 r-w-full">
        <div class="pt-8 w-full">
          <!-- header -->
          <div class="flex items-center justify-center px-2">
            <div class="image-logo">
              <nuxt-link :to="`/`">
                <img src="/images/LyaBookLogo.svg" width="" />
              </nuxt-link>
            </div>
            <div class="search-autocomplete">
              <el-autocomplete
                v-model="state"
                :fetch-suggestions="querySearchAsync"
                placeholder="Busca un libro..."
                @select="handleSelect"
                class="input-search-autocomplete"
              ></el-autocomplete>
            </div>
            <div class="enlaces-header">
              <nuxt-link :to="`/libros/`">
                <h1>Libros</h1>
              </nuxt-link>
            </div>
            <div class="icon-login">
              <div>
                <box-icon
                  name="user"
                  @click="showLogin = !showLogin"
                ></box-icon>
              </div>
            </div>
            <div class="icon-shopping-cart">
              <box-icon
                name="cart"
                animation="tada"
                @click="showDrawer = true"
              ></box-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
  },
  data() {
    return {
      state: '',
      links: [],
      timeout: null,
    }
  },
  methods: {
    querySearchAsync(queryString, cb) {
      var links = this.links
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 0 * Math.random())
    },
    createFilter(queryString) {
      return (link) => {
        return link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      }
    },
    handleSelect(item) {
      console.log(item)
    },
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

.container-tobuy-drawer {
  background: var(--primary);
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 70px;
  color: #ffffff;
}
.title-drawer {
  font-family: 'Baloo Chettan 2';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 70px;
  color: var(--primary);
}
.name-drawer {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #000;
}
.price_before {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  -webkit-text-decoration-line: line-through;
  text-decoration-line: line-through;
  color: #7f7f7f;
}
.price_current {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #5e20e4;
}
.container-login {
  box-shadow: 0px 4px 20px #5e20e340;
  border-radius: 7px;
}

.button-log:hover {
  color: var(--primary);
  background: var(--secundary);
}

.button-log {
  border: unset;
  color: #5e20e3a1;
  height: 3rem;
  font-family: Roboto;
}
</style>
