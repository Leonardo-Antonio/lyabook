<template>
  <div>
    <div>
      <div>
        <h1 class="title">Bienvenido Leonardo Antonio</h1>
        <p class="subtitle pt-4">
          Aquí un resumen de lo más importante de esta semana
        </p>
      </div>

      <div class="pt-20">
        <div class="w-3/5 mx-auto flex flex-row justify-between">
          <div style="width: 30%;">
            <div class="card_home flex justify-center items-center">
              <div>
                <div class="flex flex-col">
                  <div class="flex justify-center">
                    <strong class="number_card">20</strong>
                  </div>
                  <div class="flex justify-center">
                    <p class="text_card">Ventas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style="width: 30%;">
            <div class="card_home flex justify-center items-center">
              <div>
                <div class="flex flex-col">
                  <div class="flex justify-center">
                    <strong class="number_card">20</strong>
                  </div>
                  <div class="flex justify-center">
                    <p class="text_card">Ventas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style="width: 30%;">
            <div class="card_home flex justify-center items-center">
              <div>
                <div class="flex flex-col">
                  <div class="flex justify-center">
                    <strong class="number_card">20</strong>
                  </div>
                  <div class="flex justify-center">
                    <p class="text_card">Ventas</p>
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

<style scoped>
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 21px;
  /* or 87% */

  color: #000000;
}
.subtitle {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 21px;
  color: #8d8d8d;
}

.card_home {
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 15rem;
}

.number_card {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 21px;
  color: #5e20e4;
}

.text_card {
  padding-top: 1rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
</style>
