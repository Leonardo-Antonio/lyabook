<template>
  <div>
    <div class="flex justify-center">
      <div class="flex items-center w-4/6" style="height: 10rem">
        <div class="w-1/2  title-banner5">
          Suscribete a nuestro boletin
        </div>
        <div class="w-1/2 container-input">
          <div style="margin-top: 15px">
            <el-input
              placeholder="Ingrese su email"
              v-model="input3"
              class="input-with-select input-email"
            >
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
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
      input3: '',
      select: '',
    }
  },
}
</script>
<style scoped>
.title-banner5 {
  font-family: "Baloo Chettan 2";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 58px;
}
</style>
