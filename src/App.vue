<template>
  <div id="app" :style="cssVars">
    <List v-on:event_child="eventChild" />
  </div>
</template>

<script>
import List from "./components/List.vue";

export default {
  name: "app",
  components: {
    List
  },
  methods: {
		eventChild: function(item) {
      console.log(item);
      this.bg = item.hex;
		},
  },
  
  data() {
    return {
      bg: null,
    }
  },
  computed: {
    cssVars() {
      return {
         '--bg': this.bg,
      };
    }
  }
};
</script>

<style lang="postcss">

:root {
  --bg: #1a1a1a;
}

* {
	box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  text-align: left;
  line-height: 1.4;
  font-size: 16px;
}

#app {
  min-height: 100vh;
  background: var(--bg);
  transition: background 500ms ease-in-out;
  font-family: monospace;
  font-weight: bold;
  padding: 2em;
}
</style>
