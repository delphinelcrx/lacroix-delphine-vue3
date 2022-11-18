<script setup>
import { useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";
import axios from "axios";

const API_ALL_AMIIBOS = "https://www.amiiboapi.com/api/amiibo";

const route = useRoute();
const currentAmiibo = ref({});

onBeforeMount(async () => {
  const oneAmiibo = await axios.get(API_ALL_AMIIBOS + "/?tail=" + route.params.amiiboId);
  currentAmiibo.value = oneAmiibo.data.amiibo[0];
  console.log(currentAmiibo.value);
});

console.log(route.params.amiiboId);
</script>

<template>
  <!-- Main -->
  <section id="main">
    <div class="container">
      <div class="row">
        <div class="col-4 col-12-medium">
          <!-- Sidebar -->
          <section class="box">
            <header>
              <h3>Infos</h3>
            </header>
            <p>
              amiiboSeries: <b>{{ currentAmiibo.amiiboSeries }}</b> <br />
              character: {{ currentAmiibo.character }}<br />
              gameSeries: {{ currentAmiibo.gameSeries }}<br />
              type: {{ currentAmiibo.type }}
            </p>
          </section>
          <section class="box">
            <header>
              <h3>Dates sorties</h3>
            </header>

            <ul class="divided">
              <li v-for="(item, index) in currentAmiibo.release" :key="index">{{ index }} : {{ item }}</li>
            </ul>
          </section>
        </div>
        <div class="col-8 col-12-medium imp-medium">
          <!-- Content -->
          <article class="box post">
            <a href="#" class="featured"><img :src="currentAmiibo.image" alt="" /></a>
            <header>
              <h2>{{ currentAmiibo.character }}</h2>
              <p>{{ currentAmiibo.type }}</p>
            </header>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
