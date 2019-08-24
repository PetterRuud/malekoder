<template>
  <div class="container">
    <div class="color" v-bind:key="item.fargekode" v-for="item in items">
      <div>Fargenavn: {{ item.fargenavn }}</div>
      <div>Fargekode: {{ item.jotun }}</div>
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
    box-shadow: 0 0 0 2px white;
    background: var(--color);
    border-radius: 2px;

    &:before,
    &:after {
      display: block;
      background: white;
    }

    &:before {
      content: attr(name);
      margin-top: 4em;
      padding: 0.5em 0.25em 0;
    }

    &:after {
      content: attr(code);
      color: rgba(black, 0.5);
      padding: 0 0.25em 0.25em;
    }
  }
}
</style>
