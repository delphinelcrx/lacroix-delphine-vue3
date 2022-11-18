<script setup>
const props = defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <!-- Card amiibo -->
  <div class="col-4 col-12-medium">
    <section class="middle">
      <img :src="data.image" />
      <header>
        <h2>{{ data.character }}</h2>
      </header>
      <p>{{ data.gameSeries }}</p>
    </section>
  </div>
</template>

<style></style>
