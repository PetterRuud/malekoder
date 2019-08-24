<template>
  <div class="container">
    <div
      class="color"
      v-bind:key="item.fargekode"
      v-for="item in items"
      :style="{ backgroundColor: item.hex }"
    >
      <div class="info">
        <div>{{ item.fargenavn }}</div>
        <div>{{ item.produktnavn }}</div>
        <div>{{ item.jotun }} {{ item.ncs }}</div>
        <div>{{ item.rom }}</div>
        <div>{{ item.kjøpt }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import paints from "./paints.json";
export default {
  name: "List",

  data() {
    return {
      items: paints
    };
  }
};
</script>

<style lang="postcss" scoped>
.container {
  display: block;
  display: grid;
  grid-gap: 1em;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));

  @media (min-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
  }

  .color {
    display: block;
    width: 100%;
    background-color: white;
    box-shadow: 0 0 0 2px white;
    border-radius: 2px;
    padding-top: 250px;

    .info {
      padding: 12px;
      background-color: white;
    }
  }
}
</style>
