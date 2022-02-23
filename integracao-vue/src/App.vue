<template>
  <div id="app">
    <Contador :valorInicial="10" />
    <ContadorClasse :valorInicial="valorInicial" @changeValorInicial="changeValor"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Contador from "@/components/Contador.vue";
import ContadorClasse from "@/components/ContadorClasse.vue";

@Component({
  components: {
    Contador,
    ContadorClasse
  },
})
export default class App extends Vue {
  private valorInicial = 300;
  private changeValor(delta: number) {
    this.valorInicial += delta;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
