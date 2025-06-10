<template>
  <v-app-bar app color="blue" dark>
    <v-toolbar-title>SpaceX Launches</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/">Launches</v-btn>
    <v-btn text to="/rockets/falcon9">Rockets</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
