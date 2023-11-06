<template>
  <h1>{{ msg || 'Nemam ziadne propsy' }}</h1>
</template>

<script>
export default {
    props: {
        msg: String
    },
    emits: ['response'],
    created() {
        this.$emit('response', 'Toto je sprava z child komponentu')
    }
}
</script>

