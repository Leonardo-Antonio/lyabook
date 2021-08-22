<template>
  <div class="w-1/5 pt-20 bg_white h-screen shadow_card">
    <div>
      <div>
        <div class="flex justify-center">
          <img src="/logos/main.svg" alt="logo" class="px-8" />
        </div>

        <div class="pt-8 px-8">
          <div>
            <div class="flex flex-col" v-for="btn of btns" :key="btn.icon">
              <button class="py-1">
                <BtnDashBoard :icon="btn.icon" :text="btn.text" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnDashBoard from '../buttons/btn-dashboard'

export default {
  components: {
    BtnDashBoard,
  },
  data() {
    return {
      btns: [
        {
          text: 'Inicio',
          icon: 'el-icon-s-home',
        },
        {
          text: 'Usuarios',
          icon: 'el-icon-user-solid',
        },
        {
          text: 'Cateorias',
          icon: 'el-icon-menu',
        },
        {
          text: 'Libros',
          icon: 'el-icon-notebook-2',
        },
        {
          text: 'Promosciones',
          icon: 'el-icon-s-ticket',
        },
        {
          text: 'Reclamos',
          icon: 'el-icon-s-management',
        },
        {
          text: 'Cerrar Sesión',
          icon: 'el-icon-back',
        },
      ],
    }
  },
}
</script>

<style></style>
