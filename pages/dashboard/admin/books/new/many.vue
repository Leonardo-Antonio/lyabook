<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden r-pt-1" style="height: 85vh">
      <div class="p-4 r-space-container">
        <SaveBookMany />
      </div>
    </div>
  </div>
</template>

<script>
import SaveBookMany from '../../../../../components/dashboard/admin/book/many'
export default {
  layout: 'admin',
  components: {
    SaveBookMany,
  },
}
</script>
