import { ref } from 'vue';
import { defineStore } from 'pinia';

// This is used as the address of the store and pickup location
export type AddressType = {
  street: string;
  houseNumber: string; // 1-3 digits with optional letter
  zipCode: number; // 5 digits
};

// This keeps track of the type of clothing that was donated
const clothingType = [
  { id: 0, name: 'T-Shirt' },
  { id: 1, name: 'Hose' },
  { id: 2, name: 'Schuhe' },
  { id: 3, name: 'Jacke' },
  { id: 4, name: 'Sonstiges' },
];
type ClothingItemType = (typeof clothingType)[number];

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
export type FormData =
  | {
      donation_type: 0;
      clothing_type: ClothingItemType;
      crisis_area: CrisisAreaType;
      store_adress: AddressType;
    }
  | {
      donation_type: 1;
      clothing_type: ClothingItemType;
      crisis_area: CrisisAreaType;
      store_adress: AddressType;
      pickup_adress: AddressType;
    };

// This is the store that keeps track of the donation data
export const useDonationStore = defineStore('donation', () => {
  const storeAddress = ref<AddressType>({
    street: 'Musterstrasse',
    houseNumber: '123',
    zipCode: 12345,
  });

  const currentFormData = ref<FormData | null>(null);

  return {
    storeAddress,
    clothingType,
    crisisAreas,
    donationTypes,

    // keep track of the current form data
    currentFormData,
  };
});
