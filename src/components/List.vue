<template>
  <div class="container">
    <div
      class="color"
      v-bind:key="item.fargekode"
      v-for="item in items"
      v-on:mouseover="onClickColor(item)"
    >
      <div class="inner">
        <div class="front" :style="{ backgroundColor: item.hex }">
          <div class="details">
            <h3 class="title">{{ item.fargenavn }}</h3>
          </div>
        </div>

        <div class="back">
          <div>{{ item.fargenavn }}</div>
          <div>{{ item.produktnavn }}</div>
          <div>{{ item.jotun }} {{ item.ncs }}</div>
          <div>{{ item.rom }}</div>
          <div>{{ item.kjøpt }}</div>
        </div>
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
  },
  methods: {
     onClickColor: function(item) {
      this.$emit('event_child', item)
    }
  }
};
</script>

<style lang="postcss" scoped>
.container {
  display: block;
  display: grid;
  grid-gap: 2em;
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

  .color, 
  .front, 
  .back {
    height: 300px;
    width: 100%;
    border-radius: 4px;
    display: block;
    
  }

  .color {
    perspective: 500;
    cursor: pointer;
    &:hover .inner {
		  transform: rotateY(180deg);
	  }

    .inner {
      transition: 0.6s;
      transform-style: preserve-3d;
      position: relative;

      .front, 
      .back {
        backface-visibility: hidden;
        box-shadow: 0 2px 0 rgba(0, 0, 0, .06);
        left: 0;
        position: absolute;
        top: 0;
        border: 8px solid white;
      }

      .front {
	      z-index: 2;

        .details {
          background-color: white;
          bottom: 0;
          padding: 16px 12px 12px;
          position: absolute;
          width: 100%;

          .title {
            color: black;
            font-size: 1.1rem;
            margin: 0;
            position: relative;
            text-transform: uppercase;
          }
        }
      }
      .back {
        transform: rotateY(180deg);
        background-color: white;
        padding: 12px;
      }
    }
  }
}
</style>
