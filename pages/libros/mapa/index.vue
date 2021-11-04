<template>
  <div>
    <div id="map-wrap" style="height: 100vh">
      <client-only>
        <l-map :zoom="13" :center="[lat, lon]">
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-marker :lat-lng="[lat, lon]"></l-marker>
        </l-map>
      </client-only>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      lat: 0,
      lon: 0
    }
  },
  created(){
    this.lat = Number(this.$route.params.position.fisico.lat)
    this.lon = Number(this.$route.params.position.fisico.log)

  }
}
</script>