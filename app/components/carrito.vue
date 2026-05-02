<template>
  <div>
    <v-menu v-model="abierto" :close-on-content-click="false" location="bottom end">

      <!-- Botón -->
      <template v-slot:activator="{ props }">
        <v-btn class="text-none" stacked v-bind="props">
          <v-badge location="top right" color="primary" :content="totalItems">
            <v-icon icon="mdi-cart"></v-icon>
          </v-badge>
        </v-btn>
      </template>

      <!-- Carrito -->
      <v-card min-width="340" max-width="400" elevation="8">
        <v-card-title class="d-flex align-center pa-4">
          <v-icon icon="mdi-cart" class="mr-2"></v-icon>
          Mi carrito
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" variant="text" size="small" @click="abierto = false"></v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <!-- Vacío -->
        <div v-if="listadoventas.length === 0" class="pa-6 text-center">
          <v-icon icon="mdi-cart-off" size="48"></v-icon>
          <div>Tu carrito está vacío</div>
        </div>

        <!-- Lista -->
        <v-list v-else lines="two" max-height="350" class="overflow-y-auto">
          <v-list-item
            v-for="(item, index) in listadoventas"
            :key="index"
            :title="item.nombre"
            :subtitle="formatPrecio(item.precio * item.cantidad)"
          >
            <!-- Imagen -->
            <template v-slot:prepend>
              <v-avatar rounded="lg" size="48">
                <v-img :src="item.imagen" cover />
              </v-avatar>
            </template>

            <!-- Controles -->
            <template v-slot:append>
              <div class="d-flex align-center">

                <v-btn icon="mdi-minus" size="x-small" @click="disminuir(item)" />

                <span class="mx-2">{{ item.cantidad }}</span>

                <v-btn icon="mdi-plus" size="x-small" @click="aumentar(item)" />

                <v-btn
                  icon="mdi-delete-outline"
                  color="red"
                  size="small"
                  @click="ventas.eliminar(index)"
                />
              </div>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <!-- Total -->
        <v-card-actions class="pa-4">
          <strong>Total:</strong>
          <v-spacer></v-spacer>
          <strong>{{ formatPrecio(total) }}</strong>
        </v-card-actions>

      </v-card>
    </v-menu>
  </div>
</template>

<script setup>
const ventas = useVentas()
const listadoventas = ventas.ventasall
const abierto = ref(false)

// 🔥 total dinero
const total = computed(() =>
  listadoventas.reduce((acc, item) =>
    acc + ((item.precio || 0) * (item.cantidad || 1)), 0
  )
)

// 🔥 total productos (para badge)
const totalItems = computed(() =>
  listadoventas.reduce((acc, item) => acc + (item.cantidad || 1), 0)
)

// ➕
const aumentar = (item) => {
  if (!item.cantidad) item.cantidad = 1
  item.cantidad++
}

// ➖
const disminuir = (item) => {
  if (!item.cantidad) item.cantidad = 1

  if (item.cantidad > 1) {
    item.cantidad--
  } else {
    ventas.eliminar(listadoventas.indexOf(item))
  }
}

function formatPrecio(precio) {
  if (!precio && precio !== 0) return ''
  return precio.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  })
}
</script>