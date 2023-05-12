import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

// routerの設定を利用する
createApp(App).use(router).mount('#app');
