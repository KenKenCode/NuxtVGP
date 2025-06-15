export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as Array<any>,
  }),

  actions: {
    addFavorite(rocket) {
      if (!this.favorites.find(fav => fav.id === rocket.id)) {
        this.favorites.push(rocket)
      }
    },
    removeFavorite(rocketId) {
      this.favorites = this.favorites.filter(r => r.id !== rocketId)
    },
    clearFavorites() {
      this.favorites = []
    },
    isFavorite(rocketId) {
      return this.favorites.some(fav => fav.id === rocketId)
    }
  }
})
