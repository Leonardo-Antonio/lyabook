<template>
  <CargarMapa
    :configMapa="configMapa"
    apiKey="TU API KEY"
  >
 
    <template slot-scope="{ google, map }">
      <Marcadores
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
    </template>
 
  </CargarMapa>
 
</template>