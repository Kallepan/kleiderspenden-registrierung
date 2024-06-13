<script setup lang="ts">
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';

import { useDonationStore } from '@/stores/donation';

const donationStore = useDonationStore();
</script>

<template>
  <div class="questionnaire">
    <div class="row">
      <Dropdown
        :options="donationStore.clothingItems"
        v-model="donationStore.currentFormData.clothing_item"
        optionLabel="name"
        placeholder="Kleidungsstück auswählen"
        showClear
        checkmark
        :invalid="donationStore.currentFormData.clothing_item === null"
      ></Dropdown>
      <Dropdown
        :options="donationStore.crisisAreas"
        v-model="donationStore.currentFormData.crisis_area"
        optionLabel="name"
        placeholder="Krisengebiet auswählen"
        showClear
        checkmark
        :invalid="donationStore.currentFormData.crisis_area === null"
      ></Dropdown>
    </div>
    <div class="unfair-row">
      <div class="input">
        <label for="street">Straße</label>
        <InputText
          id="street"
          v-model="donationStore.currentFormData.pickup_adress.street"
          :invalid="donationStore.currentFormData.pickup_adress.street === ''"
        ></InputText>
      </div>
      <div class="input">
        <label for="houseNumber">Hausnummer</label>
        <InputText
          id="houseNumber"
          v-model="donationStore.currentFormData.pickup_adress.house_number"
          :invalid="donationStore.currentFormData.pickup_adress.house_number === ''"
        ></InputText>
      </div>
    </div>
    <div class="row">
      <div class="input">
        <label for="zipCode">Postleitzahl</label>
        <InputText
          id="zipCode"
          v-model="donationStore.currentFormData.pickup_adress.zip_code"
          :invalid="donationStore.currentFormData.pickup_adress.zip_code === 0"
        ></InputText>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.input {
  display: flex;
  flex-direction: column;
}

.unfair-row {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1rem;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  gap: 10px; /* Adds some space between the Dropdown components */
}
@media (max-width: 600px) {
  .row {
    justify-content: space-between;
  }
}
</style>
