<template>
  <div class="relative">
    <img
      class="absolute bottom-8 -left-24 z-20"
      src="/images/person_reading.png"
      alt="circle_quadrate"
      width="550"
    />
    <img
      class="absolute bottom-0 right-0"
      src="/shapes/circle_lines.png"
      alt="circle_lines"
    />
    <img
      class="absolute right-0"
      src="/shapes/circle_quadrate.png"
      alt="circle_quadrate"
    />

    <div class="w-full mx-auto h-screen">
      <div class="flex flex-row">
        <div class="w-1/3 border-panel relative z-10">
          <img
            class="absolute top-0 left-0"
            src="/shapes/circleofcircleminor.png"
            alt="circleofcircleminor"
          />
          <div>
            <div class="flex justify-center mt-28 mb-20">
              <img src="/logos/main.svg" alt="" />
            </div>

            <div>
              <div class="flex flex-col">
                <div class="flex justify-center">
                  <button class="w-16 text-left link_mutex">Email</button>
                </div>

                <div class="flex justify-center">
                  <button class="w-16 text-left link_mutex">Dni</button>
                </div>
              </div>
            </div>

            <footer
              class="absolute bottom-0 w-full flex justify-center"
            >
              <span class="text-opacity pt-2 pb-2">
                Powered by
                <a href="https://github.com/Leonardo-Antonio" target="_blank">
                  @Leonardo</a
                >
                &
                <a href="https://github.com/AlexaJNavarro" target="_blank">
                  @Alexandra</a
                >
              </span>
            </footer>
          </div>
        </div>

        <div class="w-4/5 h-screen flex items-center relative">
          <img
            class="absolute bottom-0 -left-12 z-0"
            src="/shapes/quadrate_circleminor.png"
            alt="quadrate_circleminor"
          />
          <div class="w-4/5 mx-auto">
            <div>
              <div>
                <div>
                  <h2 class="title-roboto mt-4 mb-1">
                    Enamórate de la lectura
                  </h2>
                  <strong class="strong"
                    >Crea una cuenta en menos de 2 min</strong
                  >
                </div>
                <div class="mt-4 mb-8">
                  <p class="text-opacity">
                    Llene este sencillo formulario <br />
                    para registrar tus datos de usuario y crear tu cuenta en
                    LyaBook
                  </p>
                </div>
              </div>

              <div class="w-1/2">
                <div class="flex">
                  <el-input
                    class="mr-1"
                    placeholder="Nombres"
                    v-model="input"
                    clearable
                  />
                  <el-input
                    class="ml-1"
                    placeholder="Apellidos"
                    v-model="input"
                    clearable
                  />
                </div>
                <div>
                  <el-input
                    class="mt-2"
                    placeholder="Email"
                    v-model="input"
                    clearable
                  />
                  <el-input
                    class="mt-2"
                    placeholder="Password"
                    v-model="input"
                    show-password
                  />
                </div>
                <div>
                  <el-checkbox class="mt-2 mb-2" v-model="checked">
                    Acepto los Términos y condiciones y las Políticas de
                    privacidad.
                  </el-checkbox>
                </div>

                <div>
                  <button>
                    <btn-semirounded name="Empezar" />
                  </button>
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
export default {}
</script>

<style scoped>
.border-panel {
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}
</style>
