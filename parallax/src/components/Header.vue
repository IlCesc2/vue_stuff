<template>
  <main class="w-full bg-teal-600 h-20 flex items-center px-10 text-white">
    <h1 class="relative w-fit font-bold text-xl after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-black after:w-0 hover:after:w-full after:transition-all after:opacity-50">Test</h1>
    <div class="flex gap-5 justify-end w-full">
      <a
        href="/"
        class="after:block after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-1000 after:ease-in-out"
        >Parallax</a
      >
      <a
        href="/map"
        class="after:block after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-1000 after:ease-in-out"
        >Map</a
      >
    </div>
  </main>
</template>
