<script setup lang="ts">
import { ref } from 'vue';

import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';

import { useDonationStore } from '@/stores/donation';
import { type AddressType } from '@/stores/donation';
import Dropdown from 'primevue/dropdown';

const toast = useToast();

const donationStore = useDonationStore();

const dropOffAddress = ref<AddressType>({
  street: '',
  houseNumber: '',
  zipCode: 0,
});
const donationType = ref<number>(-1);

function _validate(e: MouseEvent): { isValid: boolean; message: string } {
  e.preventDefault();

  // just in case
  if (donationType.value === -1) {
    return { isValid: false, message: 'Bitte wählen Sie eine Spendenart aus' };
  }

  // check if zip code is valid
  if (dropOffAddress.value.zipCode.toString().length !== 5) {
    return { isValid: false, message: 'Bitte geben Sie eine gültige Postleitzahl ein' };
  }

  // dropoff validation
  if (donationType.value === 1) {
    // check if the first two digits of the dropoff zip code match the zip code of the store
    if (
      dropOffAddress.value.zipCode.toString().slice(0, 2) !==
      donationStore.storeAddress.zipCode.toString().slice(0, 2)
    ) {
      return { isValid: false, message: 'Die Postleitzahl entspricht nicht der des Ladens' };
    }
  }

  return { isValid: true, message: '' };
}

function validateForm(e: MouseEvent) {
  const { isValid, message } = _validate(e);

  if (!isValid) {
    toast.add({
      severity: 'error',
      summary: 'Fehler!',
      detail: message,
      life: 3000,
    });
    return;
  }

  toast.add({
    severity: 'success',
    summary: 'Erfolg!',
    detail: 'Ihre Spende wurde erfolgreich registriert',
    life: 3000,
  });

  // TODO: redirect to success page
}
</script>

<template>
  <h3 class="info">Bitte füllen Sie folgendes Formular aus.</h3>
  <form class="form">
    <Dropdown
      v-model="donationType"
      :options="donationStore.donationTypes"
      optionLabel="name"
      optionValue="id"
      placeholder="Hier die Spendenart auswählen"
      checkmark
      :highlightOnSelect="false"
    />

    <!-- Abholung durch die Geschaeftstelle-->
    <div class="data-input" v-if="donationType === 0"></div>
    <!-- Uebergabe an die Geschaeftstelle-->
    <div class="data-input" v-else-if="donationType === 1"></div>

    <button class="custom-button" @click="validateForm($event)" :disabled="donationType === -1">
      Absenden
    </button>
  </form>
  <Toast />
</template>

<style scoped lang="less">
.info {
  font-size: 16px;
  margin-bottom: 1rem;
}
@media (min-width: 600px) {
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
@media (max-width: 600px) {
  .form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
