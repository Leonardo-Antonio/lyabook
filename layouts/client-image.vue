<template>
  <div>
    <div>
      <img class="absolute" style="right: 0px; top: 0px" :src="src" />
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
