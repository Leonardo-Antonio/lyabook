<template>
  <div>
    <div class="container-perfile py-12 px-8 m-4 w-3/5">
      <p class="titulo-form-book">Nombre</p>
      <el-input
        class="input mt-2"
        placeholder="Nombre"
        v-model="name"
        clearable
      >
      </el-input>

      <p class="titulo-form-book pt-4">Apellido</p>
      <el-input
        class="input mt-2"
        placeholder="Apellido"
        v-model="last_name"
        clearable
      >
      </el-input>

      <div class="flex justify-center pt-8">
        <el-button class="btn_save_change" @click="edit" type="primary"
          >Guardar Cambios</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //values
      data: '',
      name: '',
      last_name: '',
    }
  },
  methods: {
    async edit() {
      try {
        var bodyData = {
          name: this.name,
          last_name: this.last_name,
        }
        const update = await this.$admin({
          url: '/users/personal-information/' + this.data._id,
          method: 'patch',
          data: bodyData,
        })
        if (update.status == 200) {
          const response = await this.$admin({
            url: '/users/' + this.data._id,
            method: 'get',
          })
          if(response.status == 200){
            localStorage.removeItem('user')
            var users = {
              user : response.data.data
            }
            localStorage.setItem('user', JSON.stringify(users));
            window.location.reload(true)
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    const data = localStorage.getItem('user').toString()
    if (data != undefined || data != null) {
      this.data = JSON.parse(data).user
      this.name = this.data.name
      this.last_name = this.data.last_name
    }
  },
}
</script>

<style scoped>
.btn_save_change {
  width: 100%;
  height: 4rem;
  border-radius: 5rem;
  background: var(--primary);
  border-color: var(--primary);
}
.btn_save_change:hover {
  transform: unset;
}
</style>
