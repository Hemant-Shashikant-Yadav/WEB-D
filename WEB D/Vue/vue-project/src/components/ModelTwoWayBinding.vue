<script setup>
import { ref } from 'vue';


const formdata = ref({
    username: '',
    email: '',
    password: ''
})
</script>

<template>

    <form>
        <input type="text" placeholder="Enter username" v-model="formdata.username">
        <input type="email" placeholder="Enter email" v-model="formdata.email">
        <input type="password" placeholder="Enter password" v-model="formdata.password">
        <button type="submit">Submit</button>
    </form>


    <h5>{{ formdata.username }}</h5>
    <h5>{{ formdata.email }}</h5>
    <h5>{{ formdata.password }}</h5>
</template>