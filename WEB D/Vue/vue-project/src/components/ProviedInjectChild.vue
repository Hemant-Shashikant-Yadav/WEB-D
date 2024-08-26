<script setup>


import { inject } from 'vue';
const name = inject('name')
const age = inject('age')
const city= inject('city')
</script>


<template>

<h6>{{ name }}</h6>
<h6>{{ age }}</h6>
<h6>{{ city }}</h6>

</template>