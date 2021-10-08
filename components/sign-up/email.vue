<template>
  <div class="w-4/5 h-screen flex items-center relative mobile_w-full">
    <img
      class="absolute bottom-0 -left-12 z-0"
      src="/shapes/quadrate_circleminor.png"
      alt="quadrate_circleminor"
    />
    <div class="w-4/5 mx-auto mobile_w-full r-space-container">
      <div>
        <HeaderSignUp />

        <div class="w-1/2 mobile_w-full">
          <div class="flex input">
            <el-input
              class="mr-1"
              placeholder="Nombres"
              v-model="data.name"
              clearable
            />
            <el-input
              class="ml-1"
              placeholder="Apellidos"
              v-model="data.lastname"
              clearable
            />
          </div>
          <div class="input">
            <el-input
              class="mt-2"
              placeholder="Email"
              v-model="data.email"
              clearable
            />
            <el-input
              class="mt-2"
              placeholder="Password"
              v-model="data.password"
              show-password
            />
          </div>
          <div class="r-white-space">
            <el-checkbox class="mt-4 mb-8" v-model="checked">
              Acepto los Términos y condiciones y las Políticas de privacidad.
            </el-checkbox>
          </div>

          <div>
            <button
              @click="signUp"
              :disabled="!checked"
              :class="{ 'cursor-not-allowed': !checked, btn_add_size: checked }"
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
import { mapMutations } from 'vuex'

export default {
  components: {
    ButtonSemiRounded,
    HeaderSignUp,
  },

  data() {
    return {
      data: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        rol: 'client',
      },
      checked: false,
    }
  },
  methods: {
    async signUp() {
      try {
        const response = await this.$credentials({
          method: 'post',
          url: '/users/sign-up/email',
          data: this.data,
        })
        this.verify(this.data.email)
        this.$router.push('verify')
      } catch (error) {}
    },
    ...mapMutations(['verify']),
  },
}
</script>
