<template>
  <div class>
    <navbar></navbar>
    <mdb-jumbotron class="details mb-0 text-center hoverable p-4">
      <mdb-row>
        <mdb-col md="4" offsetMd="1" class="m-3">
          <mdb-view
            :src="Hospitaldetails.image"
            alt="Sample image for first version of blog listing"
          >
            <a>
              <mdb-mask waves overlay="white-slight" />
            </a>
          </mdb-view>
        </mdb-col>
        <mdb-col md="7" class="text-md-left ml-3 mt-3">
          <a href="#!" class="green-text"></a>
          <h4 class="h4 mb-4">{{Hospitaldetails.hospname}}</h4>
          <p class="font-weight-normal">Number of Doctors : {{Hospitaldetails.numofdoc}}</p>
          <p class="font-weight-normal">Number of Nurses : {{Hospitaldetails.numofnurse}}</p>
          <p class="font-weight-normal">Number of Ambulances : {{Hospitaldetails.ambulances}}</p>

          <p class="font-weight-normal">Address : {{Hospitaldetails.address}}</p>
          <!-- <p class="font-weight-normal">
            by
            <a>
              <strong>Carine Fox</strong>
            </a>, 19/08/2016
          </p>-->
        </mdb-col>
      </mdb-row>
    </mdb-jumbotron>
    <footers class="footer"></footers>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import footers from "@/components/footer.vue";
import ArticleService from "@/services/Article";
import { mdbJumbotron, mdbRow, mdbCol, mdbView, mdbMask } from "mdbvue";
//import { mapGetters } from "vuex";
export default {
  name: "home",
  async mounted() {
    const HospId = await this.$store.state.route.params.HospitalId;
    console.log(HospId);
    const details = await ArticleService.displayHospital(HospId);
    console.log(this.Articledetails);
    console.log(details);
    this.Hospitaldetails = details.data[0];
  },
  data() {
    return {
      Hospitaldetails: ""
    };
  },
  components: {
    footers,
    navbar,
    mdbJumbotron,
    mdbView,
    mdbMask,
    mdbRow,
    mdbCol
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
<style scoped lang="scss">
.details {
  width: 70%;
  margin-left: 15%;
  margin-top: 5%;
}
</style>