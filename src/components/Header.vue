<script setup></script>

<template>
  <!-- Header -->
  <section id="header">
    <!-- Logo -->
    <h1><a href="index.html">AmiiVue</a></h1>

    <!-- Nav -->
    <nav id="nav">
      <ul>
        <li class="current"><RouterLink :to="{ name: 'home' }">Home</RouterLink></li>
        <li><RouterLink :to="{ name: 'amiibosList' }">Liste Amiibo</RouterLink></li>
      </ul>
    </nav>
  </section>
</template>

<style></style>
