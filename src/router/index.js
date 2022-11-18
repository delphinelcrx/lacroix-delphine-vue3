import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AmiibosList from "../views/AmiibosList.vue";
import AmiibosDetails from "../views/AmiibosDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/amiibos",
      name: "amiibosList",
      component: AmiibosList,
    },
    {
      path: "/amiibos/:amiiboId",
      name: "amiibosDetails",
      component: AmiibosDetails,
    },
  ],
});

export default router;
