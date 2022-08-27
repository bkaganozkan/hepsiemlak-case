import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import List from "@/views/List";
import Checkout from "@/views/Checkout.vue";
import product from "@/store/modules/product.js";
import axios from "axios";
import router from "@/router/index.js";

axios.defaults.baseURL = "http://localhost:3000/api/";
axios.defaults.headers["Access-Control-Allow-Origin"] = "POST, GET";
axios.defaults.headers["Access-Control-Allow-Credentials"] = true;

const localVue = createLocalVue();

localVue.use(Vuex);

// let mockAxiosGetResult;
// jest.mock('axios', () => ({
//   get: jest.fn(() => Promise.resolve(mockAxiosGetResult)),
//   post: jest.fn((listItem) => Promise.resolve(mockAxiosPostResult))
// }));

describe("List", () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state: product.state,
      getters: product.getters,
      mutations: product.mutations,
      actions: product.actions,
    });
  });

  it("When List opened loader=true, fetchData, loader=false", async () => {
    mount(List, { store, localVue, axios });
    expect(store.getters.getLoader).toEqual(true);
    await store.dispatch("fetchStore");
    expect(store.getters.getStore).toHaveLength(6);
    expect(store.getters.getLoader).toEqual(false);
  });

  it("Add Item to Cart", async () => {
    const wrapper = mount(List, { store, localVue, axios, router });
    await store.dispatch("fetchStore");
    expect(wrapper.findAllComponents({ name: "ProductItem" }).exists()).toBe(
      true
    );
    expect(wrapper.findAllComponents({ name: "ProductItem" })).toHaveLength(6);
    wrapper
      .findComponent({ name: "ProductItem" })
      .find(".btn-orange")
      .trigger("click");
    expect(Object.keys(store.getters.getCart)).toHaveLength(1);
    // router.push("/checkout");
    // console.log(wrapper.find(".btn-orange"));
    // wrapper
    //   .findComponent({ name: "Checkout" })
    //   .find(".btn-orange")
    //   .trigger("click");
    // // console.log(Checkout);
    // expect(Object.keys(store.getters.getCart)).toHaveLength(0);
  });
});
