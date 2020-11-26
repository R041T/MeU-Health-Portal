<template>
  <div class="home my-5">
    <mdb-row>
      <mdb-col lg="5" xl="4">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img class="img-fluid" :src="image" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves />
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>{{ title }}</strong>
        </h3>
        <p class="dark-grey-text">{{ shortcontent }}</p>
        <p>
          by
          <a class="font-weight-bold">{{ author }}</a>, 19/04/2018
        </p>
        <mdb-btn
          @click="$router.push({name:'viewarticle',params:{ArticleId:id}})"
          color="primary"
          size="md"
        >Read More</mdb-btn>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
// @ is an alias to /src
//import { mapGetters } from "vuex";
import { mdbRow, mdbCol, mdbMask, mdbView, mdbBtn } from "mdbvue";
export default {
  name: "BlogPage",
  components: {
    mdbRow,
    mdbCol,
    mdbMask,
    mdbView,
    mdbBtn
  },
  props: ["title", "id", "shortcontent", "author", "image"],
  computed: {
    modalId() {
      return `modal-${this.id}`;
    }
  }
};
</script>

<style></style>
