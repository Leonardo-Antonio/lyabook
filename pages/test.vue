<template>
  <div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>

    <div style="width: 50%">
      <canvas id="grafic"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var options = {
      maintainAspectRatio: false,
      scales: {
        y: {
          stacked: true,
          grid: {
            display: true,
            color: 'rgba(255,99,132,0.2)',
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    }

    let chart = new Chart(document.getElementById('grafic').getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['vino', 'agua', 'cerveza'],
        backgroundColor: 'rgb(249,249,255)',
        datasets: [
          {
            label: 'vino',
            backgroundColor: 'rgb(0,0,0)',
            data: [15, 50 , 10],
          },
          {
            label: 'agua',
            backgroundColor: 'rgb(0,0,0)',
            data: [155],
          },
          {
            label: 'cere',
            backgroundColor: 'rgb(0,0,0)',
            data: [50],
          },
        ],
      },
      options,
    })
  },
}
</script>
