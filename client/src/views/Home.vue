<template>
  <div class="home">
    <navbar></navbar>
    <template>
      <mdb-carousel :items="basicCarousel" v-model="carousel" indicators></mdb-carousel>
    </template>
  </div>
</template>


<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import { mdbCarousel } from "mdbvue";

export default {
  name: "home",
  components: {
    navbar,
    mdbCarousel
  }
};
</script>
