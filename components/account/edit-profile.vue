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
        v-model="apellido"
        clearable
      >
      </el-input>

      <p class="titulo-form-book pt-4">Documento de Identidad</p>
      <el-input
        class="input mt-2"
        placeholder="Documento de Identidad"
        v-model="dni"
        clearable
      >
      </el-input>

      <p class="titulo-form-book pt-4">Teléfono personal</p>
      <el-input
        class="input mt-2"
        placeholder="Teléfono personal"
        v-model="telefono"
        clearable
      >
      </el-input>

      <p class="titulo-form-book pt-4">Género</p>
      <el-select
        v-model="value_gender"
        clearable
        placeholder="Género"
        class="mt-2 select-gender"
      >
        <el-option
          v-for="item in gender"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <p class="titulo-form-book pt-4">Fecha de nacimiento</p>
      <el-input
        class="input mt-2"
        placeholder="Fecha de nacimiento"
        v-model="date"
        clearable
      >
      </el-input>

      <div class="flex justify-center pt-8">
        <el-button
          class="btn_save_change"
          type="primary"
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
      gender: [
        {
          value: 'Femenino',
          label: 'Femenino',
        },
        {
          value: 'Masculino',
          label: 'Masculino',
        },
        {
          value: 'Otro',
          label: 'Otro',
        },
      ],
      value_gender: '',
    }
  },
}
</script>

<style scoped>
.btn_save_change{
    width: 100%;
    height: 4rem;
    border-radius: 5rem;
    background: #021639;
    border-color: #021639;
}
.btn_save_change:hover{
    transform: unset
}
</style>
