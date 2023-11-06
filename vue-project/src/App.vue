<template>
  <h2>Toto je root component</h2><br>
  <ChildComponent :msg="greeting" /> <br>
  <ChildComponent @response="(msg) => childMsg = msg" /> <br>
  <p>{{ childMsg }}</p>
  <SlotComponent>{{ slotMessage }}</SlotComponent>
</template>

<script>

import ChildComponent from "@/components/ChildComponent.vue";
import SlotComponent from "@/components/SlotComponent.vue";
export default {
    data() {
        return {
            greeting: 'Pozdravujem s rodicovskeho komponentu',
            childMsg: 'Nemam ziadnu spravu od svojich deti :(',
            slotMessage: 'Slot je najlepsia funkcionalita v komponente'
        }
    },
    components: {
        ChildComponent,
        SlotComponent
    }
}
</script>

<style>

</style>