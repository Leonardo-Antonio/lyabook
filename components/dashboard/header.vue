<template>
  <div class="h-20 bg_white flex items-center mobile_container-admin_header">
    <div class="flex justify-between w-full">
      <div class="pl-8">
        <div
          class="
            mobile-admin_header-rol
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
          <span>{{ data.rol }}</span>
        </div>
      </div>

      <div class="pr-8">
        <div class="flex flex-row">
          <el-avatar :src="data.src"></el-avatar>
          <div class="flex flex-col pl-2">
            <strong>{{ data.name }}</strong>
            <span class="mobile_admin-admin_header-item_remove">{{
              data.auth
            }}</span>
            <span class="mobile_admin-admin_header-item_show color_primary"
              ><nuxt-link to="/dashboard/admin/mi-cuenta"
                >Ver perfil</nuxt-link
              ></span
            >
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
        rol: 'example',
        src: 'http://uxpanol.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
      },
    }
  },

  mounted() {
    const admin = JSON.parse(localStorage.getItem('user').toString())
    this.data.name = admin.user.name
    this.data.rol = admin.user.rol
    this.data.src = admin.user.src = !undefined ? admin.user.src : this.data.src
    if (admin.user.email != undefined) {
      this.data.auth = admin.user.email
    } else {
      this.data.auth = admin.user.dni
    }
  },
}
</script>

<style>
.mobile_admin-admin_header-item_show {
  display: none;
}
@media (max-width: 640px) {
  .mobile_container-admin_header {
    padding: 0 1rem;
  }

  .mobile_container-admin_header .pl-8 {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mobile_container-admin_header .pr-8 {
    padding: 0;
  }

  .mobile-admin_header-rol {
    width: 6rem;
    height: 2rem;
    font-size: 0.8rem;
  }

  .mobile_admin-admin_header-item_remove {
    display: none;
  }

  .mobile_admin-admin_header-item_show {
    display: block;
  }
}
</style>
