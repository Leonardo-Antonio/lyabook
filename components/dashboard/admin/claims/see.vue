<template>
  <div>
    <div>
      <el-descriptions
        class="margin-top"
        :title="`Detalle de la compra - ${new Date(
          data.created_at
        ).toLocaleString()}`"
        :column="2"
        :size="size"
        border
      >
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            Cliente
          </template>
          {{ data.data_person.name }} {{ data.data_person.last_name }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            Telefono principal
          </template>
          {{ data.data_sending_reply.phone }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            {{ data.data_person.type_document.toUpperCase() }}
          </template>
          {{ data.data_person.number_document }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            Telefono adicional
          </template>
          {{ data.data_sending_reply.additional_telephone }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            Dirección
          </template>
          {{ data.data_sending_reply.address }},
          {{ data.data_sending_reply.district }}.
          {{ data.data_sending_reply.department }} -
          {{ data.data_sending_reply.department }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            Orden
          </template>
          {{ data.claim_data.order }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            Detalle
          </template>
          {{ data.claim_data.details }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
}
</script>
