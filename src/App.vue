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
body {
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100vh;
  background: #1a1a1a;
  font-family: monospace;
  font-weight: bold;
  padding: 2em;
  font-size: 14px;
}
h1 {
  margin-top: 0;
  margin-bottom: 1em;
  color: white;
}
</style>
