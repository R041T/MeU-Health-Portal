<template>
  <div class="home">
    <navbar></navbar>
    <div>
      <mdb-row>
        <h1 class="col-16" style="margin-top:5%">{{ Articledetails.title }}</h1>
      </mdb-row>
    </div>
    <mdb-jumbotron class="details mb-0 text-center hoverable p-4">
      <mdb-col>
        <mdb-view
          :src="Articledetails.image"
          alt="Sample image for first version of blog listing"
        >
          <a>
            <mdb-mask waves overlay="white-slight" />
          </a>
        </mdb-view>
      </mdb-col>
    </mdb-jumbotron>
    <br /><br /><br />

    <editor-content :editor="editor" />
    <br /><br /><br />

    <footers class="footer"></footers>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import footers from "@/components/footer.vue";
import ArticleService from "@/services/Article";
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import { mdbJumbotron, mdbCol, mdbView, mdbMask } from "mdbvue";
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
    this.editor = new Editor({
      editable: false,
      content: `${this.Articledetails.content}
      `,
      extensions: [StarterKit],
    });
  },
  data() {
    return {
      Articledetails: "",
      isActive: true,
      comment: "",
    };
  },
  components: {
    footers,
    navbar,
    mdbJumbotron,
    mdbCol,
    mdbView,
    mdbMask,
    EditorContent,
  },
  methods: {
    entercomment: function() {},
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
