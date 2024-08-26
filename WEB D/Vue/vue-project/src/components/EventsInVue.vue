<script setup>

import { ref } from 'vue';
let count = ref(0);

const decrement=()=>{
    count.value--;
}
</script>


<template>

    <h1>This is events component</h1>
    <h5>Counts = {{ count }}</h5>
    <button v-on:click="count++">Increment</button>
    <button @:click="decrement">Decrement</button>

</template>