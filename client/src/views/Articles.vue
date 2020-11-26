<template>
  <div class="home">
    <navbar></navbar>
    <mdb-container>
      <h2 class="h1-responsive font-weight-bold text-center my-5">Articles</h2>
      <p class="text-center w-responsive mx-auto mb-5"></p>

      <Article
        v-bind:key="article.id"
        v-for="article in articledetails"
        :title="article.title"
        :id="article.id"
        :shortcontent="article.shortcontent"
        :author="article.author"
        :image="article.image"
      ></Article>
    </mdb-container>
    <footers></footers>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import footers from "@/components/footer.vue";
import { mapGetters } from "vuex";
import Article from "@/components/Articlecard.vue";
import { mdbContainer } from "mdbvue";
import ArticleService from "@/services/Article";
export default {
  name: "BlogPage",
  components: {
    navbar,
    mdbContainer,
    Article,
    footers
  },
  mounted() {
    this.check();
  },
  data() {
    return {
      articledetails: ""
    };
  },
  computed: {
    ...mapGetters(["jobs", "showSpinner"])
  },
  methods: {
    async check() {
      try {
        const response = await ArticleService.view();
        this.articledetails = response.data;
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style></style>
