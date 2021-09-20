<template>
  <div class="w-full h-screen overflow-hidden">
    <div class="relative">
      <img
        class="absolute z-10"
        style="width: 40rem; left: -10rem; top: -10rem"
        src="/shapes/rectangule_claro.png"
        alt="rectangule_claro"
      />

      <img
        class="absolute z-20 rotate"
        style="left: 5rem; top: -10rem"
        src="/shapes/circle_big_circle_small.png"
        alt="circle_big_circle_small"
      />

      <img
        class="absolute"
        style="top: -8rem; right: -10rem; transform: rotate(-80deg)"
        src="/shapes/circle_lines_points.png"
        alt="circle_lines_points"
      />

      <img
        class="absolute"
        style="top: 5rem; right: 30rem; transform: rotate(-80deg)"
        src="/shapes/circle_small_primary.png"
        alt="circle_small_primary"
      />

      <div class="w-full h-screen overflow-hidden relative">
        <img
          class="absolute"
          style="width: 45rem; right: -15rem; bottom: -15rem"
          src="/shapes/rectangle_primary.png"
          alt="rectangle_primary"
        />

        <img
          class="absolute rotate"
          style="right: 10rem; bottom: 8rem"
          src="/shapes/circle_secondary_circle_primary.png"
          alt="circle_secondary_circle_primary"
        />
      </div>

      <img
        class="absolute"
        style="width: 35rem; left: -10rem; bottom: -6rem"
        src="/shapes/circle_lines_points.png"
        alt="rectangle_primary"
      />

      <div>
        <img
          class="absolute z-40 left-0 right-0 top-0 bottom-0 m-auto"
          :src="src"
          alt="403"
        />
      </div>

      <div
        class="disappear-3 bg_primary rounded-full absolute"
        style="width: 1.2rem; height: 1.2rem; left: 25rem; top: 20rem"
      ></div>

      <div
        class="disappear-5 bg_second rounded-full absolute z-30"
        style="width: 1.2rem; height: 1.2rem; right: 45rem; top: 1rem"
      ></div>

      <div
        class="disappear-4 bg_primary rounded-full absolute z-30"
        style="width: 1.2rem; height: 1.2rem; left: 45rem; bottom: 8rem"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        }
    }
}
</script>
