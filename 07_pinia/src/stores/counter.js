import { defineStore } from 'pinia';

export const useStoreCounter = defineStore('counter', {
  state: () => ({
    count: 1,
    count2: 2,
    user: {
      name: 'John Doe',
    },
  }),
  // PiniaではdefineStoreのプロパティactionsに関数を追加してStoreに定義したデータの更新を行う
  actions: {
    increment() {
      this.count++;
    },
  },
});
