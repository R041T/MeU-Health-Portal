<template>
  <div class="hello">
    <mdb-footer color="indigo" class="footer">
      <mdb-container>
        <mdb-row>
          <mdb-col md="12">
            <div class="mb-5 flex-center">
              <a class="fb-ic">
                <i
                  class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"
                ></i>
              </a>
              <a class="tw-ic">
                <i
                  class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"
                ></i>
              </a>
              <a class="gplus-ic">
                <i
                  class="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"
                ></i>
              </a>
              <a class="li-ic">
                <i
                  class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"
                ></i>
              </a>
              <a class="ins-ic">
                <i
                  class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"
                ></i>
              </a>
              <a class="pin-ic">
                <i class="fab fa-pinterest fa-lg white-text fa-2x"></i>
              </a>
            </div>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
          &copy; 2020 Copyright:
          <a href="/">Meu.com</a>
        </mdb-container>
      </div>
    </mdb-footer>
  </div>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "FooterPage",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  position: relative;
}
.app {
}
</style>
