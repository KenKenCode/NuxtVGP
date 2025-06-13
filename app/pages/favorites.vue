<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Favorite Rockets</h1>

    <div v-if="favorites.length === 0" class="text-gray-500">
      No favorite rockets yet.
    </div>

    <div v-else class="grid gap-6">
      <div
        v-for="(rocket, index) in favorites"
        :key="rocket.id"
        class="p-4 border rounded-lg shadow bg-white"
      >
        <h2 class="text-xl font-semibold">{{ rocket.name }}</h2>
        <p><strong>First Flight:</strong> {{ rocket.first_flight }}</p>
        <p><strong>Height:</strong> {{ rocket.height.meters }} meters</p>
        <p><strong>Diameter:</strong> {{ rocket.diameter.meters }} meters</p>
        <p><strong>Mass:</strong> {{ rocket.mass.kg }} kg</p>
        <p><strong>Stages:</strong> {{ rocket.stages }}</p>

        <!-- Remove from favorites button -->
        <v-btn @click="handleRemoveFavorite(rocket.id)" color="red">
        Remove from Favorites
        </v-btn>
      </div>
    </div>

    <!-- Clear Favorites button -->
    <v-btn @click="clearFavorites" color="error">Clear All Favorites</v-btn>
  </div>
</template>

<script setup>
import { useFavoritesStore } from '~/stores/favorites'

const { favorites, removeFromFavorites, clearFavorites } = useFavoritesStore()

function handleRemoveFavorite(id) {
  removeFromFavorites(id)
  alert('Removed from favorites!')
}

</script>
