import { defineStore } from 'pinia';

// Definovanie Pinia store
export const useCounterOptionsStore = defineStore('counter-options', {
    // Stav store
    state: () => ({
        count: 0, // Číselná hodnota uchovávajúca počet kliknutí
    }),

    // Getters
    getters: {
        // Príklad getteru, ktorý napríklad vráti zdvojnásobenú hodnotu počtu kliknutí
        doubleCount: (state) => state.count * 2,
    },

    // Akcie store
    actions: {
        increment() {
            this.count += 1; // Zvýšenie počtu kliknutí
        },
    },
});