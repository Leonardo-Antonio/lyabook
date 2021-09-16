<template>
  <div>
    <div class="overflow-y-auto overflow-x-hidden" style="height: 85vh">
      <div class="p-4">
        <SaveFilesServer />
      </div>
    </div>
  </div>
</template>

<script>
import SaveFilesServer from '../../../../../components/dashboard/admin/book/files/pdfs'
export default {
  layout: 'admin',
  components: {
    SaveFilesServer,
  },
}
</script>
