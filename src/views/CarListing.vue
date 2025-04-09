<script setup>
// @ is an alias for src, making this an absolute path
import CarsComp from '@/components/header/CarsComp.vue'
import { ref, onMounted } from 'vue'


const carCards = ref([])

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/api/inventory')
    const data = await res.json()
    carCards.value = data
  } catch (error) {
    console.error('Failed to fetch car inventory:', error)
  }
})
</script>

<template>
    <div class="inventory-page">
      <h2 class="inventory-title">Singaraj Motors Inventory</h2>
      <div class="store">
        <CarsComp v-for="car in carCards" :key="car.id" :carProp="car" />
      </div>
    </div>
  </template>
  

  <style scoped>
  .inventory-page {
    background-color: #EEE5E9;
    padding: 30px 2%;
    color: #7C7C7C;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .store {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 100px;
  }
  
  .inventory-title {
    font-size: 48px;
    font-weight: 700;
    color: #2c3e50;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
  }
  
  @media screen and (max-width: 1100px) {
    .inventory-title {
      font-size: 30px;
    } 
  }
  
  @media screen and (max-width: 780px) {
    .store{
      grid-template-columns: 1fr;
    }
  }
  </style>
  
