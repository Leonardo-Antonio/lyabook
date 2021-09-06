<template>
  <div>
    <div class="mt-20">
      <el-container class="flex justify-center w-7/12 mx-auto">
        <div class="w-3/12 container-filter">
          <div class="header-filter px-6 py-4 rounded-t-2xl">
            <p>Filtar por</p>
          </div>
          <div>
            <el-row class="tac">
              <el-col :span="12" class="column-menu">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo header-option-filter"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-submenu index="1">
                    <template slot="title">
                      <!-- <i class="el-icon-location"></i> -->
                      <span class="subtitle-filter">Categoria</span>
                    </template>
                    <el-menu-item index="1-1"
                      ><el-checkbox v-model="checked"
                        >Opción</el-checkbox
                      ></el-menu-item
                    >
                    <el-menu-item index="1-2"
                      ><el-checkbox v-model="checked"
                        >Opción</el-checkbox
                      ></el-menu-item
                    >
                    <el-menu-item index="1-3"
                      ><el-checkbox v-model="checked"
                        >Opción</el-checkbox
                      ></el-menu-item
                    >
                    <el-menu-item index="1-4"
                      ><el-checkbox v-model="checked"
                        >Opción</el-checkbox
                      ></el-menu-item
                    >
                  </el-submenu>
                </el-menu>
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo header-option-filter"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-submenu index="2">
                    <template slot="title">
                      <!-- <i class="el-icon-location"></i> -->
                      <span class="subtitle-filter">Editorial</span>
                    </template>
                    <el-menu-item index="1-1"
                      ><el-checkbox v-model="checked"
                        >Opción</el-checkbox
                      ></el-menu-item
                    >
                    <el-menu-item index="1-2"
                      ><el-checkbox v-model="checked"
                        >Opción</el-checkbox
                      ></el-menu-item
                    >
                    <el-menu-item index="1-3"
                      ><el-checkbox v-model="checked"
                        >Opción</el-checkbox
                      ></el-menu-item
                    >
                    <el-menu-item index="1-4"
                      ><el-checkbox v-model="checked"
                        >Opción</el-checkbox
                      ></el-menu-item
                    >
                  </el-submenu>
                </el-menu>
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo header-option-filter"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-submenu index="3">
                    <template slot="title">
                      <!-- <i class="el-icon-location"></i> -->
                      <span class="subtitle-filter">Autor</span>
                    </template>
                    <el-menu-item index="1-1"
                      ><el-checkbox v-model="checked"
                        >Opción</el-checkbox
                      ></el-menu-item
                    >
                    <el-menu-item index="1-2"
                      ><el-checkbox v-model="checked"
                        >Opción</el-checkbox
                      ></el-menu-item
                    >
                    <el-menu-item index="1-3"
                      ><el-checkbox v-model="checked"
                        >Opción</el-checkbox
                      ></el-menu-item
                    >
                    <el-menu-item index="1-4"
                      ><el-checkbox v-model="checked"
                        >Opción</el-checkbox
                      ></el-menu-item
                    >
                  </el-submenu>
                </el-menu>
                <el-menu>
                  <div class="container-barra-price pt-4">
                    <div class="block">
                      <span class="demonstration subtitle-filter">Precio</span>
                      <el-slider
                        class="pt-2 px-2"
                        v-model="value_barra"
                      ></el-slider>
                    </div>
                  </div>
                </el-menu>
              </el-col>
            </el-row>
          </div>
        </div>

        <!-- 2da barra -->
        <el-container>
          <el-header>
            <div class="flex relative items-center">
              <div class="container-title">
                <p>Libros</p>
              </div>
              <div class="flex absolute right-0">
                <div>
                  <el-select v-model="value" clearable placeholder="Select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </el-header>
          <el-main>
            <div class="container-product flex justify-center">
              <div class="w-full">
                <div>
                  <div class="flex flex-wrap">
                    <div v-for="item of [2, 3, 4, 5, 6, 7, 8]" :key="item">
                      <img
                        class="payment-card"
                        src="/images/example-product.png"
                      />
                      <p>Memory - Lyabook</p>
                      <div class="flex">
                        <p>S/ 249.9</p>
                        <p>S/ 149.9</p>
                      </div>
                      <div class="star pt-4">
                        <div class="block">
                          <el-rate v-model="value1"></el-rate>
                        </div>
                      </div>
                      <div class="container-button-to-buy pt-8">
                        <el-row>
                          <el-button
                            class="btn_add_size button-to-by"
                            type="primary"
                            round
                            >COMPRAR</el-button
                          >
                        </el-row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-main>
          <el-footer>Pie de página</el-footer>
        </el-container>
        <!-- fin de la barra 2 -->
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'client',
  data() {
    return {
      // star
      value1: null,
      // checkbox
      checked: true,
      // barra de precio
      value_barra: 0,
      // select
      options: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ],
      value: '',
    }
  },
}
</script>
<style>
.header-filter {
  background: #021639;
  color: #fff;
}
.column-menu {
  width: 100% !important;
}
.container-filter {
  box-shadow: 2px 4px 10px rgba(49, 64, 95, 0.15);
  border-radius: 10px;
}
.container-title {
  font-family: Qucksand;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
}
.subtitle-filter {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  color: #000000;
}
.container-barra-price {
  padding-left: 1.2rem;
  padding-right: 1.2rem;
}
</style>