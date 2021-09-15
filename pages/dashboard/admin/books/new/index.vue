<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden" style="height: 85vh">
      <div class="p-4">
        <div>
          <div class="flex flex-row justify-between">
            <h2 class="title_admin">Nuevo libro</h2>
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
