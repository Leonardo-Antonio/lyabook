<template>
  <div class="w-7/12 mx-auto">
    <div class="py-20">
      <h1>Libro de reclamaciones</h1>

      <section>
        <div>
          <h3 class="title_items_claims">Datos personales</h3>
        </div>

        <div class="w-full flex flex-row py-4">
          <div class="w-1/2 pr-4">
            <div class="input">
              <el-input
                placeholder="ingrese sus nombres"
                v-model="data.data_person.name"
                clearable
              />
            </div>
          </div>

          <div class="w-1/2 pl-4">
            <div class="input">
              <el-input
                placeholder="Ingrese sus apellidos"
                v-model="data.data_person.last_name"
                clearable
              />
            </div>
          </div>
        </div>

        <div class="w-full flex flex-row py-4">
          <div class="w-1/2 pr-4">
            <div class="input w-full select_details">
              <el-select
                v-model="data.data_person.type_document"
                placeholder="Ingrese el tipo de documento"
              >
                <el-option
                  v-for="type in typesDocuments"
                  :key="type"
                  :label="type"
                  :value="type"
                >
                </el-option>
              </el-select>
            </div>
          </div>

          <div class="w-1/2 pl-4">
            <div class="input">
              <el-input
                placeholder="N° documento"
                v-model="data.data_person.number_document"
                clearable
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 class="title_items_claims">Datos para el envío de respuesta</h3>
        </div>

        <div class="w-full flex flex-row py-4">
          <div class="w-1/2 pr-4">
            <div class="input">
              <el-input
                placeholder="Teléfono"
                v-model="data.data_sending_reply.phone"
                clearable
              />
            </div>
          </div>

          <div class="w-1/2 pl-4">
            <div class="input">
              <el-input
                placeholder="Teléfono adicional"
                v-model="data.data_sending_reply.additional_telephone"
                clearable
              />
            </div>
          </div>
        </div>

        <div class="w-full flex flex-row py-4">
          <div class="w-1/2 pr-4">
            <div class="input">
              <el-input
                placeholder="Correo"
                v-model="data.data_sending_reply.email"
                clearable
              />
              <el-input
                placeholder="Direción"
                v-model="data.data_sending_reply.address"
                clearable
                class="pt-8"
              />
            </div>
          </div>

          <div class="w-1/2 pl-4">
            <strong class="subtitles_book_claims pb-2"
              >Método de comunicación</strong
            >
            <div class="pt-4">
              <el-radio-group
                class="flex-important flex-col"
                v-model="data.data_sending_reply.communication_method"
              >
                <el-radio class="pb-2" label="Correo electrónico"
                  >Correo electrónico</el-radio
                >
                <el-radio class="py-2" label="Correo físico"
                  >Correo físico</el-radio
                >
              </el-radio-group>
            </div>
          </div>
        </div>

        <div class="w-full flex flex-row py-4">
          <div class="w-33 pr-4">
            <div class="input">
              <el-input
                placeholder="Departamento"
                v-model="data.data_sending_reply.department"
                clearable
              />
            </div>
          </div>

          <div class="w-33">
            <div class="input">
              <el-input
                placeholder="Provincia"
                v-model="data.data_sending_reply.province"
                clearable
              />
            </div>
          </div>

          <div class="w-33 pl-4">
            <div class="input">
              <el-input
                placeholder="Distrito"
                v-model="data.data_sending_reply.district"
                clearable
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 class="title_items_claims">Datos del reclamo</h3>
        </div>

        <div class="w-full flex flex-row py-4">
          <div class="w-1/2 pr-4">
            <strong class="subtitles_book_claims pb-2"
              >Identificación del bien contratado</strong
            >
            <div class="pt-4">
              <el-radio-group
                class="flex-important flex-col"
                v-model="data.claim_data.identification_contracted_asset"
              >
                <el-radio class="pb-2" label="Libro fisico"
                  >Libro fisico</el-radio
                >
                <el-radio class="py-2" label="Libro digital"
                  >Libro digital</el-radio
                >
              </el-radio-group>
            </div>
          </div>

          <div class="w-1/2 pr-4">
            <strong class="subtitles_book_claims pb-2">Tipo de reclamo</strong>
            <div class="pt-4">
              <el-radio-group
                class="flex-important flex-col"
                v-model="data.claim_data.type"
              >
                <el-radio class="pb-2" label="Queja">Queja</el-radio>
                <el-radio class="py-2" label="Reclamo">Reclamo</el-radio>
              </el-radio-group>
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col py-4">
          <div class="w-full text_area_new_admin input">
            <el-input
              :autosize="{ minRows: 6, maxRows: 8 }"
              type="textarea"
              placeholder="Detalles de tu reclamo"
              class="w-100"
              v-model="data.claim_data.details"
            >
            </el-input>
          </div>

          <div class="py-4"></div>

          <div class="w-full text_area_new_admin input">
            <el-input
              :autosize="{ minRows: 6, maxRows: 8 }"
              type="textarea"
              placeholder="Orden"
              class="w-100"
              v-model="data.claim_data.order"
            >
            </el-input>
          </div>
        </div>
      </section>

      <section>
        <div class="w-full">
          <button
            @click="send"
            class="btn_primary rounded-2xl w-40 h-10 btn_add_size"
          >
            Enviar
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'client',
  data() {
    return {
      data: {
        data_person: {
          name: '',
          last_name: '',
          type_document: '',
          number_document: '',
        },
        claim_data: {
          identification_contracted_asset: '',
          type: '',
          details: '',
          order: '',
        },
        data_sending_reply: {
          phone: '',
          additional_telephone: '',
          communication_method: '',
          email: '',
          address: '',
          department: '',
          province: '',
          district: '',
        },
      },
      typesDocuments: ['dni', 'pasaporte', 'cui'],
    }
  },
  methods: {
    async send() {
      try {
        const response = await this.$client({
          url: '/claims',
          method: 'post',
          data: this.data,
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
.subtitles_book_claims {
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #696969;
}

.w-33 {
  width: 33.3%;
}

.title_items_claims {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 21px;
  color: var(--primary);
  padding: 1rem 0;
}
</style>
