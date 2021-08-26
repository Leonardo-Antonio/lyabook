<template>
  <div
    class="h-screen flex justify-center items-center relative overflow-hidden"
  >
    <img
      class="absolute rotate"
      style="left: -150px; bottom: -150px"
      src="/shapes/circle_lines_points.png"
      alt=""
    />

    <img
      class="absolute"
      style="left: -80px; top: -150px; width: 32%"
      src="/shapes/rectangule_claro.png"
      alt=""
    />

    <img
      class="absolute rotate"
      style="left: 20rem; top: 0; width: 15%"
      src="/shapes/circle_big_circle_small.png"
      alt=""
    />

    <img
      class="absolute z-10"
      style="right: -100px; bottom: -250px; width: 40%"
      src="/shapes/rectangle_primary.png"
      alt=""
    />

    <img
      class="absolute"
      style="right: -150px; top: -180px; width: 40%"
      src="/shapes/circle_claro_big.png"
      alt=""
    />

    <img
      class="absolute rotate"
      style="right: -150px; top: -180px; width: 30%; transform: rotate(250deg)"
      src="/shapes/circle_lines_points.png"
      alt=""
    />

    <img
      class="absolute -left-20 right-0 mx-auto -top-14"
      src="/shapes/circle_small_primary.png"
      alt=""
    />

    <div>
      <div class="h-screen flex justify-center items-center relative">
        <img
          class="absolute bottom-0 z-20"
          src="/images/man_login_key.svg"
          style="right: 385px"
          alt=""
        />
        <img
          class="absolute bottom-0 z-20"
          style="right: -155px"
          src="/images/woman_login_key.svg"
          alt="woman_login_key"
        />
        <LogIn />
      </div>
    </div>
  </div>
</template>

<script>
import LogIn from '../components/login/form'

export default {
  components: {
    LogIn,
  },
}
</script>
