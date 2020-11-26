<template>
  <div class="hospital">
    <navbar></navbar>
    <carousel class="car"></carousel>
    <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status" v-if="showSpinner">
      <span class="sr-only">Loading...</span>
    </div>

    <div>
      <mdb-row class="card-row">
        <card
          v-bind:key="hospital.id"
          v-for="hospital in hospitaldetails"
          :name="hospital.hospname"
          :id="hospital.id"
          :image="hospital.image"
        ></card>
      </mdb-row>
    </div>
    <footers class="footer"></footers>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import card from "@/components/Hospitalcard.vue";
import carousel from "@/components/carousel.vue";
import footers from "@/components/footer.vue";
import ArticleService from "@/services/Article";
import { mapGetters } from "vuex";
import { mdbRow } from "mdbvue";
export default {
  components: {
    card,
    carousel,
    footers,
    navbar,
    mdbRow
  },
  mounted() {
    this.check();
  },

  data() {
    return {
      hospitaldetails: ""
    };
  },
  computed: {
    ...mapGetters(["hospitals", "showSpinner"])
  },

  methods: {
    // async fetchHospitals() {
    //   await this.$store.dispatch("fetchHospitals");
    // }
    async check() {
      try {
        const response = await ArticleService.ViewHospitals();
        this.hospitaldetails = response.data;
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style>
.page {
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  z-index: 25;
  width: 100%;
  height: 100%;
}

.spinner-grow {
  position: relative;
  top: 50%;
}

.filter {
  background-color: white;
}

.btn-secondary {
  color: black;
  background-color: white;
  border-color: #6c757d;
}
.home {
  padding-top: 58px;
  height: 100%;
}

.card-row {
  padding-left: 8%;
}

@media screen and (max-width: 1024px) {
  .car {
    display: none;
  }
  .card-row {
    margin-left: 6%;
    margin-right: 10%;
  }
}
</style>
