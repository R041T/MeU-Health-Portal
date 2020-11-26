<template>
  <div>
    <mdb-container>
      <mdb-row>
        <mdb-card reverse>
          <mdb-view hover cascade>
            <a href="#!">
              <mdb-card-image
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Card image cap"
              ></mdb-card-image>
              <mdb-mask waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body class="text-center" cascade>
            <mdb-card-title><strong>My adventure</strong></mdb-card-title>
            <h5 class="indigo-text"><strong>Photography</strong></h5>
            <mdb-card-text
              >Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem
              aperiam.</mdb-card-text
            >
            <a class="px-2 fa-lg li-ic"> <mdb-icon fab icon="linkedin"/></a>
            <a class="px-2 fa-lg tw-ic"> <mdb-icon fab icon="twitter"/></a>
            <a class="px-2 fa-lg fb-ic"> <mdb-icon fab icon="facebook"/></a>
          </mdb-card-body>
        </mdb-card>
      </mdb-row>
      <div>
        <p>
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiamSed ut perspiciatis unde omnis
          iste natus sit voluptatem accusantium doloremque laudantium, totam rem
          aperiamSed ut perspiciatis unde omnis iste natus sit voluptatem
          accusantium doloremque laudantium, totam rem aperiamSed ut
          perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiamSed ut perspiciatis unde omnis
          iste natus sit voluptatem accusantium doloremque laudantium, totam rem
          aperiamSed ut perspiciatis unde omnis iste natus sit voluptatem
          accusantium doloremque laudantium, totam rem aperiamSed ut
          perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiamSed ut perspiciatis unde omnis
          iste natus sit voluptatem accusantium doloremque laudantium, totam rem
          aperiamSed ut perspiciatis unde omnis iste natus sit voluptatem
          accusantium doloremque laudantium, totam rem aperiamSed ut
          perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam
        </p>
      </div>
    </mdb-container>
    <footers class="footer"></footers>
  </div>
</template>
<script>
import footers from "@/components/footer.vue";

import {
  mdbContainer,
  mdbRow,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbView,
  mdbMask,
  mdbIcon
} from "mdbvue";
export default {
  name: "CardProPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCard,
    footers,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbView,
    mdbMask,
    mdbIcon
  }
};
</script>
<style></style>
