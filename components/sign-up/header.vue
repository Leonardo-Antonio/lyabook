<template>
  <div>
    <div>
      <h2 class="title-roboto mt-4 mb-1">Enamórate de la lectura</h2>
      <strong class="strong">Crea una cuenta en menos de 2 min</strong>
    </div>
    <div class="mt-4 mb-8">
      <p class="text-opacity" v-show="!verify">
        Llene este sencillo formulario <br />
        para registrar tus datos de usuario y crear tu cuenta en LyaBook
      </p>

      <p class="text-opacity" v-show="verify">
        Se le envio un correo con el códifo de verificación<br />
        Verifique su cuenta para comprobar que es usted.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    verify: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
