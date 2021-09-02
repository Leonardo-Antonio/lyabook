<template>
  <div>
    <div class="shadow_card flex justify-center items-center relative">
      <img class="absolute -right-20 -top-20" src="/images/book.svg" alt="" />
      <div>
        <div>
          <div>
            <div>
              <div class="flex justify-center">
                <img
                  class="mb-8 scale"
                  src="/logos/main.svg"
                  alt="logo_morsac"
                />
              </div>
            </div>

            <div class="flex justify-center container__login">
              <div class="w-3/4 z-40">
                <el-input
                  class="mt-4"
                  placeholder="Ingrese su email o dni"
                  v-model="email_dni"
                  clearable
                />
                <el-input
                  class="mt-4"
                  placeholder="Ingrese su password"
                  v-model="password"
                  show-password
                />
                <div>
                  <div>
                    <button
                      class="btn_rounded_primary h-10 w-full mt-4 btn_add_size"
                      @click="logIn"
                    >
                      Ingresar
                    </button>
                  </div>
                  <div>
                    <button
                      class="btn_border_line h-10 w-full mt-4 btn_add_size"
                    >
                      Crear cuenta
                    </button>
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
      email_dni: '',
      password: '',
    }
  },
  methods: {
    async logIn() {
      let emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
      if (emailRegex.test(this.email_dni)) {
        const data = {
          email: this.email_dni,
          password: this.password,
        }
        try {
          const response = await this.$credentials({
            url: '/users/log-in/email',
            method: 'post',
            data: data,
          })
        } catch (error) {
          console.log(error)
        }
      } else {
        if (this.email_dni.length === 8) {
          const data = {
            dni: this.email_dni,
            password: this.password,
          }
          try {
            const response = await this.$credentials({
              url: '/users/log-in/dni',
              method: 'post',
              data: data,
            })
          } catch (error) {
            console.log(error)
          }
        } else {
          this.$message.error('Ingrese un email o dni valido')
        }
      }
    },
  },
}
</script>

<style scoped>
.shadow_card {
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 40px;

  height: 30rem;
  width: 30rem;
}
</style>
