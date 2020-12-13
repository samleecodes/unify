import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faGlobeAsia, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

library.add(faBars);
library.add(faGlobeAsia);
library.add(faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
