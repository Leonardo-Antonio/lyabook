<template>
  <div>
    <div class="flex flex-row w-full mobile_vertical">
      <div class="w-1/2 pr-4 input mobile_w-full mobile_px-0 mobile_pb-1">
        <el-input
          :autofocus="true"
          placeholder="Nombre de la categoria"
          v-model="data.name"
          clearable
        />
      </div>
      <div class="w-1/2 pr-4 mobile_w-full mobile_px-0">
        <span class="title_input">Estado*</span><br />
        <el-switch
          v-model="data.active"
          active-color="#5E20E4"
          inactive-color="#C4C4C4"
        />
        <span class="pl-4">{{ data.active ? 'Activo' : 'Inactivo' }}</span>
      </div>
    </div>

    <div class="flex flex-row w-full pt-4">
      <div class="w-full h-12">
        <button
          @click="edit"
          class="w-full rounded-md h-full btn_primary h-full"
        >
          Actualizar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async edit() {
      this.data.slug = String(this.data.name).split(' ').join('-')
      try {
        const response = await this.$admin({
          url: `/categories/${this.data._id}`,
          method: 'put',
          data: {
            name: this.data.name,
            ean: this.data.ean,
            active: this.data.active,
          },
        })
        console.log(response)
      } catch (error) {}
    },
  },
}
</script>
