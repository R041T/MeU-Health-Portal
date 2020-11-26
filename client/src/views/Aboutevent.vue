<template>
  <div class="home">
    <navbar></navbar>
    <carousel class="car"></carousel>
    <mdb-container>
      <mdb-card wide class="col-xl-4 col-lg-4">
        <mdb-card-body class="text-center" cascade>
          <mdb-card-title>
            <strong>My adventure</strong>
          </mdb-card-title>
          <h5 class="indigo-text">
            <strong>Photography</strong>
          </h5>
          <mdb-card-text>
            Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam.
          </mdb-card-text>
          <a class="px-2 fa-lg li-ic">
            <mdb-icon fab icon="linkedin" />
          </a>
          <a class="px-2 fa-lg tw-ic">
            <mdb-icon fab icon="twitter" />
          </a>
          <a class="px-2 fa-lg fb-ic">
            <mdb-icon fab icon="facebook" />
          </a>
        </mdb-card-body>
      </mdb-card>
    </mdb-container>
    <div>
      <h2 hover class="h1-responsive font-weight-bold text-center my-5">About the event</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>

    <div class="timelinediv">
      <h1>TimeLine</h1>
      <Timeline
        :timeline-items="timelineItems"
        :message-when-no-items="messageWhenNoItems"
        class="timeline"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import carousel from "@/components/eventcarousel.vue";
import Timeline from "timeline-vuejs";
//import { mapGetters } from "vuex";

import {
  mdbContainer,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbIcon
} from "mdbvue";
export default {
  name: "CardProPage",
  components: {
    Timeline,
    navbar,
    carousel,
    mdbContainer,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,

    mdbIcon
  },
  data: () => ({
    messageWhenNoItems: "There are not items",
    timelineItems: [
      {
        from: new Date(2018, 7),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2016, 1),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2016, 6),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2012, 1),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      }
    ]
  })
};
</script>

<style>
.car img {
  max-height: 500px;
}
.timelinediv {
  text-align: center;
}
.timeline {
  display: inline-block;
}
</style>
