import { defineStore } from 'pinia';
import { warn } from 'vue';

export const useStoreCounter = defineStore('counter', {
  state: () => ({
    count: 1,
    count2: 2,
    user: {
      name: 'John Doe',
    },
  }),
  // Storeで定義したデータに対してcomputedプロパティの設定を行い対場合にgettersを利用する
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  // PiniaではdefineStoreのプロパティactionsに関数を追加してStoreに定義したデータの更新を行う
  actions: {
    increment() {
      this.count++;
    },
  },
});
