<template>
  <div>
    <ListAdmin />
  </div>
</template>

<script>
import ListAdmin from '../../../../components/dashboard/manager/admins/admins'
export default {
  layout: 'manager',
  components: {
    ListAdmin,
  }
}
</script>
