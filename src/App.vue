<template>
  <div id="app">
    <List />
  </div>
</template>

<script>
import List from "./components/List.vue";

export default {
  name: "app",
  components: {
    List
  }
};
</script>

<style lang="postcss">
*,
*:before,
*:after {
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  background: #2b2928;
  padding: 2em;
  font-family: monospace;
  font-weight: bold;
}
h1 {
  margin-top: 0;
  margin-bottom: 1em;
  color: white;
}
</style>
