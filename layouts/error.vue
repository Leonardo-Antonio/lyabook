<template>
  <ErrNotFount v-if="error.statusCode === 404" src="/images/404.png" />
</template>

<script>
import ErrNotFount from '../components/error'

export default {
  props: ['error'],
  components: {
    ErrNotFount,
  },
}
</script>
