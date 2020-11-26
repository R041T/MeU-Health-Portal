<template>
  <div class="home">
    <navbar></navbar>
    <mdb-jumbotron class="details mb-0 text-center hoverable p-4">
      <mdb-row>
        <mdb-col md="4" offsetMd="1" class="m-3">
          <mdb-view :src="Doctordetails.image" alt="Sample image for first version of blog listing">
            <a>
              <mdb-mask waves overlay="white-slight" />
            </a>
          </mdb-view>
        </mdb-col>
        <mdb-col md="7" class="text-md-left ml-3 mt-3">
          <a href="#!" class="green-text"></a>
          <h4 class="h4 mb-4">{{Doctordetails.docname}}</h4>
          <p class="font-weight-normal">Education Background : {{Doctordetails.education}}</p>
          <p class="font-weight-normal">Years of Experience : {{Doctordetails.experience}}</p>
          <p class="font-weight-normal">Consultation fee : {{Doctordetails.fee}}</p>
          <p class="font-weight-normal">Clinic Address : {{Doctordetails.address}}</p>
          <!-- <p class="font-weight-normal">
            by
            <a>
              <strong>Carine Fox</strong>
            </a>, 19/08/2016
          </p>-->
        </mdb-col>
      </mdb-row>
    </mdb-jumbotron>
    <mdb-jumbotron class="moredetails mb-0 text-center hoverable p-4">
      <mdb-row>
        <mdb-col md="4" offsetMd="1" class="m-3">
          <mdb-view
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUm7-iCpBnI7HsTLTq35IJnn3n8cuulgs19VuIfsWGuvicBzx2"
            alt="Sample image for first version of blog listing"
          >
            <a>
              <mdb-mask waves overlay="white-slight" />
            </a>
          </mdb-view>
        </mdb-col>
        <mdb-col md="7" class="text-md-left ml-3 mt-3">
          <h4 class="h4 mb-4">Weekly Schedule</h4>
          <p class="font-weight-normal">Monday : {{Doctordetails.monday}}</p>
          <p class="font-weight-normal">Tuesday : {{Doctordetails.tuesday}}</p>
          <p class="font-weight-normal">Wednesday : {{Doctordetails.wednesday}}</p>
          <p class="font-weight-normal">Thursday :{{Doctordetails.thursday}}</p>
          <p class="font-weight-normal">Friday :{{Doctordetails.friday}}</p>
          <h5>
            <p class="font-weight-normal">Holidays :{{Doctordetails.holidays}}</p>
          </h5>
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
    const DocId = await this.$store.state.route.params.DoctorId;
    console.log(DocId);
    const details = await ArticleService.displayDoctor(DocId);
    console.log(this.Doctordetails);
    console.log(details.data[0]);
    this.Doctordetails = details.data[0];
  },
  data() {
    return {
      Doctordetails: ""
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
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
}
.details {
  width: 70%;
  margin-left: 15%;
  margin-top: 5%;
}
.moredetails {
  width: 50%;
  margin-left: 25%;
  margin-top: 5%;
}
</style>
