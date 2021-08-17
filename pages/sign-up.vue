<template>
  <div class="relative">
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

          <img
            class="absolute bottom-10 -left-24"
            src="/images/person_book.svg"
            alt="circle_quadrate"
            width="380"
          />
          <div>
            <div class="flex justify-center mt-28 mb-20">
              <img src="/logos/main.svg" alt="" />
            </div>

            <div class="z-20 absolute left-0 right-0 mx-auto">
              <div class="flex flex-col">
                <div class="flex justify-center">
                  <button class="w-16 text-left link_mutex" @click="showEmail">
                    Email
                  </button>
                </div>

                <div class="flex justify-center">
                  <button class="w-16 text-left link_mutex" @click="showDni">
                    Dni
                  </button>
                </div>
              </div>
            </div>

            <footer class="absolute bottom-0 w-full flex justify-center">
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

        <SignUpEmail v-show="email" />
        <SignUpDni v-show="dni" />
      </div>
    </div>
  </div>
</template>

<script>
import SignUpEmail from '../components/sign-up/email'
import SignUpDni from '../components/sign-up/dni'

export default {
  components: {
    SignUpEmail,
    SignUpDni,
  },
  data() {
    return {
      email: true,
      dni: false,
    }
  },
  methods: {
    showEmail() {
      if (this.email === true) {
        return
      }
      this.email = !this.email
      this.dni = !this.dni
    },
    showDni() {
      if (this.dni === true) {
        return
      }
      this.dni = !this.dni
      this.email = !this.email
    },
  },
}
</script>

<style scoped>
.border-panel {
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}
</style>
