import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  },
  check(credentials) {
    return Api().post("login", credentials);
  }
};
