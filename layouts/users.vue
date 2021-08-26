<template>
  <div class="relative">
    <img
      class="absolute bottom-0 right-0"
      src="/shapes/circle_lines.png"
      alt="circle_lines"
    />
    <img
      class="absolute right-0"
      src="/shapes/circle_quadrate.png"
      alt="circle_quadrate"
    />

    <div class="w-full mx-auto h-screen">
      <div class="flex flex-row">
        <div class="w-1/3 border-panel relative z-10 h-screen">
          <img
            class="absolute top-0 left-0"
            src="/shapes/circleofcircleminor.png"
            alt="circleofcircleminor"
          />

          <img
            class="absolute bottom-10 -left-24"
            src="/images/person_book.svg"
            alt="circle_quadrate"
            width="380"
          />
          <div>
            <div class="flex justify-center mt-28 mb-20">
              <img src="/logos/main.svg" alt="" style="width: 12rem" />
            </div>

            <div class="z-20 absolute left-0 right-0 mx-auto">
              <div class="flex flex-col">
                <div>
                  <div>
                    <div class="flex justify-center">
                      <div class="flex justify-center py-1" style="width: 40%">
                        <nuxt-link
                          to="dni"
                          class="
                            w-16
                            btn_panel
                            flex
                            justify-center
                            items-center
                            rounded-2xl
                            text-left
                            link_mutex
                          "
                        >
                          <span>Dni</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="flex justify-center">
                      <div class="flex justify-center py-1" style="width: 40%">
                        <nuxt-link
                          to="email"
                          class="
                            w-16
                            btn_panel
                            flex
                            justify-center
                            items-center
                            rounded-2xl
                            text-left
                            link_mutex
                          "
                        >
                          <span>Email</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer class="absolute bottom-0 w-full flex justify-center">
              <span class="text-opacity pt-2 pb-2">
                Powered by
                <a href="https://github.com/Leonardo-Antonio" target="_blank">
                  @Leonardo</a
                >
                &
                <a href="https://github.com/AlexaJNavarro" target="_blank">
                  @Alexandra</a
                >
              </span>
            </footer>
          </div>
        </div>

        <nuxt></nuxt>
      </div>
    </div>
  </div>
</template>
<style scoped>
.border-panel {
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}

.btn_panel {
  height: 3rem;
  width: 100%;
}

.btn_panel.nuxt-link-exact-active {
  background-color: var(--primary);
}

.btn_panel.nuxt-link-exact-active > span {
  color: #fff;
  font-weight: bold;
}

.btn_panel > span {
  color: #000;
  font-weight: 400;
}
</style>
