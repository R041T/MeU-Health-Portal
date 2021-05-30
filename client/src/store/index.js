import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import Authentication from "@/services/AuthenticationService";

export default new Vuex.Store({
  state: {
    name: "",
    email: "",
    password: "",
    jobs: [],
    hospitals: [],
    articles: [],
    signin: [],
    authenticated: false,
    showSpinner: false,
  },
  mutations: {
    SET_NAME(state, name) {
      state.name = name;
    },
    SET_EMAIL(state, email) {
      state.email = email;
    },
    SET_PASSWORD(state, password) {
      state.password = password;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_HOSPITALS(state, hospitals) {
      state.hospitals = hospitals;
    },
    SET_SHOW_SPINNER(state, showSpinner) {
      state.showSpinner = showSpinner;
    },
    SET_AUTH_CHECK(state, auth_check) {
      // console.log(auth_check);
      state.authenticated = auth_check.authenticated;
      state.email = auth_check.userId;
    },
  },
  actions: {
    //async updatesignup({ commit }, { name, email, password }) {
    //need to add code to send signup details to database
    //},
    async fetchData({ commit }) {
      commit("SET_SHOW_SPINNER", true);
      return new Promise((resolve) => {
        setTimeout(async () => {
          const res = await fetch("jobs.json");
          const val = await res.json();

          resolve(val);
          commit("SET_SHOW_SPINNER", false);
        }, 1000);
      });
    },
    async fetchHospitalsData({ commit }) {
      commit("SET_SHOW_SPINNER", true);
      return new Promise((resolve) => {
        setTimeout(async () => {
          const res = await fetch("Hospitals.json");
          const val = await res.json();

          resolve(val);
          commit("SET_SHOW_SPINNER", false);
        }, 1000);
      });
    },
    async fetchJobs({ dispatch, commit }) {
      const myJson = await dispatch("fetchData");
      commit("SET_JOBS", myJson);
    },
    async fetchHospitals({ dispatch, commit }) {
      const myJson = await dispatch("fetchHospitalsData");
      commit("SET_HOSPITALS", myJson);
    },
    async fetchSignin({ commit }, { text }) {
      const val = await fetch("signin.json");
      const signin = await val.json();
      console.log(
        typeof signin.filter((val) => val.username.toLowerCase() == text)
      );
      const login = signin.filter(
        (val) => val.username.toLowerCase() == text
      )[0];
      commit("SET_NAME", login.username.toLowerCase());
      commit("SET_PASSWORD", login.password);
    },
    async search({ dispatch, commit }, { text }) {
      const myJson = await dispatch("fetchData");
      commit(
        "SET_JOBS",
        myJson.filter((val) =>
          val.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    },
    async upcoming({ dispatch, commit }) {
      const myJson = await dispatch("fetchData");
      commit(
        "SET_JOBS",
        myJson.filter((val) => new Date(val.startdate) > new Date())
      );
    },
    async previous({ dispatch, commit }) {
      const myJson = await dispatch("fetchData");
      commit(
        "SET_JOBS",
        myJson.filter((val) => new Date(val.enddate) < new Date())
      );
    },
    async ongoing({ dispatch, commit }) {
      const myJson = await dispatch("fetchData");

      commit(
        "SET_JOBS",
        myJson.filter(
          (val) =>
            new Date() >= new Date(val.startdate) &&
            new Date() <= new Date(val.enddate)
        )
        // have to include time condition in future
      );
    },
    async CHANGE_AUTH_CHECK({ commit }) {
      try {
        const response = await Authentication.authcheck();
        // console.log(response);
        if (response.data.authenticated == true && response.data.userId) {
          // console.log("from store", response.data);
          await commit("SET_AUTH_CHECK", response.data);
          return response.data;
        }
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
  getters: {
    getName(state) {
      return state.name;
    },
    getEmail(state) {
      return state.email;
    },
    getPassword(state) {
      return state.password;
    },
    jobs(state) {
      return state.jobs;
    },
    hospitals(state) {
      return state.hospitals;
    },
    showSpinner(state) {
      return state.showSpinner;
    },
  },
  modules: {},
});
