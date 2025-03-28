<script setup>
import { ref } from 'vue'

defineProps({
  carProp: {
    type: Object,
    required: true,
  },
})

const showModal = ref(false)

function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}
</script>

<template>
  <div class="car-box">
    <img :src="carProp.img" :alt="carProp.model" @click="openModal" />
    <div class="info">
      <h2>{{ carProp.model }}</h2>
      <p class="price">${{ carProp.cost }}</p>
      <p class="km">{{ carProp.km }}km</p>
    </div>
  </div>

  
  <div v-if="showModal" class="modal" @click.self="closeModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">×</span>
      <img :src="carProp.img" :alt="carProp.model" />
    </div>
  </div>
</template>

<style scoped>
.car-box {
  width: 250px;
  height: 320px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  overflow: hidden;
  transition: border 0.2s ease;
  cursor: pointer;
}

.car-box:hover {
  border: 1px solid #999;
  scale: 1.1
}

img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  background-color: #f0f0f0;
}

.info {
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

h2 {
  font-size: 16px;
  margin: 0 0 8px;
  color: #2c3e50;
  line-height: 1.3;
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: #1e8449;
  margin: 0;
}
.km {
  font-size: 18px;
  font-weight: bold;
  color: #1e8449;
  margin: 0;
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.modal-content img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.close {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #fff;
  border-radius: 50%;
  padding: 8px 12px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 0 10px #000;
}
</style>
