import { defineStore } from 'pinia'

export const useVentas = defineStore('ventas', {
  state: () => {
    return {
      ventas: []
    }
  },
  getters: {
    ventasall: (state) => state.ventas,
  },
  actions: {
    guardar(producto) {
      this.ventas.push(producto)
    },
    eliminar(index) {
      this.ventas.splice(index, 1)
    },
  }
})