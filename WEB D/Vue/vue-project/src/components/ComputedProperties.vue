<script setup>
import { computed, ref } from 'vue';


let count = ref(0)

let square = computed(() => {
    return count.value * count.value
})
</script>


<template>
<h5>count = {{ count }}</h5>
<h5>Square = {{ square }}</h5>
<button @click="count++">Increment count</button>
</template>