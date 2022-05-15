// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import axios from "axios";


locale.use(lang);
Vue.use(ElementUI);
Vue.config.productionTip = false;
axios.defaults.withCredentials=true;
Vue.prototype.$http=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
