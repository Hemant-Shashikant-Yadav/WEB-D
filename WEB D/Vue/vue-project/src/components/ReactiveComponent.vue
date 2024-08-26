<script setup>

import { reactive } from 'vue';

let state = reactive({
    count: 0
})
</script>


<template>

<h5>count = {{ state.count }}</h5>
<button @click="state.count++ " >Increment</button>
</template>