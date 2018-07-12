import Vue from 'vue';
/* element-ui */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/* vue-awesome */
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import './icons'; // icon
import App from './App';
import router from './router';

Vue.component('icon', Icon);

Vue.config.productionTip = false;
/* Element-ui */
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
