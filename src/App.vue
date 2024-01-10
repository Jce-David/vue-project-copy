<script  lang="ts">

import TopBar from './components/TopBar.vue';

export default {
  components: {
    TopBar
  }
}

</script>

<template>
  <v-app>
    <v-app-bar>
      <TopBar />
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
