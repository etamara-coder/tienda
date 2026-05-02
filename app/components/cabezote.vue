<template>
  <v-toolbar
    class="toolbar-tech px-6"
    height="90"
    flat
  >
    <!-- Contenedor del título -->
    <div class="contenedor-titulo">
      
      <!-- Nombre -->
      <span class="titulo">
        ⚡ Nexus 4
      </span>

      <!-- Frase -->
      <span class="subtitulo">
        Tecnología al mejor precio 🚀
      </span>

    </div>

    <v-spacer></v-spacer>

    <!-- Separador opcional -->
    <v-divider vertical class="mx-4"></v-divider>

    <!-- Carrito -->
    <carrito />
  </v-toolbar>
</template>

<script setup>
// no necesitas lógica aquí por ahora
</script>

<style scoped>
.toolbar-tech {
  background: linear-gradient(90deg, #0f2027, #203a43, #2c5364);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  border-bottom: 1px solid rgba(0, 255, 255, 0.2);
}

/* Contenedor del texto */
.contenedor-titulo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Título */
.titulo {
  font-weight: bold;
  font-size: 26px;
  letter-spacing: 2px;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.9);
}

/* Subtítulo */
.subtitulo {
  font-size: 13px;
  color: #b2fefa;
  opacity: 0.85;
  margin-top: 2px;
  letter-spacing: 1px;
}
</style>
