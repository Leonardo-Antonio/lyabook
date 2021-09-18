<template>
  <div
    class="
      btn_dashboard
      w-full
      flex
      justify-center
      items-center
      h-12
      rounded-xl
      color_primary
    "
  >
    <div class="w-3/5">
      <i :class="icon"></i>
      <span class="pl-4 text_dashboard">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.text_dashboard {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 21px;
  color: #000;
}
.btn_dashboard {
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.3s;
}
</style>
