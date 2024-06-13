<script setup lang="ts">
import Dropdown from 'primevue/dropdown';

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
  </div>
</template>

<style scoped lang="less">
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
