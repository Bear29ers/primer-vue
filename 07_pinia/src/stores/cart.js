import { defineStore } from 'pinia';

export const useStoreCart = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  actions: {
    addCart(product) {
      // find関数を利用してカートに同じ商品が入っているかチェックし、入っていればquantityの数を増加させる
      const item = this.items.find((item) => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
  },
});
