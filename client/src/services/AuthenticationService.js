import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("/register", credentials);
  },
  check(credentials) {
    return Api().post("/login", credentials);
  },
  authcheck() {
    return Api().get("/authcheck");
  },
  logout() {
    return Api().post("/logout");
  },
};
