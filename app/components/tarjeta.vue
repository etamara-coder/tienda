<template>
  <v-card class="mx-auto" width="300">
    <v-img
      class="align-end text-white"
      height="200"
      :src="producto?.imagen"
      cover
    >
    </v-img>
      <v-card-title class="pt-4"> {{ producto?.nombre }} </v-card-title>
    <v-card-actions>
      <v-btn color="black" variant="text">
        {{ formatPrecio(producto?.precio) }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        color="black"
        variant="tonal"
        prepend-icon="mdi-cart"
        @click="agregarAlCarrito"
      >
        Agregar al carrito
      </v-btn>
    </v-card-actions>
  </v-card>
  
</template>

<script setup>
  const props = defineProps(['producto'])
  const ventas = useVentas()

  function agregarAlCarrito() {
    ventas.guardar(props.producto)
  }

  function formatPrecio(precio) {
    if (!precio) return ''
    return precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })
  }
</script>