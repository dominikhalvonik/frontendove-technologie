<template>
    <h1>Toto je hlavny ROOT komponent</h1><br><br>
<ChildComponent :sprava="greeting" />
<ChildComponent @response="(msg) => childMsg = msg" />
    <p>{{ childMsg }}</p>
<SlotComponent>Message: {{ msg }}</SlotComponent>
</template>

<script>
import ChildComponent from "@/components/ChildComponent.vue";
import SlotComponent from "@/components/SlotComponent.vue";
export default {
    data() {
        return {
            greeting: 'Ahoj rodiccccccccccccccccc',
            childMsg: 'No child msg yet',
            msg: 'from parent'
        }
    },
    components: {ChildComponent, SlotComponent}
}
</script>


<style scoped>

</style>
