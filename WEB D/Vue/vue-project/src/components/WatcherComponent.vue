<script setup>
import { ref, watch } from 'vue';

const msg = ref('This is starter messege')
const inp = ref('')

watch(inp, (newVal, oldVal)=>{
    msg.value = 'New valuse : '+ newVal
})
</script>


<template>

<h5> {{ msg }}</h5>

<input type="text" v-model="inp">
</template>