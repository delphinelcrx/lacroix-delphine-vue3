<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header />
  <!-- C'est la que va apparaitre ma vue -->
  <RouterView />
  <Footer />
</template>

<style scoped></style>
