<template>
  <div class="home">
    <navbar></navbar>
    <mdb-jumbotron class="details mb-0 text-center hoverable p-4">
      <mdb-row>
        <mdb-col md="4" offsetMd="1" class="m-3">
          <mdb-view
            :src="Doctordetails.image"
            alt="Sample image for first version of blog listing"
          >
            <a>
              <mdb-mask waves overlay="white-slight" />
            </a>
          </mdb-view>
        </mdb-col>
        <mdb-col md="7" class="text-md-left ml-3 mt-3">
          <a href="#!" class="green-text"></a>
          <h4 class="h4 mb-4">{{ Doctordetails.docname }}</h4>
          <p class="font-weight-normal">
            Education Background : {{ Doctordetails.education }}
          </p>
          <p class="font-weight-normal">
            Years of Experience : {{ Doctordetails.experience }}
          </p>
          <p class="font-weight-normal">
            Consultation fee : {{ Doctordetails.fee }}
          </p>
          <!-- <p class="font-weight-normal">
            by
            <a>
              <strong>Carine Fox</strong>
            </a>, 19/08/2016
          </p>-->
        </mdb-col>
      </mdb-row>
    </mdb-jumbotron>
    <br /><br /><br />
    <h1><u>Book an appointment</u></h1>
    <br /><br />
    <h3>Select available date</h3>
    <select name="cars" v-model="selecteddate" id="date">
      <option v-for="(value, index) in date" :key="index">{{ value }}</option>
    </select>
    <br /><br />
    <h3>Select available time slot</h3>
    <select name="cars" v-model="selectedslot" id="slot">
      <option v-for="(value, index) in slot" :key="index">{{ value }}</option>
    </select>
    <br /><br />
    <mdb-btn color="primary" @click="bookslot()">Book Slot</mdb-btn><br /><br />
    <footers class="footer"></footers>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import footers from "@/components/footer.vue";
import ArticleService from "@/services/Article";
import { mdbJumbotron, mdbRow, mdbCol, mdbView, mdbMask, mdbBtn } from "mdbvue";
//import { mapGetters } from "vuex";
export default {
  name: "home",
  async mounted() {
    const DocId = await this.$store.state.route.params.DoctorId;
    // console.log(DocId);
    const details = await ArticleService.displayDoctor(DocId);
    // console.log(this.Doctordetails);
    // console.log(details.data[0]);
    this.Doctordetails = details.data[0];
    this.dateset();
    this.getauth();
    this.getslot();
  },
  data() {
    return {
      Doctordetails: "",
      date: [],
      selecteddate: "",
      slot: [
        "8am-9am",
        "9am-10am",
        "10am-11am",
        "11am-12pm",
        "12pm-1pm",
        "1pm-2pm",
        "2pm-3pm",
        "3pm-4pm",
        "4pm-5pm",
      ],
      selectedslot: ",",
    };
  },
  components: {
    footers,
    navbar,
    mdbJumbotron,
    mdbView,
    mdbMask,
    mdbRow,
    mdbCol,

    mdbBtn,
  },
  methods: {
    async dateset() {
      var dt = new Date();
      console.log(dt);

      var dd = 0;

      var mm = 0;
      var yyyy = 0;
      for (let i = 0; i < 7; i++) {
        var nextDay = new Date(dt);
        nextDay.setDate(dt.getDate() + i);
        dd = nextDay.getDate();

        mm = nextDay.getMonth() + 1;
        yyyy = nextDay.getFullYear();
        let today = dd + "-" + mm + "-" + yyyy;
        this.date.push(today);
      }
      const details = await ArticleService.getSlots({
        id: this.$store.state.route.params.DoctorId,
      });
      console.log(details);
    },
    async bookslot() {
      ArticleService.bookSlot({
        docid: this.$store.state.route.params.DoctorId,
        date: this.selecteddate,
        slot: this.selectedslot,
        userid: this.$store.state.email,
      });
    },
    async getslot() {
      // const details = await ArticleService.getSlots({
      //   id: this.$store.state.route.params.DoctorId,
      // });
      // console.log(details.data);
    },
    getauth() {
      // console.log(this.$store.state.email);
    },
  },
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
