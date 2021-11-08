<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden r-pt-1" style="height: 85vh">
      <div class="p-4 r-space-container ">
        <div>
          <div class="flex flex-row justify-between mobile_vertical">
            <div class="flex flex-row">
              <nuxt-link to="/dashboard/admin/books">
                <box-icon name="left-arrow-alt" color="#021639"></box-icon>
              </nuxt-link>
              <h2 class="title_admin pl-4">Nuevo libro</h2>
            </div>
            <div>
              <nuxt-link to="new/many">
                <div
                  class="
                    bg_primary
                    rounded-full
                    flex
                    justify-center
                    items-center
                    btn_save_change
                    mobile_w-full
                  "
                >
                  <span class="flex justify-center items-center">
                    Registro masivo
                  </span>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <NewOneBook />
      </div>
    </div>
  </div>
</template>

<script>
import NewOneBook from '../../../../../components/dashboard/admin/book/new'
export default {
  layout: 'admin',
  components: {
    NewOneBook,
  },
}
</script>
