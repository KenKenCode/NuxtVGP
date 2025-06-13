<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center">SpaceX Launches</h1>

    <div class="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
      <div class="mb-4">
        <label class="block mb-1 font-semibold">Search by mission or rocket name:</label>
        <input
          v-model="searchQuery"
          type="text"
          class="border p-2 rounded w-full sm:w-1/2"
          placeholder="Type to search..."
        />
      </div>

        <label class="block mb-1 font-semibold">Filter by year:</label>
        <select v-model="year" class="border p-2 rounded">
          <option value="all">All</option>
          <option v-for="y in availableYears" :key="y" :value="y.toString()">{{ y }}</option>
        </select>
      </div>

      <div>
        <label class="block mb-1 font-semibold">Sort by date:</label>
        <select v-model="sortOrder" class="border p-2 rounded">
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>
    </div>

    <div v-if="error" class="text-red-500">Failed to load launches.</div>
    <div v-else-if="loading" class="text-gray-500">Loading...</div>
    <div v-else-if="sortedLaunches.length === 0" class="text-gray-500">No launches found.</div>

    <div v-else class="grid gap-6">
      <div
        v-for="launch in filteredLaunches"
        :key="launch.id"
        class="p-4 border rounded-lg shadow bg-white"
      >
        <h2 class="text-xl font-semibold">{{ launch.mission_name }}</h2>
        <p><strong>Date:</strong> {{ new Date(launch.launch_date_utc).toLocaleDateString() }}</p>
        <p><strong>Launch Site:</strong> {{ launch.launch_site?.site_name || 'N/A' }}</p>
		<!--<pre>{{ launch }}</pre>-->
        <p>
		<strong>Rocket:</strong>
		<NuxtLink
			v-if="launch.rocket?.rocket_name && launch.rocket?.rocket?.id"
			:to="`/rockets/${launch.rocket.rocket.id}`"
			class="text-blue-600 hover:underline"
		>
			{{ launch.rocket.rocket_name }}
		</NuxtLink>
		<span v-else>N/A</span>
		</p>
        <p v-if="launch.details"><strong>Details:</strong> {{ launch.details }}</p>
        <p v-else class="text-gray-500 italic">No details available.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  sortedLaunches,
  availableYears,
  year,
  sortOrder,
  loading,
  error,
  fetchLaunches
} = useLaunches()

const searchQuery = ref('')

const filteredLaunches = computed(() => {
  if (!searchQuery.value) return sortedLaunches.value

  return sortedLaunches.value.filter((launch) => {
    const mission = launch.mission_name?.toLowerCase() || ''
    const rocket = launch.rocket?.rocket_name?.toLowerCase() || ''
    const query = searchQuery.value.toLowerCase()
    return mission.includes(query) || rocket.includes(query)
  })
})

onMounted(() => {
  fetchLaunches()
})
</script>
