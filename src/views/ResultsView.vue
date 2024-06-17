<script setup lang="ts">
import Card from 'primevue/card';

import { useRouter } from 'vue-router';

import { useDonationStore } from '@/stores/donation';

const storeAddress = useDonationStore().storeAddress;
const results = useDonationStore().currentFormData;
const router = useRouter();

// if results are empty, redirect to the form
if (!results.clothing_item || !results.crisis_area) {
  router.push({ name: 'formular' });
}
</script>

<template>
  <Card class="results">
    <template #title>Vielen Dank für Ihre Spende!</template>
    <template #content>
      <p v-if="results.donation_type === 0">
        Wir haben Ihre Spende entgegengenommen und werden uns in Kürze bei Ihnen melden, um die
        Abholung zu organisieren.
      </p>
      <p v-else>
        Wir haben Ihre Spende entgegengenommen und unser Team wird sich in Kürze bei Ihnen melden.
      </p>
      <br />
      <h3>Hier sind die Details Ihrer Spende:</h3>
      <ul>
        <li><strong>Kleidungsstück:</strong> {{ results.clothing_item!.name }}</li>
        <li><strong>Krisengebiet:</strong> {{ results.crisis_area!.name }}</li>
        <li><strong>Abholung:</strong> {{ results.donation_type === 0 ? 'Ja' : 'Nein' }}</li>
        <li><strong>Spendenzeitpunkt:</strong> {{ results.submittedAt.toLocaleTimeString() }}</li>
        <span v-if="results.donation_type === 0">
          <li>
            <strong>Straße:</strong> {{ results.pickup_adress.street }}
            {{ results.pickup_adress.house_number }}
          </li>

          <li><strong>Postleitzahl:</strong> {{ results.pickup_adress.zip_code }}</li>
        </span>
      </ul>
      <h3>Standort der Geschätsstelle</h3>
      <p>
        Unsere Geschäftsstelle befindet sich in der: {{ storeAddress.street }}
        {{ storeAddress.house_number }}, {{ storeAddress.zip_code }}
      </p>
    </template>
  </Card>
</template>

<style scoped lang="less"></style>
