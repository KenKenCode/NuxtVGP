<template>
  <div class="p-8 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Rocket: {{ rocket?.name }}</h1>

    <div v-if="error" class="text-red-500">Failed to load rocket details.</div>
    <div v-else-if="loading" class="text-gray-500">Loading...</div>
    <div v-else-if="rocket" class="space-y-3">
      <p><strong>Description:</strong> {{ rocket.description }}</p>
      <p><strong>First Flight:</strong> {{ rocket.first_flight }}</p>
      <p><strong>Height:</strong> {{ rocket.height.meters }} meters</p>
      <p><strong>Diameter:</strong> {{ rocket.diameter.meters }} meters</p>
      <p><strong>Mass:</strong> {{ rocket.mass.kg }} kg</p>
      <p><strong>Stages:</strong> {{ rocket.stages }}</p>

      <!-- Add to Favorites button -->
      <v-btn @click="toggleFavorite" color="primary">
  {{ isFavorite(rocket?.id) ? 'Remove from Favorites' : 'Add to Favorites' }}
</v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFavoritesStore } from '~/stores/favorites'

const route = useRoute()
const rocket = ref(null)
const loading = ref(true)
const error = ref(null)

const { addFavorite, isFavorite, removeFavorite } = useFavoritesStore()

const toggleFavorite = () => {
  if (isFavorite(rocket.value.id)) {
    removeFavorite(rocket.value.id)
  } else {
    addFavorite(rocket.value)
  }
}

const query = `
  query ($id: ID!) {
    rocket(id: $id) {
      id
      name
      description
      first_flight
      height { meters }
      diameter { meters }
      mass { kg }
      stages
    }
  }
`

onMounted(async () => {
  try {
    const res = await $fetch('https://spacex-production.up.railway.app/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        query,
        variables: { id: route.params.id }
      }
    })
    rocket.value = res.data.rocket
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
})
</script>
