<template>
  <div>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
      integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <div id="pdf">
      <h1 class="font-bold btn_add_size">Reporte</h1>
      <h1>Lyabook</h1>
    </div>
    <button @click="get">get</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    get() {
      const pdf = document.getElementById('pdf')
      html2pdf().from(pdf).save()
    },
  },
}
</script>
