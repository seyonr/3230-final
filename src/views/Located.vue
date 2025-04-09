<script setup>
  import { onMounted } from 'vue'
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  
  onMounted(() => {
    const map = L.map('map').setView([43.65107, -79.347015], 12) 
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)
  
    L.marker([43.65107, -79.347015])
      .addTo(map)
      .bindPopup('We are here!')
      .openPopup()
  })
  </script>
  

<template>
    <div class="map-container">
      <h1 class="text-2xl font-bold mb-4">Singaraj Motors - Ontario</h1>
      <div id="map" class="map"></div>
    </div>
  </template>
  
  
  <style scoped>
  .map-container {
    padding: 20px;
  }
  
  .map {
    height: 500px;
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 8px;
  }
  </style>
  