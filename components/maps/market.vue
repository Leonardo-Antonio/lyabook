<template>
  <div>
    <h1>Maps</h1>
    <div>
      <GmapMap
        :center="{ lat: 10, lng: 10 }"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 600px"
      />
    </div>
  </div>
</template>
