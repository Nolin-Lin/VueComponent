import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  { path: '/', redirect: 'botNav', component: resolve => require(['@/components/botNav'], resolve) },
  { path: '/botNav', component: resolve => require(['@/components/botNav'], resolve) },
  { path: '/wxNav', component: resolve => require(['@/components/wxNav'], resolve) },
  { path: '/svg', component: resolve => require(['@/pages/icon/index'], resolve) }

];

export default new Router({
  mode: 'history',
  routes,
  strict: process.env.NODE_ENV !== 'production'
});
