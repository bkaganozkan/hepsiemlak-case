import axios from "axios";
import Vue from "vue";

const productModule = {
  // We could use hashMap for store and cart data with IDs
  state: {
    store: [],
    cart: {},
    outStock: [],
    showShoppingDialog: true,
  },
  getters: {
    getStore: (state) => {
      return state.store;
    },
    getCart: (state) => {
      if (state.cart === null) return 0;
      return state.cart;
    },

    getOutStock: (state) => {
      return state.outStock;
    },

    getShowDialog: (state) => {
      return state.showShoppingDialog;
    },

    totalAmountofItem: (state) => {
      let result = Object.values(state.cart).reduce(
        (first, second) => first + parseFloat(second.totalAmount),
        0
      );
      return Math.round(result * 100) / 100;
    },
  },
  mutations: {
    mutateStore: (state, payload) => {
      state.store = payload;
    },

    mutateOutStock: (state, payload) => {
      state.outStock = payload;
    },

    mutateDialog: (state, payload) => {
      state.showShoppingDialog = payload;
    },

    // Add product to cart
    addToCart: (state, payload) => {
      if (!state.cart[payload.id]) {
        Vue.set(state.cart, payload.id, {
          item: payload,
          quantity: 1,
          totalAmount: payload.price,
        });
      } else {
        let newValue = {
          item: payload,
          quantity: state.cart[payload.id].quantity + 1,
          totalAmount: payload.price * (state.cart[payload.id].quantity + 1),
        };
        Vue.set(state.cart, payload.id, newValue);
      }

      // Below aproach is the first I thought after that, above aproach
      // is more effective than below.

      // if (
      //   state.cart.length &&
      //   state.cart.some((val) => val.item.id === payload.id)
      // ) {
      //   state.cart.map((val) => {
      //     if (val.item.id == payload.id) {
      //       val.quantity++;
      //     }
      //   });
      // } else {
      //   state.cart.push({
      //     item: payload,
      //     quantity: 1,
      //   });
      // }
      // state.cart.map(
      //   (value) =>
      //     (value.totalAmount =
      //       Math.round(value.item.price * value.quantity * 100) / 100)
      // );
    },

    // Remove product from cart
    removeFromCart: (state, payload) => {
      if (state.cart[payload.id].quantity <= 1) {
        Vue.set(state.cart, payload.id, null);
        Vue.delete(state.cart, payload.id);
      } else {
        let newValue = {
          item: payload,
          quantity: state.cart[payload.id].quantity - 1,
          totalAmount: payload.price * (state.cart[payload.id].quantity - 1),
        };
        Vue.set(state.cart, payload.id, newValue);
      }
    },
    deleteFromCart: (state, payload) => {
      if (state.cart[payload.id]) Vue.delete(state.cart, payload.id);
    },
  },
  actions: {
    fetchStore: async ({ commit }) => {
      // I even don't know how to use curl in frontend I had no auth for this
      // so I figure out with this way, I hope you will teach me to using curl
      // I am good at python flask, django jwt cookies & auth
      let response = await axios.get("getproducts/");
      let result = response.data;

      // it is the best way to manupilate the store
      commit("mutateStore", result);
    },

    submitCart: async ({ state, commit }) => {
      let orderedItems = [];
      Object.keys(state.cart).forEach((key) =>
        orderedItems.push({ id: key, amount: state.cart[key].quantity })
      );
      // orderedItems = JSON.stringify(orderedItems);

      let response = await axios.post("submitorder/", orderedItems);
      return new Promise((resolve) => {
        let outOfStock = [];
        Object.keys(state.cart).forEach((key) => {
          if (response.data[key] === 404) {
            outOfStock.push(key);
          }
        });
        if (outOfStock.length) {
          commit("mutateOutStock", outOfStock);
          resolve(false);
        } else resolve(true);
      });
    },
  },
};

export default productModule;
