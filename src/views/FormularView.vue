<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import Dropdown from 'primevue/dropdown';
import { useToast } from 'primevue/usetoast';

import { useDonationStore } from '@/stores/donation';

import UebergabeForm from '@/components/UebergabeForm.vue';
import AbholungForm from '@/components/AbholungForm.vue';

const router = useRouter();
const toast = useToast();
const donationStore = useDonationStore();

onMounted(() => {
  donationStore.resetFormData();
});

function _validate(e: MouseEvent): { isValid: boolean; message: string } {
  e.preventDefault();

  // just in case
  if (donationStore.currentFormData.donation_type === null) {
    return { isValid: false, message: 'Bitte wählen Sie eine Spendenart aus' };
  }

  // check if all required fields are filled
  if (donationStore.currentFormData.crisis_area === null) {
    return { isValid: false, message: 'Bitte wählen Sie ein Krisengebiet aus' };
  }
  if (donationStore.currentFormData.clothing_item === null) {
    return { isValid: false, message: 'Bitte wählen Sie ein Kleidungsstück aus' };
  }

  // dropoff validation
  if (donationStore.currentFormData.donation_type === 0) {
    // check if zip code is valid
    if (donationStore.currentFormData.pickup_adress.zip_code.length !== 5) {
      return { isValid: false, message: 'Die PLZ muss mindestens 5 Zeichen haben' };
    }
    // check if the first two digits of the dropoff zip code match the zip code of the store
    if (
      donationStore.currentFormData.pickup_adress.zip_code.slice(0, 2) !==
      donationStore.storeAddress.zip_code.slice(0, 2)
    ) {
      return {
        isValid: false,
        message: `Die PLZ liegt nicht in der Nähe des Geschäfts: ${donationStore.storeAddress.zip_code}`,
      };
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

  donationStore.currentFormData.submittedAt = new Date();
  router.push({ name: 'results' });
}
</script>

<template>
  <h3 class="info">Bitte füllen Sie folgendes Formular aus.</h3>
  <form class="form">
    <Dropdown
      v-model="donationStore.currentFormData.donation_type"
      :options="donationStore.donationTypes"
      optionLabel="name"
      optionValue="id"
      placeholder="Hier die Spendenart auswählen"
      showClear
      checkmark
      :highlightOnSelect="false"
    />

    <!-- Abholung durch die Geschaeftstelle-->
    <div class="data-input" v-if="donationStore.currentFormData.donation_type === 0">
      <AbholungForm />
    </div>

    <!-- Uebergabe an die Geschaeftstelle-->
    <div class="data-input" v-else-if="donationStore.currentFormData.donation_type === 1">
      <UebergabeForm />
    </div>

    <button
      class="custom-button"
      @click="validateForm($event)"
      :disabled="donationStore.currentFormData.donation_type === null"
    >
      Absenden
    </button>
  </form>
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
