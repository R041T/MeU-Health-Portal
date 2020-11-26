<template>
  <div class="carousel">
    <mdb-carousel :interval="8000" slide :items="items"></mdb-carousel>
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
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
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
}
</style>
