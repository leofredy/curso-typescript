<template>
  <div>
    <h1>Contador</h1>
    <h2>{{ valor }}</h2>
    <button @click="setValor(-1)">Decrementar</button>
    <button @click="setValor(1)">Incremento</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "Contador-personalizado",
  props: {
    valorInicial: {
      type: Number,
    }
  },
  data() {
    return {
      valor: this.valorInicial
    }
  },
  methods: {
    setValor(delta: number) {
      this.valor += delta;
    }
  }
})
</script>

<style scoped>

</style>