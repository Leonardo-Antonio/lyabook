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
      cursor-pointer
    "
    style="width: 17rem; height: 16rem"
  >
    <div class="flex justify-center">
      <div class="flex flex-col justify-center text-center">
        <div class="flex justify-center">
          <img class="w-2/6 color_primary" :src="src" alt="" />
        </div>
        <NuxtLink :to="to">
          <div class="flex justify-center w-full">
            <div :href="href" class="pt-6 btn_add_size w-2/3">
              <div
                class="
                  btn_rounded_primary
                  h-10
                  flex
                  items-center
                  justify-center
                "
              >
                <span>{{ text }}</span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    to: {
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
.text_number {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 4rem;
  line-height: 21px;
  padding-bottom: 0.8rem;
  color: var(--primary);
}

.pd08 {
  padding-top: 0.8rem;
}
</style>
