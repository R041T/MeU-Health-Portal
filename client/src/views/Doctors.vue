<template>
  <div class="home">
    <navbar></navbar>
    <carousel class="car"></carousel>
    <div
      class="spinner-grow"
      style="width: 3rem; height: 3rem;"
      role="status"
      v-if="showSpinner"
    >
      <span class="sr-only">Loading...</span>
    </div>

    <div>
      <mdb-row class="card-row">
        <card
          v-bind:key="doctor.id"
          v-for="doctor in doctordetails"
          :name="doctor.docname"
          :id="doctor.id"
          :image="doctor.image"
        ></card>
      </mdb-row>
    </div>
    <footers class="footer"></footers>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import card from "@/components/card.vue";
import carousel from "@/components/carousel.vue";
import footers from "@/components/footer.vue";
import { mapGetters } from "vuex";
import ArticleService from "@/services/Article";
import { mdbRow } from "mdbvue";
export default {
  components: {
    card,
    carousel,
    footers,
    navbar,
    mdbRow,
  },
  mounted() {
    this.check();
  },

  data() {
    return {
      doctordetails: "",
    };
  },
  computed: {
    ...mapGetters(["jobs", "showSpinner"]),
  },

  methods: {
    // async fetchData() {
    //   await this.$store.dispatch("fetchJobs");
    // }
    async check() {
      try {
        const response = await ArticleService.ViewDoctors();
        this.doctordetails = response.data;
        console.log(this.doctordetails);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
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
