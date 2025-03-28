<script setup>
// @ is an alias for src, making this an absolute path
import CarsComp from '@/components/header/CarsComp.vue'
import { ref } from 'vue'

const carCards = ref([
  {
    id: 5928101,
    img: 'NissanAltima.jpg',
    model: '2017 Nissan Altima',
    cost: 28000,
    km: 170000
  },
  {
    id: 4582797,
    img: 'bmw34oi.jpg',
    model: '2018 BMW 340i',
    cost: 45000,
    km: 109000
  },
  {
    id: 8419988,
    img: 'HondaAccord.jpg',
    model: '2017 Honda Accord Coupe',
    cost: 24000,
    km: 178900
    
  },
  {
    id: 5928101,
    img: 'NissanAltima.jpg',
    model: '2017 Nissan Altima',
    cost: 28000,
    km: 170000
  },
  {
    id: 4582797,
    img: 'bmw34oi.jpg',
    model: '2018 BMW 340i',
    cost: 45000,
    km: 109000
  },
  {
    id: 8419988,
    img: 'HondaAccord.jpg',
    model: '2017 Honda Accord Coupe',
    cost: 24000,
    km: 178900
    
  },
  
  
])
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
    min-height: 100vh;
    padding: 30px 2%;
    color: #7C7C7C;
  }
  
  .store {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
    text-align: center;
    row-gap: 24px;
  }
  
  .inventory-title {
    font-size: 48px;
    font-weight: 700;
    color: #2c3e50;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
  }
  
  @media screen and (max-width: 780px) {
    .store {
      grid-template-columns: 1fr;
    }
  
    .inventory-title {
      font-size: 30px;
    }
  }
  
  @media screen and (max-width: 650px) {
    .inventory-title {
      font-size: 25px;
    }
  }
  </style>
  
