<template>
  <div class="home">
    <navbar></navbar>
    <div>
      <mdb-row>
        <h1 class="col-16" style="margin-top:5%">{{Articledetails.title}}</h1>
      </mdb-row>
    </div>
    <mdb-jumbotron class="details mb-0 text-center hoverable p-4">
      <mdb-col>
        <mdb-view :src="Articledetails.image" alt="Sample image for first version of blog listing">
          <a>
            <mdb-mask waves overlay="white-slight" />
          </a>
        </mdb-view>
      </mdb-col>
    </mdb-jumbotron>

    <pre class="content">{{Articledetails.content}}</pre>
    <h3 class="col-1 my-30">Comments:</h3>
    <div class="input-group-prepend" style="margin-left:1%">
      <span class="input-group-text" id="basic-addon">
        <i class="fas fa-pencil-alt prefix"></i>
      </span>
    </div>
    <textarea v-model="comment" class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
    <mdb-btn color="primary">Post</mdb-btn>
    <footers class="footer"></footers>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import footers from "@/components/footer.vue";
import ArticleService from "@/services/Article";
import { mdbJumbotron, mdbCol, mdbView, mdbMask, mdbBtn } from "mdbvue";
//import { mapGetters } from "vuex";
export default {
  name: "home",
  async mounted() {
    const ArtId = await this.$store.state.route.params.ArticleId;
    console.log(ArtId);
    const details = await ArticleService.displayArticle(ArtId);
    console.log(details.data[0].id);
    //console.log(details);
    this.Articledetails = details.data[0];
  },
  data() {
    return {
      Articledetails: "",
      isActive: true,
      comment: ""
    };
  },
  components: {
    footers,
    navbar,
    mdbJumbotron,
    mdbCol,
    mdbView,
    mdbMask,
    mdbBtn
  },
  methods: {
    entercomment: function() {}
  }
};
</script>
<style scoped lang="scss">
.footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
<style scoped lang="scss">
.details {
  width: 50%;
  margin-left: 25%;
  margin-top: 5%;
}
.content {
  width: 60%;
  margin-left: 20%;
  margin-top: 5%;
}
.form-control {
  width: 50%;
  margin-left: 1%;
}
</style>