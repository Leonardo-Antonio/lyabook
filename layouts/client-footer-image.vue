<template>
  <div>
    <div>
      <img class="absolute" style="left: 0px; bottom: 0px" :src="src" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
    },
  },
  data() {
    return {}
  },
}
</script>