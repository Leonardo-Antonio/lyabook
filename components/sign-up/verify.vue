<template>
  <div class="w-4/5 h-screen flex items-center relative">
    <img
      class="absolute bottom-0 -left-12 z-0"
      src="/shapes/quadrate_circleminor.png"
      alt="quadrate_circleminor"
    />
    <div class="w-4/5 mx-auto">
      <div>
        <HeaderSignUp :verify="true" />

        <div class="w-1/2">
          <div class="input">
            <el-input
              class="mt-2"
              placeholder="Ingrese el codigo de verificación"
              v-model="verification_code"
              clearable
            />
          </div>
          <div class="py-4">
            <button
              @click="signUp"
              :disabled="!checked"
              :class="{ 'cursor-not-allowed': !checked, btn_add_size: checked }"
            >
              <ButtonSemiRounded :valid="checked" name="Validar" />
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

  watch: {
    verification_code: function (val) {
      if (this.verification_code.length === 8) {
        this.checked = true
      }
    },
  },

  data() {
    return {
      checked: false,
      verification_code: '',
    }
  },

  methods: {
    async signUp() {
      try {
        const response = await this.$credentials({
          url: '/users/verify',
          method: 'post',
          data: {
            verification_code: this.verification_code,
            email: 'leo2001.nl08@gmail.com',
          },
        })
        if(response.status == 201) {
          this.$router.push('/login')
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response.data)
        }
      }
    },
  },
}
</script>
