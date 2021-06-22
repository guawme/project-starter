<template>
  <ion-app>
    <header class="flex justify-between items-center p-4">
      <nav class="space-x-4 text-xs font-semibold uppercase">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <div>
        <select
          v-model="$i18n.locale"
          id="location"
          name="location"
          class="rounded-md border-gray-300 text-sm"
        >
          <option>es</option>
          <option>en</option>
        </select>
      </div>
    </header>
    <ion-content class="ion-no-padding">
      <router-view />
    </ion-content>
  </ion-app>
</template>

<script>
import { IonApp, IonContent } from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      locale: "es",
    };
  },
  components: {
    IonApp,
    IonContent,
  },
});
</script>
