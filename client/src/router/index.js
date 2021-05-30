import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Login.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/Register.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("CHANGE_AUTH_CHECK");
      if (store.state.authenticated == true) {
        next("/Doctors");
      } else {
        next();
      }
    },
  },
  {
    path: "/Login",
    name: "login",
    component: () => import("../views/Login.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("CHANGE_AUTH_CHECK");
      console.log(store.state.authenticated);
      if (store.state.authenticated == true) {
        next("/Doctors");
      } else {
        next("/");
      }
    },
  },
  {
    path: "/Signup",
    name: "signup",
    component: () => import("../views/Signup.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("CHANGE_AUTH_CHECK");
      if (store.state.authenticated == true) {
        next("/Doctors");
      } else {
        next();
      }
    },
  },
  {
    path: "/Doctors",
    name: "doctors",
    component: () => import("../views/Doctors.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("CHANGE_AUTH_CHECK");
      if (store.state.authenticated == false) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/Hospitals",
    name: "hospitals",
    component: () => import("../views/Hospitals.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("CHANGE_AUTH_CHECK");
      if (store.state.authenticated == false) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/Discussion",
    name: "discussion",
    component: () => import("../views/Discussion.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("CHANGE_AUTH_CHECK");
      if (store.state.authenticated == false) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/Chat",
    name: "chat",
    component: () => import("../views/chat.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("CHANGE_AUTH_CHECK");
      if (store.state.authenticated == false) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/Articles",
    name: "articles",
    component: () => import("../views/Articles.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("CHANGE_AUTH_CHECK");
      if (store.state.authenticated == false) {
        next("/");
      } else {
        next();
      }
    },
  },

  {
    path: "/ViewArticle/:ArticleId",
    name: "viewarticle",
    component: () => import("../views/ViewArticle.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("CHANGE_AUTH_CHECK");
      if (store.state.authenticated == false) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/ViewDoctor/:DoctorId",
    name: "viewdoctor",
    component: () => import("../views/ViewDoctor.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("CHANGE_AUTH_CHECK");
      if (store.state.authenticated == false) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/ViewHospital/:HospitalId",
    name: "viewhospital",
    component: () => import("../views/ViewHospital.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("CHANGE_AUTH_CHECK");
      if (store.state.authenticated == false) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/Blog",
    name: "blog",
    component: () => import("../views/Blog.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("CHANGE_AUTH_CHECK");
      if (store.state.authenticated == false) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/Appointments",
    name: "appointments",
    component: () => import("../views/appointments.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("CHANGE_AUTH_CHECK");
      if (store.state.authenticated == false) {
        next("/");
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
