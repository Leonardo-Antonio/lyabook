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
              v-model="$route.query.code"
              disabled
            />
          </div>
          <div class="py-4"></div>
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
  async mounted() {
    const { id, code } = this.$route.query

    try {
      const response = await this.$credentials({
        url: `/users/verification/id/${id}/code/${code}`,
        method: 'post',
      })
      if (response.status == 201) {
        this.$router.push('/login')
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data)
      }
    }
  },
}
</script>
