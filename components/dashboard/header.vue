<template>
  <div class="h-20 bg_white flex items-center">
    <div class="flex justify-between w-full">
      <div class="pl-8">
        <div
          class="
            w-40
            h-10
            rounded-full
            bg_second
            color_white
            flex
            justify-center
            items-center
          "
        >
          <span>{{data.rol}}</span>
        </div>
      </div>

      <div class="pr-8">
        <div class="flex flex-row">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
          <div class="flex flex-col pl-2">
            <strong>{{data.name}}</strong>
            <span>{{data.auth}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: 'example',
        auth: 'example',
        rol: 'example'
      },
    }
  },

  mounted() {
    const admin = JSON.parse(localStorage.getItem('user').toString())
    this.data.name = admin.user.name
    this.data.rol = admin.user.rol
    if (admin.user.email != undefined) {
      this.data.auth = admin.user.email
    } else {
      this.data.auth = admin.user.dni
    }
  },
}
</script>
