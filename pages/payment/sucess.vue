<template>
  <ErrForbidden src="/images/sucess.png" />
</template>

<script>
import ErrForbidden from '../../components/error.vue'

export default {
  components: {
    ErrForbidden,
  },
  data() {
    return {}
  },
  async created() {
    console.log('--------------------PARAM---------------')
    
  },
}
</script>
