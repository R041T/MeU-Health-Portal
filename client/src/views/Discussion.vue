<template>
  <div class="home">
    <navbar></navbar>
    <mdb-container>
      <h2 class="h1-responsive font-weight-bold text-center my-5">Discussion</h2>
      <p
        class="text-center w-responsive mx-auto mb-5"
      >Feel free to chat with people about topics or share your experience anonomously</p>
      <mdb-row>
        <mdb-col lg="5">
          <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
            <img
              class="img-fluid"
              src="https://i2.wp.com/hompath.com/blog/wp-content/uploads/2017/04/alcoholic.jpg?fit=650%2C350&ssl=1"
              alt="Sample image"
            />
            <a>
              <mdb-mask overlay="white-slight" waves />
            </a>
          </mdb-view>
        </mdb-col>
        <mdb-col lg="7">
          <a class="green-text"></a>
          <h3 class="font-weight-bold mb-3 p-0">
            <strong>Alcoholism</strong>
          </h3>
          <p>
            Alcoholism is a serious issue in society these days. Although it is harmless in small
            quantities, when it becomes an addiction it can ruin lives and lead to many behavioural
            issues and affect your quality of life.
          </p>
          <p>
            <a></a> 19/08/2018
          </p>
          <mdb-btn
            @click=" $router.push('chat')"
            color="success"
            size="md"
            class="waves-light"
          >Open Discussion</mdb-btn>
        </mdb-col>
      </mdb-row>
      <hr class="my-5" />
      <mdb-row>
        <mdb-col lg="7">
          <a class="pink-text"></a>
          <h3 class="font-weight-bold mb-3 p-0">
            <strong>Health</strong>
          </h3>
          <p>
            Health is wealth. But, it's always good to know how others are doing and share your experience.
            Many people tend to feel ashamed with their body or embarassed to discuss health issues.
          </p>
          <p>
            <a></a>14/08/2018
          </p>
          <mdb-btn
            @click=" $router.push('chat')"
            color="pink"
            size="md"
            class="mb-lg-0 mb-4 waves-light"
          >Open Discussion</mdb-btn>
        </mdb-col>
        <mdb-col lg="5">
          <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
            <img
              class="img-fluid"
              src="https://www.expatica.com/app/uploads/sites/8/2019/11/Health-Insurance-Quotes-1920x1080.jpg"
              alt="Sample image"
            />
            <a>
              <mdb-mask overlay="white-slight" waves />
            </a>
          </mdb-view>
        </mdb-col>
      </mdb-row>
      <hr class="my-5" />
      <mdb-row>
        <mdb-col lg="5">
          <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
            <img
              class="img-fluid"
              src="https://news.stlpublicradio.org/sites/kwmu/files/styles/x_large/public/202001/0120_provided_jail_01.jpg"
              alt="Sample image"
            />
            <a>
              <mdb-mask overlay="white-slight" waves />
            </a>
          </mdb-view>
        </mdb-col>
        <mdb-col lg="7">
          <a class="indigo-text"></a>
          <h3 class="font-weight-bold mb-3 p-0">
            <strong>Depression</strong>
          </h3>
          <p>
            Depression is very common in teens nowadays. It's important to treat mental illness as harmful as physical illness.
            Our society tends to have a stigma against mental illness and so people tend to feel uncomfortable talking about
            their illness in public.
          </p>
          <p>
            <a></a> 11/08/2018
          </p>
          <mdb-btn
            @click=" $router.push('chat')"
            color="indigo"
            size="md"
            class="waves-light"
          >Open Discussion</mdb-btn>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <footers></footers>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import footers from "@/components/footer.vue";
//import { mapGetters } from "vuex";
import { mdbContainer, mdbRow, mdbCol, mdbMask, mdbView, mdbBtn } from "mdbvue";
export default {
  name: "BlogPage",
  components: {
    navbar,
    footers,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbMask,
    mdbView,
    mdbBtn
  }
};
</script>

<style></style>
