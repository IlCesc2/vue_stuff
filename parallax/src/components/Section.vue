<script setup>
import { ref, toRefs } from 'vue';
const props = defineProps({
  bg: {
    type: String,
  },
});
const { bg } = toRefs(props);

const fBg = ref(`bg-${bg.value}`);
</script>

<template>
    <div
      class="w-full min-h-screen bg-center bg-cover bg-no-repeat flex items-center bg-fixed bg-opacity-90 border-b-2 border-b-black"
      :class="fBg"
    >
      <div class="flex-col bg-gray-600 bg-opacity-75 p-10 h-[30vh] ">
        <h1 class="text-2xl font-bold pb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
          incidunt?

        </h1>
        <p class="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa
          tempore, sint labore itaque non fugiat! Alias consectetur, vero id
          officia excepturi delectus ullam molestias nobis facere accusamus
          atque cumque, doloribus recusandae ex natus adipisci. Quod dolore
          maxime ab obcaecati quidem assumenda quibusdam! Iste unde totam sint,
          magni dolorum veniam?
        </p>
      </div>
    </div>
</template>
