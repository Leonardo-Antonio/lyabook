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
      lat:-12.1692,
      lon:-77.0244
    }
  },
}
</script>