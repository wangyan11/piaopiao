import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 组件
import Home from "../components/pages/home/Home.vue";
import Films from "../components/pages/films/Films.vue";
import Detail from "../components/pages/detail/Detail.vue";
import NotFound from "../components/common/NotFound.vue";
// import bus from "../javascripts/bus.js";

const router = new VueRouter({
	routes : [
		{
			path: "",
			redirect: "/home"
		},
		{
			path: "/home",
			component: Home
		},
		{
			path: "/films",
			component: Films
		},
		{
			path: "/detail/:id",
			name: "detail",
			component: Detail,
			props: true
		},
		{
			path : "/404",
			component: NotFound
		},
		{
			path : "**",
			redirect: "/404"
		}
	]
});

// router.beforeEach((to, from, next)=>{
// 	bus.$emit("closeNav");
// 	next();
// });

export default router;