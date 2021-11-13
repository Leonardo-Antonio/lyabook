<template>
  <div>
    <div class="flex flex-row pb-4">
      <div class="w-1/2 pr-4">
        <div class="input">
          <span class="title_input">Titulo*</span>
          <el-input
            placeholder="Ingrese el titulo"
            v-model="data.name"
            clearable
          />
        </div>
      </div>

      <div class="w-1/2 pl-4">
        <div class="input">
          <span class="title_input">Editorial*</span>
          <el-input
            v-model="data.editorial"
            placeholder="Ingrese la nombre de la editorial"
            clearable
          />
        </div>
      </div>
    </div>

    <div class="flex flex-row pb-4 mobile_vertical">
      <div class="w-1/2 pr-4 mobile_w-full mobile_px-0 mobile_pb-1">
        <div class="input">
          <span class="title_input">Autor*</span>
          <el-input
            placeholder="Ingrese el nombre del autor"
            clearable
            v-model="data.author"
          />
        </div>
      </div>

      <div class="w-1/2 pl-4 mobile_w-full mobile_px-0">
        <div class="input select_details">
          <span class="title_input">Categorias*</span>
          <el-select
            v-model="data.categories"
            multiple
            filterable
            allow-create
            placeholder="Ingrese las catergorias que correspondan"
          >
            <el-option
              v-for="category in categories"
              :key="category.ean"
              :label="category.name"
              :value="category.ean"
            >
            </el-option>
          </el-select>
        </div>
      </div>
    </div>

    <div class="flex flex-row pb-4">
      <div class="w-full">
        <div class="text_area_new_admin input">
          <span class="title_input">Resumen*</span>
          <el-input
            type="textarea"
            placeholder="Ingrese un breve resumen"
            maxlength="500"
            show-word-limit
            v-model="data.description"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-row pb-4 mobile_vertical">
      <div class="w-1/2 pr-4 mobile_w-full mobile_px-0 mobile_pb-1">
        <div>
          <h5 class="title_input">Detalle del Libro*</h5>
        </div>

        <div class="select_details input">
          <el-select
            v-model="data.details"
            multiple
            filterable
            allow-create
            placeholder="Choose tags for your article"
          >
          </el-select>
        </div>
      </div>

      <div class="w-1/2 pl-4 mobile_w-full mobile_px-0">
        <div>
          <h5 class="title_input">Precio*</h5>
        </div>

        <div class="input price_input_prefix">
          <el-input
            placeholder="Type something"
            v-model.number="data.price_current"
            type="number"
          >
            <h1 slot="prefix">S/</h1>
          </el-input>
        </div>
      </div>
    </div>

    <div class="flex flex-row">
      <div class="w-1/2 pr-4">
        <span class="title_input">Estado*</span><br />
        <el-switch
          v-model="data.active"
          active-color="#5E20E4"
          inactive-color="#C4C4C4"
        />
        <span class="pl-4">{{ data.active ? 'Activo' : 'Inactivo' }}</span>
      </div>
      <div class="w-1/2 pl-4">
        <button @click="edit" class="btn_primary w-full h-12 rounded-md">
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
  data() {
    return {
      typeBook: {
        digital: true,
        fisico: false,
      },
      categories: null,
    }
  },
  methods: {
    async edit() {
      let url = '/books'
      if (
        this.data.type.digital.format != undefined &&
        this.data.type.fisico.format != undefined
      ) {
        url += `/df/${this.data._id}`
      } else {
        if (this.data.type.digital.format != undefined)
          url += `/d/${this.data._id}`
        else url += `/f/${this.data._id}`
      }

      try {
        const response = await this.$admin({
          url: url,
          method: 'put',
          data: this.data,
        })

      } catch (error) {}
    },
  },

  async mounted() {
    const response = await this.$apidata({
      url: '/categories',
      method: 'get',
    })
    this.categories = response.data.data
  },
}
</script>
