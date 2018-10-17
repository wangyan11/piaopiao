# piaopiao

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


SPA:
	Single Page Application

vue-router：
	1. cnpm i vue-router -S
	2. 编写 router/index.js 文件
		import Vue from "vue";
		import VueRouter from "vue-router";
		Vue.use(VueRouter);
		const router = new VueRouter({

		});
		export default router;
	3. 在 main.js 中导入
		import router from "./router/index.js"
		var app = new Vue({
		  el: '#app',
		  components: { App },
		  template: '<App/>',
		  router
		});


本地数据存储：
	localstorage
		能够永久存储
		5M
		没有存储条数限制
		不会占用上传带宽
	sessionstorage
		会话存储
		5M
	cookie
		可以设置时效
		4K
		有存储条数限制
		会占用网络上传带宽

	localStorage:
		保存数据：localStorage.setItem(key,value);
		读取数据：localStorage.getItem(key);
		删除单个数据：localStorage.removeItem(key);
		删除所有数据：localStorage.clear();
		得到某个索引的key：localStorage.key(index);