<template>
  <div class="carousel">
    <mdb-carousel :items="items"></mdb-carousel>
    <slot></slot>
  </div>
</template>

<script>
import { mdbCarousel } from "mdbvue";
export default {
  name: "CarouselPage",
  components: {
    mdbCarousel
  },
  data() {
    return {
      items: [
        {
          img: true,
          src:
            "https://st4.depositphotos.com/1006318/20504/v/1600/depositphotos_205046554-stock-illustration-group-doctors-hospital-communication-making.jpg"
        }
      ]
    };
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.carousel img {
  max-height: 400px;
  object-fit: cover;
}
</style>
