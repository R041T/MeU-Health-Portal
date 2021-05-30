<template>
  <div class="home">
    <navbar></navbar>
    <br /><br /><br />
    <h1>Your Appointments</h1>
    <br /><br /><br />

    <div>
      <mdb-row class="card-row">
        <mdb-card
          v-for="(value, index) in appointments"
          :key="index"
          style="width:700px ;"
          class="mx-auto"
        >
          <mdb-view hover>
            <a href="#!">
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-row>
              <mdb-col>
                <mdb-row
                  ><mdb-card-image
                    class="doctorimage"
                    :src="value.image"
                    alt="Card image cap"
                    style="width:300px"
                  ></mdb-card-image
                ></mdb-row>
                <br />
                <mdb-row
                  ><h4 class="text-left" style="margin-left:20px">
                    Doctor Name: {{ value.docname }}
                  </h4></mdb-row
                >
              </mdb-col>

              <mdb-col>
                <br /><br />
                <mdb-row
                  ><h4 class="text-right">
                    Date : {{ value.dateofapp }}
                  </h4></mdb-row
                >
                <br />
                <mdb-row
                  ><h4>Slot timing : {{ value.timeslot }}</h4></mdb-row
                >
                <br />
                <mdb-row
                  ><mdb-btn
                    color="danger"
                    @click="
                      cancelAppointment(
                        value.docname,
                        value.dateofapp,
                        value.timeslot
                      )
                    "
                    >Cancel Booking</mdb-btn
                  ></mdb-row
                >
              </mdb-col>
            </mdb-row>
          </mdb-card-body>
        </mdb-card>
      </mdb-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import ArticleService from "@/services/Article";
import {
  mdbRow,
  mdbCard,
  mdbCardBody,
  mdbBtn,
  mdbView,
  mdbMask,
  mdbCol,
  mdbCardImage,
} from "mdbvue";
//import { mapGetters } from "vuex";

export default {
  components: {
    navbar,
    mdbRow,
    mdbCard,
    mdbCardBody,
    mdbCol,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbCardImage,
  },
  data() {
    return {
      appointments: [],
    };
  },
  methods: {
    async getAppointments() {
      const result = await ArticleService.getApp({
        userid: this.$store.state.email,
      });
      console.log(result);
      this.appointments = result.data;
    },
    cancelAppointment(id, date, slot) {
      console.log(id, date, slot);
      ArticleService.cancelApp({
        userid: this.$store.state.email,
        docname: id,
        date: date,
        slot: slot,
      });
    },
  },
  mounted() {
    this.getAppointments();
  },
};
</script>

<style></style>
