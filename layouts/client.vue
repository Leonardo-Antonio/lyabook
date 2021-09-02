<template>
  <div>
    <div class="flex justify-center container mx-auto">
      <div class="flex justify-center w-3/4">
        <div class="pt-8 w-full">
          <!-- header -->
          <div class="flex items-center justify-center">
            <div class="image-logo">
              <img src="/images/LyaBook.svg" width="40%" />
            </div>
            <div class="search-autocomplete">
              <el-autocomplete
                v-model="state"
                :fetch-suggestions="querySearchAsync"
                placeholder="Please input"
                @select="handleSelect"
                class="input-search-autocomplete"
                style="border-color: #021639 !important"
              ></el-autocomplete>
            </div>
            <div class="enlaces-header">
              <a
                href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
                ><h1>Libros</h1></a
              >
            </div>
            <div class="enlaces-header">
              <a
                href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
                ><h1>Promociones</h1></a
              >
            </div>
            <div class="icon-login">
              <box-icon name="user"></box-icon>
            </div>
            <div class="icon-shopping-cart">
              <box-icon name="cart" animation="tada"></box-icon>
            </div>
          </div>

          <nuxt />
          
        </div>
      </div>
    </div>
    <div class="footer flex justify-center px-8">
      <div class="conatiner-footer flex flex-row justify-center w-3/4 py-8">
        <div class="container-column-1 w-1/5">
          <div class="container-contact-us">
            <p class="title-footer title-contact-us">Contacto</p>
            <div class="footer-data conatiner-telephone flex flex-row">
              <box-icon name="phone" color="#ffffff"></box-icon>
              <a href="tel:+51 993 583 805"
                ><p class="subtitle-footer number-phone">+51 993 583 805</p></a
              >
            </div>
            <div class="footer-data container-mail flex flex-row">
              <box-icon name="mail-send" color="#ffffff"></box-icon>
              <a href="mailto:atenciónalcliente@lyabook.com"
                ><p class="subtitle-footer direction-mail">
                  atenciónalcliente@lyabook.com
                </p></a
              >
            </div>
            <div class="footer-data conatiner-location flex flex-row">
              <box-icon name="location-plus" color="#ffffff"></box-icon>
              <p class="subtitle-footer location">
                Paseo de la República 5613- Miraflores. Lima, Perú
              </p>
            </div>
          </div>

          <div class="container-follow-us pt-16">
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
          </div>
        </div>
        <div class="container-column-2 w-1/5">
          <p class="title-footer title-my-account">Contacto</p>
          <div class="footer-data my-profile flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer profile">Mi Perfil</p></a
            >
          </div>
          <div class="footer-data favorite flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <NuxtLink to="/"
              ><p class="subtitle-footer favorite">Mis favoritos</p></NuxtLink
            >
          </div>
          <div class="footer-data orders flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer order">Mis órdenes</p></a
            >
          </div>
          <div class="footer-data us flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer us">Nosotros</p></a
            >
          </div>
          <div class="footer-data contact-us flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer contact-us">Contáctanos</p></a
            >
          </div>
        </div>
        <div class="container-column-3 w-1/5">
          <p class="title-footer title-category">Categorías</p>
          <div class="footer-data romance flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer romance">Romance</p></a
            >
          </div>
          <div class="footer-data comedy flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer comedy">Comedia</p></a
            >
          </div>
          <div class="footer-data mystery flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer mystery">Misterio</p></a
            >
          </div>
          <div class="footer-data footer-data terror flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer terror">Terror</p></a
            >
          </div>
          <div class="footer-data adventure flex flex-row">
            <box-icon name="right-arrow" color="#ffffff"></box-icon>
            <a
              href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
              ><p class="subtitle-footer adventure">Aventura</p></a
            >
          </div>
        </div>
        <div class="container-column-4 w-1/5">
          <div class="container-medium">
            <p class="title-footer title-medium">Soporte</p>
            <div class="footer-data frequent-questions flex flex-row">
              <box-icon name="right-arrow" color="#ffffff"></box-icon>
              <a
                href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
                ><p class="subtitle-footer frequent-questions">
                  Preguntas frecuentes
                </p></a
              >
            </div>
            <div class="footer-data complaints-book flex flex-row">
              <box-icon name="right-arrow" color="#ffffff"></box-icon>
              <a
                href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
                ><p class="subtitle-footer complaints-book">
                  Libro de reclamaciones
                </p></a
              >
            </div>
            <div class="footer-data terms-and-conditions flex flex-row">
              <box-icon name="right-arrow" color="#ffffff"></box-icon>
              <a
                href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
                ><p class="subtitle-footer terms-and-conditions">
                  Términos y condiciones
                </p></a
              >
            </div>
            <div class="footer-data privacy-policies flex flex-row">
              <box-icon name="right-arrow" color="#ffffff"></box-icon>
              <a
                href="https://www.figma.com/file/lUOxdnP8A7T3zXvxAJVSWp/LyaBook?node-id=0%3A1"
                ><p class="subtitle-footer privacy-policies">
                  Políticas de privacidad
                </p></a
              >
            </div>
          </div>
          <div class="container-payment-methods pt-8">
            <p class="title-footer title-payment-methods">Métodos de pago</p>
            <div class="footer-data flex flex-row">
              <img
                class="payment-card"
                src="/images/metodo-de-pago-express.png"
              />
              <img
                class="payment-card"
                src="/images/metodo-de-pago-express.png"
              />
              <img
                class="payment-card"
                src="/images/metodo-de-pago-express.png"
              />
              <img
                class="payment-card"
                src="/images/metodo-de-pago-express.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-author py-4">
      <p class="text-footer">Powered by</p>
      <div class="flex justify-center">
        <a href="https://github.com/AlexaJNavarro" target="_blank"
          ><h1 class="text-footer">@AlexaJNavarro</h1></a
        >
        <h1 class="text-footer px-2">and</h1>
        <a href="https://github.com/Leonardo-Antonio" target="_blank"
          ><h1 class="text-footer">@Leonardo-Antonio</h1></a
        >
      </div>
    </div>
  </div>
</template>


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
  font-size: 20px;
  line-height: 31px;
  text-align: center;

  color: #ffffff;
}

.location {
  width: 80%;
}
</style>