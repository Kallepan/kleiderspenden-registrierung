import { ref } from 'vue';
import { defineStore } from 'pinia';

// This is used as the address of the store and pickup location
export type AddressType = {
  street: string;
  house_number: string; // 1-3 digits with optional letter
  zip_code: string; // 5 digits
};

// This keeps track of the type of clothing that was donated
const clothingItems = [
  { id: 0, name: 'T-Shirt' },
  { id: 1, name: 'Hose' },
  { id: 2, name: 'Schuhe' },
  { id: 3, name: 'Jacke' },
  { id: 4, name: 'Sonstiges' },
];
type ClothingItemType = (typeof clothingItems)[number];

// This keeps track of the crisis area the donation is intended for
const crisisAreas = [
  { id: 0, name: 'Berlin' },
  { id: 1, name: 'Hamburg' },
  { id: 2, name: 'München' },
  { id: 3, name: 'Köln' },
  { id: 4, name: 'Frankfurt' },
  { id: 5, name: 'Stuttgart' },
];
type CrisisAreaType = (typeof crisisAreas)[number];

// This keeps track of the type of donation
const donationTypes = [
  { id: 0, name: 'Abholung' },
  { id: 1, name: 'Übergabe an der Geschäftsstelle' },
];
// This keeps track of where the donation was registered from
export type FormData = {
  donation_type: number | null;
  clothing_item: ClothingItemType | null;
  crisis_area: CrisisAreaType | null;
  pickup_adress: AddressType;

  submittedAt: Date | null;
};

// This is the store that keeps track of the donation data
export const useDonationStore = defineStore('donation', () => {
  const storeAddress = ref<AddressType>({
    street: 'Musterstrasse',
    house_number: '123',
    zip_code: '12345',
  });

  const currentFormData = ref<FormData>({
    donation_type: null,
    clothing_item: null,
    crisis_area: null,
    pickup_adress: {
      street: '',
      house_number: '',
      zip_code: '',
    },
    submittedAt: null,
  });

  function resetFormData() {
    currentFormData.value = {
      donation_type: null,
      clothing_item: null,
      crisis_area: null,
      pickup_adress: {
        street: '',
        house_number: '',
        zip_code: '',
      },
      submittedAt: null,
    };
  }

  return {
    storeAddress,
    clothingItems,
    crisisAreas,
    donationTypes,

    // keep track of the current form data
    currentFormData,

    resetFormData,
  };
});
