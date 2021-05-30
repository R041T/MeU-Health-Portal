import Api from "@/services/Api";

export default {
  create(data) {
    return Api().post("/register", data);
  },
  view() {
    return Api().get("/articles");
  },
  ViewDoctors() {
    return Api().get("/doctors");
  },
  ViewHospitals() {
    return Api().get("/hospitals");
  },
  displayArticle(id) {
    return Api().get(`/ViewArticle/${id}`);
  },
  displayDoctor(id) {
    return Api().get(`/ViewDoctor/${id}`);
  },
  displayHospital(id) {
    return Api().get(`/ViewHospital/${id}`);
  },
  getSlots(data) {
    return Api().post("/getslot", data);
  },
  bookSlot(data) {
    return Api().post("/book", data);
  },
  getApp(data) {
    return Api().post("/getapp", data);
  },
  cancelApp(data) {
    return Api().post("/cancelapp", data);
  },
};
