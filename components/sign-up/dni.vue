<template>
  <div class="w-4/5 h-screen flex items-center relative">
    <img
      class="absolute bottom-0 -left-12 z-0"
      src="/shapes/quadrate_circleminor.png"
      alt="quadrate_circleminor"
    />
    <div class="w-4/5 mx-auto">
      <div>
        <HeaderSignUp />

        <div class="w-1/2">
          <div class="input">
            <el-input
              class="mt-2"
              placeholder="Dni"
              v-model="data.dni"
              clearable
            />
            <el-input
              class="mt-2"
              placeholder="Password"
              v-model="data.password"
              show-password
            />
          </div>
          <div>
            <el-checkbox class="mt-4 mb-8" v-model="checked">
              Acepto los Términos y condiciones y las Políticas de privacidad.
            </el-checkbox>
          </div>

          <div>
            <button
              @click="signUp"
              :disabled="!checked"
              :class="{ 'cursor-not-allowed': !checked, 'btn_add_size': checked }"
            >
              <ButtonSemiRounded :valid="checked" name="Empezemos" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSignUp from './header'
import ButtonSemiRounded from '../buttons/btn-semirounded'

export default {
  components: {
    ButtonSemiRounded,
    HeaderSignUp,
  },

  data() {
    return {
      checked: false,
      data: {
        dni: '',
        password: '',
        rol: 'admin',
      },
    }
  },

  methods: {
    async signUp() {
      let data
      try {
        data = await this.$credentials({
          url: '/users/sign-up/dni',
          method: 'post',
          data: this.data,
        })
      } catch (error) {
        if (error.response) {
          console.log(error.response.data)
        }
      }
    },
  },
}
</script>
