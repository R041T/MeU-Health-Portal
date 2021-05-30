<template>
  <div class="mx-sm-4 my-3">
    <mdb-card style="max-width:15rem">
      <mdb-view hover>
        <a href="#!">
          <mdb-card-image class="doctorimage" :src="this.image" alt="Card image cap"></mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view>
      <mdb-card-body>
        <mdb-card-title>{{ name }}</mdb-card-title>

        <mdb-btn
          color="primary"
          @click="
            $router.push({ name: 'viewdoctor', params: { DoctorId: id } })
          "
        >Read More</mdb-btn>
      </mdb-card-body>
    </mdb-card>
  </div>
</template>

<script>
import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbBtn,
  mdbView,
  mdbMask
  //mdbCol
} from "mdbvue";
export default {
  name: "CardPage",
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbBtn,
    mdbView,
    mdbMask
    // mdbCol
  },
  props: ["name", "id", "image"],
  computed: {
    modalId() {
      console.log(this.image);
      return `modal-${this.id}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  margin: 10px;
}

.readmore {
  color: inherit;
}
.doctorimage {
  height: 150px;
}
</style>
