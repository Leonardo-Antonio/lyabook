<template>
  <div class="btn-semiroudend" :class="{'bg_primary': valid, 'bg_opacity2': !valid}">
    <span class="text-btn">{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    valid: {
      type: Boolean,
      required: true,
      default: false
    }
  },
}
</script>

<style scoped>
.btn-semiroudend {
  border-radius: 8px;
  width: 10rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}


.text-btn {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
  color: #f2f2f2;
}
</style>
