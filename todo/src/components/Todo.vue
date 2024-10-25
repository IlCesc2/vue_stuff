<script setup>
import { toRefs } from 'vue';
const props= defineProps({
  task: {
    type: String,
  },
  priority: {
    type: Number,
  },
  removeTask:{
    type:Function,
  }
});
const { task, priority,removeTask } = toRefs(props);

function priorityMapper() {
  switch (priority.value) {
    case 0:
      return "red";
    case 1:
      return "orange";
    case 2:
      return "yellow";
    case 3:
      return "green";
    default:
      return "gray";
  }
}


</script>

<template>
  <div class="p-5 border-gray-200 rounded-lg shadow-md flex bg-opacity-20" :style="{background: priorityMapper()}">
    <div>

        <h1 class="font-bold text-lg">{{ task }}</h1>
        <h2 class="font-bold">Priority: {{ priority }}</h2>
    </div>
    <button class=" font-semibold text-white" @click="removeTask(task)">X</button>
   
  </div>
</template>

<script>
</script>