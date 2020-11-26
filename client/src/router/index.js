import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/Register.vue")
  },
  {
    path: "/Login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/Signup",
    name: "signup",
    component: () => import("../views/Signup.vue")
  },
  {
    path: "/Doctors",
    name: "doctors",
    component: () => import("../views/Doctors.vue")
  },
  {
    path: "/Hospitals",
    name: "hospitals",
    component: () => import("../views/Hospitals.vue")
  },
  {
    path: "/Discussion",
    name: "discussion",
    component: () => import("../views/Discussion.vue")
  },
  {
    path: "/Chat",
    name: "chat",
    component: () => import("../views/chat.vue")
  },
  {
    path: "/Articles",
    name: "articles",
    component: () => import("../views/Articles.vue")
  },

  {
    path: "/ViewArticle/:ArticleId",
    name: "viewarticle",
    component: () => import("../views/ViewArticle.vue")
  },
  {
    path: "/ViewDoctor/:DoctorId",
    name: "viewdoctor",
    component: () => import("../views/ViewDoctor.vue")
  },
  {
    path: "/ViewHospital/:HospitalId",
    name: "viewhospital",
    component: () => import("../views/ViewHospital.vue")
  },
  {
    path: "/Blog",
    name: "blog",
    component: () => import("../views/Blog.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
