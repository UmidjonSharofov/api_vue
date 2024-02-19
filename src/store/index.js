// import { createApp } from "vue";
import { createStore } from "vuex";
import auth from "@/Modules/auth";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth },
});

// const app = createApp({
//   /* your root component */
// });

export default store;

// Install the store instance as a plugin
