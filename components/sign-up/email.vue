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
          <div class="flex">
            <el-input
              class="mr-1"
              placeholder="Nombres"
              v-model="signup.name"
              clearable
            />
            <el-input
              class="ml-1"
              placeholder="Apellidos"
              v-model="signup.lastname"
              clearable
            />
          </div>
          <div>
            <el-input
              class="mt-2"
              placeholder="Email"
              v-model="signup.email"
              clearable
            />
            <el-input
              class="mt-2"
              placeholder="Password"
              v-model="signup.password"
              show-password
            />
          </div>
          <div>
            <el-checkbox class="mt-4 mb-8" v-model="checked">
              Acepto los Términos y condiciones y las Políticas de privacidad.
            </el-checkbox>
          </div>

          <div>
            <button>
              <ButtonSemiRounded name="Empezemos" />
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
    HeaderSignUp
  },

  data() {
    return {
      signup: {
        name: '',
        lastname: '',
        email: '',
        password: '',
      }
    }
  }
}
</script>
