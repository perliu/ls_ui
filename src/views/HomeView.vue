<template>
  <div class="home">
    <FirstPage/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FirstPage from "@/components/FirstPage.vue"; // @ is an alias to /src


export default defineComponent({
  name: 'HomeView',
  components: {
    FirstPage
  }
});
</script>
