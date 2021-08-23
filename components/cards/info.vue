<template>
  <div
    class="
      bg_white
      flex
      items-center
      justify-center
      rounded-2xl
      hover:shadow-2xl hover:duration-500
      duration-500
      cursor-default
    "
    style="width: 17rem; height: 16rem"
  >
    <div class="flex justify-center">
      <div class="flex flex-col justify-center text-center">
        <span class="text_number">{{ count }}</span>
        <span class="text_title">{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.text_number {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 4rem;
  line-height: 21px;
  padding-bottom: 0.8rem;
  color: var(--primary);
}

.text_title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 21px;
  padding-top: 0.8rem;
  color: #000000;
}
</style>
