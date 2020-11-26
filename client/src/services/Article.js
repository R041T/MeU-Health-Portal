import Api from "@/services/Api";

export default {
  create(data) {
    return Api().post("register", data);
  },
  view() {
    return Api().get("articles");
  },
  ViewDoctors() {
    return Api().get("doctors");
  },
  ViewHospitals() {
    return Api().get("hospitals");
  },
  displayArticle(id) {
    return Api().get(`ViewArticle/${id}`);
  },
  displayDoctor(id) {
    return Api().get(`ViewDoctor/${id}`);
  },
  displayHospital(id) {
    return Api().get(`ViewHospital/${id}`);
  }
};
