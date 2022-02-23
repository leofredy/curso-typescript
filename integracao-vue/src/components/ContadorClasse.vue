<template>
  <div>
    <h1>Contador (Classe)</h1>
    <h2>{{ valorInicial }}</h2>
    <h3>{{ getParImpar() }}</h3>
    <h4>Computed: {{ parImpar }}</h4>
    <button @click="setValor(-1)">Decremento</button>
    <button @click="setValor(1)">Incremento</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ContadorClasse extends Vue {
  @Prop(Number) private readonly valorInicial!: number;

  public setValor(delta: number) {
    this.$emit("changeValorInicial", delta);
  }

  //método
  public getParImpar(): string {
    return this.valorInicial % 2 === 0 ? "Par" : "Impar";
  }

  //computed
  public get parImpar(): string {
    return this.valorInicial % 2 === 0 ? "Par" : "Impar";
  }

}
</script>

<style scoped>

</style>