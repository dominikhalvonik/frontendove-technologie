<template>
    <h2>{{ sprava || 'Nemam propsy' }}</h2>
</template>

<script>
export default {
    props: {
        sprava: String
    },
    emits: ['response'],
    created() {
        this.$emit('response', 'hello from child')
    }
}
</script>