<template>
  <div>
    <div class="flex flex-row justify-between mobile_vertical">
      <div class="flex flex-row">
        <nuxt-link to="/dashboard/admin/books/new/many">
          <box-icon name="left-arrow-alt" color="#021639"></box-icon>
        </nuxt-link>
        <h2 class="title_admin pl-4">Pdfs</h2>
      </div>

      <div>
        <nuxt-link
          to="/dashboard/admin/books/archivos/imagenes"
          class="pr-4 mobile_px-0"
        >
          <button
            class="
              btn_primary btn_add_size
              rounded-full
              h-10
              w-52
              mobile_w-full
            "
          >
            Imagenes
          </button>
        </nuxt-link>
        <span class="mobile_spacer-sm"></span>
        <nuxt-link
          to="/dashboard/admin/books/archivos/pdfs"
          class="pl-4 mobile_px-0"
        >
          <button
            class="
              color_white
              bg_second
              btn_add_size
              rounded-full
              h-10
              w-52
              mobile_w-full
            "
          >
            Pdfs
          </button>
        </nuxt-link>
      </div>
    </div>

    <div class="pt-4">
      <h4 class="name_item_card">Servido de pdfs</h4>
    </div>

    <section class="card">
      <div class="py-10">
        <div class="w-11/12 mx-auto">
          <div class="px-8 mobile_px-0">
            <div class="w-full flex flex-row mobile_vertical-reverse">
              <div class="w-1/2 pr-4 mobile_w-full mobile_px-0">
                <div class="upload_drag_drop-w-full">
                  <el-upload
                    class="upload-demo"
                    drag
                    action="http://192.168.1.7:8001/api/v1/pdfs?key=LyA1308_MORSAC25TQMor25_NNLiviN_SAkur4"
                    :before-upload="beforeUpload"
                    :on-success="successImages"
                    :on-remove="handleRemove"
                    accept="application/pdf"
                    multiple
                  >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">
                      Suelta tu archivo aquí o <em>haz clic para cargar</em>
                    </div>
                    <div slot="tip" class="el-upload__tip">
                      Solo archivos jpg/png con un tamaño menor de 500kb
                    </div>
                  </el-upload>
                </div>
              </div>
              <div class="w-1/2 pl-4 mobile_w-full mobile_px-0">
                <div>
                  <h4 class="title-upload_file">
                    Sube y copia el link de las
                    <span class="color_primary">pdfs</span>
                  </h4>
                  <div class="pt-4">
                    <el-tag class="bg_secondary color_second">.pdf</el-tag>
                  </div>

                  <div class="pt-4 mobile_pb-1">
                    <button
                      @click="copy"
                      class="btn_primary rounded-full w-52 h-10 btn_add_size"
                    >
                      Copiar links
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <span class="mobile_spacer"></span>
    <span class="mobile_spacer"></span>
    <span class="mobile_spacer"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pdfsLinks: [],
    }
  },
  methods: {
    beforeUpload(file) {
      if (file.type != 'application/pdf') {
        this.$message({
          message: 'Solo se acepta archivos .pdf',
          type: 'error',
        })
        return
      }
    },

    successImages(response, file, fileList) {
      const urls = []
      for (const img of fileList) {
        urls.push(img.response.data.url)
      }
      this.pdfsLinks = urls
    },
    handleRemove(file) {
      this.pdfsLinks.splice(this.pdfsLinks.indexOf(file.response.data.url), 1)
    },

    copy() {
      navigator.clipboard.writeText(this.pdfsLinks.join(';'))
      this.$message({
        message: 'Los links se copiaron con exíto',
        type: 'success',
      })
    },
  },
}
</script>

<style scoped>
.title-upload_file {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 1;
  color: var(--second);
}
</style>
