<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">SpaceX Launches</h1>

    <div class="mb-4">
      <label class="block mb-2 font-semibold">Filter by year:</label>
      <select v-model="year" class="border p-2 rounded">
        <option value="all">All</option>
        <option v-for="y in availableYears" :key="y" :value="y.toString()">{{ y }}</option>
      </select>
    </div>

    <div v-if="error" class="text-red-500">Failed to load launches.</div>
    <div v-else-if="loading" class="text-gray-500">Loading...</div>

    <div v-else-if="filteredLaunches.length === 0" class="text-gray-500">No launches found.</div>

    <div v-else class="grid gap-6">
      <div
        v-for="launch in filteredLaunches"
        :key="launch.id"
        class="p-4 border rounded-lg shadow bg-white"
      >
        <h2 class="text-xl font-semibold">{{ launch.mission_name }}</h2>
        <p><strong>Date:</strong> {{ new Date(launch.launch_date_utc).toLocaleDateString() }}</p>
        <p><strong>Launch Site:</strong> {{ launch.launch_site?.site_name || 'N/A' }}</p>
        <p><strong>Rocket:</strong> {{ launch.rocket?.rocket_name || 'N/A' }}</p>
        <p v-if="launch.details"><strong>Details:</strong> {{ launch.details }}</p>
        <p v-else class="text-gray-500 italic">No details available.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  filteredLaunches,
  availableYears,
  year,
  loading,
  error,
  fetchLaunches
} = useLaunches()

onMounted(() => {
  fetchLaunches()
})
</script>
