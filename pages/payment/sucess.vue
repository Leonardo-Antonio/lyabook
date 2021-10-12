<template>
  <ErrForbidden src="/images/sucess.png" />
</template>

<script>
import ErrForbidden from '../../components/error.vue'

export default {
  components: {
    ErrForbidden,
  },
  data() {
    return {}
  },
  async created() {
    console.log('--------------------PARAM---------------')
    var payment = {
      collection_id: this.$route.query.collection_id,
      collection_status: this.$route.query.collection_status,
      payment_id: this.$route.query.payment_id,
      status: this.$route.query.status,
      external_reference: this.$route.query.external_reference,
      payment_type: this.$route.query.payment_type,
      merchant_order_id: this.$route.query.merchant_order_id,
      preference_id: this.$route.query.preference_id,
      site_id: this.$route.query.site_id,
      processing_mode: this.$route.query.processing_mode,
      merchant_account_id: this.$route.query.merchant_account_id,
    }
    // if(payment.status == "approved"){
    //   console.log('APROBADO ')
    // }

    await this.$axios.get('https://api.mercadopago.com/v1/payments/1242282324', {
        headers: {
          Authorization: 'Bearer TEST-6706525738118846-082101-03ee4a59346a45ff4f27a6f2eb905cf4-775792906',
        },
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
</script>
