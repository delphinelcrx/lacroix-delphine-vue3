<script setup>
import AmiiboCard from "@/components/AmiiboCard.vue";

import { onBeforeMount, ref } from "vue";
import axios from "axios";

const API_ALL_AMIIBOS = "https://www.amiiboapi.com/api/amiibo/";

const amiibos = ref([]);
const isDataLoading = ref(true);

onBeforeMount(async () => {
  console.log("ON BEFORE MOUNT");
  const allAmiibos = await axios.get(API_ALL_AMIIBOS);
  const { data, status } = allAmiibos; // object destructuring FTW!
  if (status === 200) {
    isDataLoading.value = false;
  }
  amiibos.value = [data.amiibo[0], data.amiibo[1], data.amiibo[2]];
  console.log(data.amiibo);
});
</script>

<template>
  <!-- Banner -->
  <section id="banner">
    <header>
      <h2>Hey.Bienvenue sur ma collection</h2>
    </header>
  </section>

  <!-- Intro -->
  <section id="intro" class="container">
    <div class="row">
      <AmiiboCard v-for="data in amiibos" :key="data.tail" :data="data" />
    </div>
    <footer>
      <ul class="actions">
        <li><RouterLink :to="{ name: 'amiibosList' }" class="button large">Liste complète</RouterLink></li>
      </ul>
    </footer>
  </section>
</template>

<style></style>
