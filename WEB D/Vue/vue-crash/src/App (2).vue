<script setup>

import { ref, onMounted } from 'vue'

const name = ref('the HY')
const status = ref('active')
const tasks = ref(['Task 1', 'Task 2', 'Task 3'])
const link = ref('https://www.google.com')
const newTask = ref('')

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'inactive'
  } else if (status.value === 'inactive') {
    status.value = 'active'
  }
}

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const deleteTask = (index) => {

  tasks.value.splice(index, 1)

}
onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    tasks.value = data.map((task) => task.title);

  } catch (error) {
    console.log('error')
  }
})

</script>
<template>

  <h1>
    {{ name }}
  </h1>

  <!--
    <p v-if="status === 'active'">the HY if</p>
    <p v-else-if="status === 'inactive'">the HY else if</p>
    <p v-else>the HY else</p>
    -->


  <br />
  <h3>Taskss:</h3>

  <form @submit.prevent="addTask">
    <label for="newTask">add task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">submit</button>
  </form>
  <br />
  <h3>Display Tasks:</h3>
  <ul>
    <li v-for="(t, index) in tasks" :key="t">
      <span>
        {{ t }}
      </span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>

</template>
