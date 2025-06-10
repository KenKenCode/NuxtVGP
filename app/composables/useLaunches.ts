import { ref, computed } from 'vue'

export const useLaunches = () => {
  const launches = ref([])
  const year = ref('all')
  const loading = ref(false)
  const error = ref(null)

  const fetchLaunches = async () => {
    loading.value = true
    error.value = null

    const query = `
      query {
        launchesPast(limit: 100) {
          id
          mission_name
          launch_date_utc
          launch_site {
            site_name
          }
          rocket {
            rocket_name
          }
          details
        }
      }
    `

    try {
      const res = await $fetch('https://spacex-production.up.railway.app/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { query }
      })

      launches.value = res.data.launchesPast
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  // List of unique years from launch dates
  const availableYears = computed(() => {
    const years = launches.value.map(l => new Date(l.launch_date_utc).getFullYear())
    return [...new Set(years)].sort((a, b) => b - a)
  })

  const filteredLaunches = computed(() => {
    if (year.value === 'all') return launches.value
    return launches.value.filter(
  l => new Date(l.launch_date_utc).getFullYear().toString() === year.value
)
  })

  return {
    launches,
    filteredLaunches,
    availableYears,
    year,
    loading,
    error,
    fetchLaunches
  }
}
