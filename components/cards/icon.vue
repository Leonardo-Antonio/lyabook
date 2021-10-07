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
      container-card-icon
    "
  >
    <div class="flex justify-center">
      <div class="flex flex-col justify-center text-center">
        <box-icon
          :name="icon"
          type="solid"
          color="#5e20e4"
          size="cssSize"
          style="width: 8rem"
        ></box-icon>
        <span class="text_title">{{ text }}</span>
      </div>
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

<style>
@media (max-width: 640px) {
  .container-card-icon {
    width: 100% !important;
  }
}
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

.container-card-icon {
  width: 17rem;
  height: 16rem;
}
</style>
