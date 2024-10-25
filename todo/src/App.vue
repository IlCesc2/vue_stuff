<script setup>
import { ref } from "vue";
import Todo from "./components/Todo.vue";

const title = "TODO";
const todos = ref([
  { task: "Wash the dishes", priority: 0 },
  { task: "Wash the carpet", priority: 1 },
  { task: "Wash the windows", priority: 2 },
]);

const formTask = ref("");
const formPriority = ref("");

function submitForm() {
  todos.value.push({ task: formTask.value, priority: formPriority.value });
}

const removeTask=(task)=> {
    todos.value= todos.value.filter((v)=> v.task!= task)
}

</script>

<template>
  <main class="p-10 space-y-4 flex flex-col items-center w-full">
    <h1 class="text-3xl">{{ title }}</h1>
    <form action="" class="flex flex-col gap-2">
      <input
        class=""
        type="text"
        name=""
        id=""
        v-model="formTask"
        placeholder="Task Name"
      />
      <input
        type="number"
        name=""
        id=""
        v-model="formPriority"
        placeholder="Task Priority"
      />
      <button class="btn btn-blue" @click.prevent="submitForm">SEND</button>
    </form>
    <ul class="space-y-2">
      <li v-for="({ task, priority }, index) in todos" :key="index">
        <Todo :task="task" :priority="priority" :removeTask="removeTask"/>
      </li>
    </ul>
  </main>
</template>
<style>
input {
  border: 2px solid;
  border-color: black;
  padding: 5px;
}
</style>
