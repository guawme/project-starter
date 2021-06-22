<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-base">
      {{ $t('about.title') }}
    </h1>
    <ion-button
      color="primary"
      mode="ios"
      href="https://instagram.com/guawme"
      target="_blank"
      >Instagram</ion-button
    >
  </div>
</template>

<script>
import { IonButton } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { IonButton },
})
</script>