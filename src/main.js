// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./javascripts/rem.js";
import "./stylesheets/main.scss";

import Vue from 'vue'
import App from './App'
import router from "./router/index.js"

// mint-ui 无限滚动、提示
import { InfiniteScroll, Toast } from 'mint-ui';
Vue.use(InfiniteScroll);
Vue.use(Toast);

Vue.config.productionTip = false

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
});
