<template>
  <div>
    <ListAdmin />
  </div>
</template>

<script>
import ListAdmin from '../../../../components/dashboard/manager/admins'
export default {
  layout: 'manager',
  components: {
    ListAdmin,
  }
}
</script>
