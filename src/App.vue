<script setup lang="ts">
// import HomeView from "./views/HomeView.vue";
import TheArchitect from "./components/TheArchitect.vue";
</script>

<template>
  <div class="h-screen w-screen">
    <!-- <HomeView /> -->
    <TheArchitect />
  </div>
</template>

<style>
*,
*::before,
*::after {
  font-family: "VT323";
}
html {
  overflow: hidden;
  height: 100%;
  width: 100%;
  background: black;
  color: rgb(3, 245, 3);
}
</style>
