<template>
  <div>
    <div class="r-remove r-remove-tablet">
      <div class="footer flex justify-center px-8">
        <div
          class="conatiner-footer flex flex-row justify-center py-8"
          style="width: 80%"
        >
          <div class="container-column-1 w-1/5 mx-4">
            <div class="container-contact-us">
              <p class="title-footer title-contact-us">Contacto</p>
              <div
                class="footer-data conatiner-telephone flex flex-row"
                v-for="item of menu.contact"
                :key="item.text"
              >
                <box-icon :name="item.icon" color="#ffffff"></box-icon>
                <a :href="item.src"
                  ><p class="subtitle-footer number-phone">
                    {{ item.text }}
                  </p></a
                >
              </div>
            </div>

            <!-- <div class="container-follow-us pt-16">
              <p class="title-footer title-follow-us">Síguenos</p>
              <div class="footer-data flex flex-row">
                <div class="">
                  <box-icon
                    size="md"
                    name="facebook-circle"
                    type="logo"
                    color="#ffffff"
                  ></box-icon>
                </div>
                <div class="px-2">
                  <box-icon
                    size="md"
                    name="youtube"
                    type="logo"
                    color="#ffffff"
                  ></box-icon>
                </div>
                <div class="">
                  <box-icon
                    size="md"
                    name="instagram-alt"
                    type="logo"
                    color="#ffffff"
                  ></box-icon>
                </div>
              </div>
            </div> -->
          </div>
          <div class="container-column-2 w-1/5 mx-4">
            <p class="title-footer title-my-account">Información</p>
            <div
              class="footer-data my-profile flex flex-row"
              v-for="item of menu.info"
              :key="item.text"
              @click="info(item.position)"
            >
              <box-icon name="right-arrow" color="#ffffff"></box-icon>
              <a :href="item.src"
                ><p class="subtitle-footer profile">{{ item.text }}</p></a
              >
            </div>
          </div>
          <div class="container-column-3 w-1/5 mx-4">
            <p class="title-footer title-category">Publicación</p>

            <div
              class="footer-data adventure flex flex-row"
              v-for="item of menu.categories"
              :key="item.text"
              @click="info(item.position)"
            >
              <box-icon name="right-arrow" color="#ffffff"></box-icon>
              <a :href="item.src"
                ><p class="subtitle-footer profile">{{ item.text }}</p></a
              >
            </div>
          </div>
          <div class="container-column-4 w-1/5 mx-4">
            <div class="container-medium">
              <p class="title-footer title-medium">Soporte</p>
              <div
                class="footer-data frequent-questions flex flex-row"
                v-for="item of menu.support"
                :key="item.text"
              >
                <box-icon name="right-arrow" color="#ffffff"></box-icon>
                <a :href="item.src"
                  ><p class="subtitle-footer frequent-questions">
                    {{ item.text }}
                  </p></a
                >
              </div>
            </div>
            <div class="container-payment-methods pt-8">
              <p class="title-footer title-payment-methods">Métodos de pago</p>
              <div class="footer-data flex flex-row items-center">
                <img
                  v-for="method of paymentsMethods"
                  :key="method"
                  class="payment-card pl-1"
                  :src="method"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="r-see r-remove-desktop container-footer-father">
      <el-collapse accordion class="r-px-2 footer-container-response">
        <el-collapse-item title="Contacto" name="1">
          <div>
            <ul>
              <li class="pt-4" v-for="item of menu.contact" :key="item.text">
                <a :href="item.src">
                  <div class="flex items-center">
                    <box-icon name="phone" color="#F9F9FF"></box-icon>
                    <span class="pl-2">{{ item.text }}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </el-collapse-item>

        <el-collapse-item title="Información" name="2">
          <div>
            <ul>
              <li class="pt-4" v-for="item of menu.info" :key="item.text">
                <div class="flex items-center" @click="info(item.position)">
                    <box-icon name="right-arrow" color="#F9F9FF"></box-icon>
                    <a :href="item.src">
                      <p class="pl-2">{{ item.text }}</p>
                    </a>
                </div>
              </li>
            </ul>
          </div>
        </el-collapse-item>

        <el-collapse-item title="Publicación" name="3">
          <div>
            <ul>
              <li class="pt-4" v-for="item of menu.categories" :key="item.text">
                <div class="flex items-center" @click="info(item.position)">
                    <box-icon name="right-arrow" color="#F9F9FF"></box-icon>
                    <a :href="item.src">
                      <p class="pl-2">{{ item.text }}</p>
                    </a>
                </div>
              </li>
            </ul>
          </div>
        </el-collapse-item>

        <el-collapse-item title="Soporte" name="4">
          <div>
            <ul>
              <li class="pt-4" v-for="item of menu.support" :key="item.text">
                <div class="flex items-center">
                  <box-icon name="right-arrow" color="#F9F9FF"></box-icon>
                  <a :href="item.src">
                    <span class="pl-2">{{ item.text }}</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paymentsMethods: [
        '/images/american_express_logo.png',
        '/images/MasterCard_Logo.png',
        '/images/Visa_Inc._logo.png',
      ],
      menu: {
        contact: [
          {
            text: '+51 993 583 805',
            src: 'tel:+51 993 583 805',
            icon: 'phone',
          },
          {
            text: 'atenciónalcliente@lyabook.com',
            src: 'mailto:atenciónalcliente@lyabook.com',
            icon: 'mail-send',
          },
          {
            text: 'Paseo de la República 5613- Miraflores. Lima, Perú',
            src: '',
            icon: 'map',
          },
        ],
        info: [
          {
            text: 'Mi Perfil',
            src: '/mi-cuenta',
            position: '0',
          },
          {
            text: 'Mis Ordenes',
            src: '/mi-cuenta',
            position: '1',
          },
          {
            text: 'Mis Libros',
            src: '/mi-cuenta',
            position: '2',
          },
          
        ],
        categories: [
          {
            text: 'Publicar Texto',
            src: '/mi-cuenta',
            position: '3',
          },
          {
            text: 'Texto Publicados',
            src: '/mi-cuenta',
            position: '4',
          },
        ],
        support: [
          {
            text: 'Nosotros',
            src: '/nosotros',
          },
          {
            text: 'Libro de reclamaciones',
            src: '/atencion-al-cliente/libro-reclamaciones',
          }
        ],
      },
    }
  },
  methods: {
    info(position_value) {
      localStorage.setItem('tab', JSON.stringify({ position: position_value }))
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
.payment-card {
    width: 20%;
    height: 50%;
}

@media (min-width: 1025px) {
  .conatiner-footer {
    width: 100%;
  }
}
</style>
