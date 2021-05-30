<template>
  <div>
    <mdb-navbar color="cyan   " position="top" dark>
      <mdb-navbar-brand to="/">MeU</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item to="/Doctors" active>Doctors</mdb-nav-item>
          <mdb-nav-item to="/Hospitals" active>Hospitals</mdb-nav-item>
          <mdb-nav-item to="/Articles" active>Articles</mdb-nav-item>
          <mdb-nav-item to="/Discussion" active>Discussion</mdb-nav-item>
          <mdb-nav-item to="/Appointments" active>Appointments</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
} from "mdbvue";
export default {
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
  },
  methods: {
    search() {
      this.$store.dispatch("search", { text: this.searchText });
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar-dark .navbar-brand {
  color: black;
}
.navbar-dark .navbar-nav .nav-link {
  color: black;
}
.navbart {
  background-color: aliceblue;
}
</style>
