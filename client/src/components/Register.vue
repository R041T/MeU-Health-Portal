/* eslint-disable no-console */
<template>
  <div class="container mt-5">
    <mdb-card class="col-xl-12 mx-5 p-5">
      <form>
        <div>
          <p class="h4 text-center mb-4">Sign Up</p>
          <div class="grey-text">
            <mdb-input label="Your email" icon="envelope" type="email" v-model="email" />
            <mdb-input label="Your password" icon="lock" type="password" v-model="password" />
          </div>
          <div class="text-center">
            <mdb-btn @click="register">Register</mdb-btn>
          </div>
        </div>
      </form>
    </mdb-card>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import { mdbInput, mdbBtn, mdbCard } from "mdbvue";
export default {
  components: {
    mdbInput,
    mdbBtn,
    mdbCard
  },
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        console.log(response);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped></style>
