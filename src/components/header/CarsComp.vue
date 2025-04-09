<script setup>
import { ref } from 'vue'

defineProps({
  carProp: {
    type: Object,
    required: true,
  },
})

const showImageModal = ref(false)
const showFormModal = ref(false)

function openImageModal() {
  showImageModal.value = true
}

function openFormModal() {
  showFormModal.value = true
}

function closeModals() {
  showImageModal.value = false
  showFormModal.value = false
}

const form = ref({
  name: '',
  email: '',
  date: '',
  time: '',
})

function submitForm() {
  alert(`Appointment booked for ${form.value.name} on ${form.value.date} at ${form.value.time}.`)
  console.log('Form Data:', form.value)
  form.value = { name: '', email: '', date: '', time: '' }
  closeModals()
}
</script>

<template>
  <div class="car-box">
    <img :src="carProp.img" :alt="carProp.model" @click="openImageModal" />
    <div class="info">
      <h2>{{ carProp.model }}</h2>
      <p class="price">${{ carProp.cost }}</p>
      <p class="km">{{ carProp.km }}km</p>
      <button class="appoint" @click="openFormModal">Book an appointment</button>
    </div>
  </div>

  <!-- Image Modal (Full Screen) -->
  <div v-if="showImageModal" class="modal" @click.self="closeModals">
    <div class="modal-content full-image">
      <span class="close" @click="closeModals">×</span>
      <img :src="carProp.img" :alt="carProp.model" />
    </div>
  </div>

  <!-- Form Modal -->
  <div v-if="showFormModal" class="modal" @click.self="closeModals">
    <div class="modal-content">
      <span class="close" @click="closeModals">×</span>
      <h2>Book an Appointment</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Name:</label>
          <input v-model="form.name" type="text" required />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input v-model="form.email" type="email" required />
        </div>
        <div class="form-group">
          <label>Date:</label>
          <input v-model="form.date" type="date" required />
        </div>
        <div class="form-group">
          <label>Time:</label>
          <input v-model="form.time" type="time" required />
        </div>
        <div class="form-actions">
          <button type="button" @click="closeModals">Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.car-box {
  width: 250px;
  min-height: 320px; 
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
  scale: 1.1;
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

.price, .km {
  font-size: 18px;
  font-weight: bold;
  color: #1e8449;
  margin: 0;
}

.appoint {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
  width: 100%;
  margin-top: 10px;
}

.appoint:hover {
  background-color: #218838;
  transform: scale(1.03);
}

.appoint:active {
  background-color: #1e7e34;
  transform: scale(0.98);
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  position: relative;
}

/* Fullscreen image modal override */
.full-image {
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 0;
}

.full-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0;
}

.modal-content h2 {
  margin-top: 0;
  font-size: 20px;
  margin-bottom: 16px;
  text-align: center;
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

.form-group {
  margin-bottom: 12px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

.form-actions button {
  padding: 8px 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-actions button:first-child {
  background-color: #ccc;
}

.form-actions button:last-child {
  background-color: #28a745;
  color: white;
}
</style>

