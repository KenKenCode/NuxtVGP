<template>
  <v-app-bar app color="blue" dark>
    <v-toolbar-title>SpaceX Launches</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn class="bg-sky-500 hover:bg-sky-700" text to="/">Launches</v-btn>
    <NuxtLink to="/favorites" class="mx-4">Favorites</NuxtLink>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
