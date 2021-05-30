/* eslint-disable no-console */
<template>
  <div class="container mt-5">
    <mdb-card class="col-xl-12 mx-5 p-5">
      <form>
        <div>
          <p class="h4 text-center mb-4">Log in</p>
          <div class="grey-text">
            <mdb-input label="Your email" icon="envelope" type="email" v-model="email" />
            <mdb-input label="Your password" icon="lock" type="password" v-model="password" />
          </div>
          <div class="text-center">
            <mdb-btn type="button" @click="check">Login</mdb-btn>
            <div>Already have an account? Click Here</div>
          </div>
        </div>
      </form>
    </mdb-card>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import { mdbInput, mdbBtn, mdbCard } from "mdbvue";
import { mapGetters } from "vuex";
export default {
  components: {
    mdbInput,
    mdbBtn,
    mdbCard
  },
  computed: {
    ...mapGetters(["getEmail", "getPassword"])
  },
  data() {
    return {
      email: "",
      password: "",
      login: false
    };
  },
  methods: {
    async check() {
      try {
        const response = await AuthenticationService.check({
          email: this.email,
          password: this.password
        });
        if (response.data == true) {
          console.log(response);
          this.login = true;
          this.$router.push("doctors");
        } else this.$router.push("login");
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped></style>
