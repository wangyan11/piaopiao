<template>
	<header>
		<nav class="tool-bar">
			<div class="left">
				<div class="title-icon" @click="isNavShow=!isNavShow">
					<i class="fa fa-navicon"></i>
				</div>
				<div class="title">卖座电影</div>
			</div>
			<div class="right">
				<div class="city" @click="chgaddr">
					成都
					<i class="fa fa-angle-down"></i>
				</div>
				<div class="user">
					<i class="fa fa-user-o"></i>
				</div>
			</div>
		</nav>

		<!-- 侧边导航 -->
		<nav-list :isNavShow="isNavShow" @close="isNavShow=false"></nav-list>

	</header>
</template>

<script>
	import NavList from "./NavList.vue";
	import "animate.css";
	// import bus from "../../../javascripts/bus.js";
	import router from "../../../router/index.js";

	export default {
		name : "Header",
		data() {
			return {
				isNavShow : false
			}
		},
		components : {
			NavList
		},
		methods : {
			closeNavList() {
				this.isNavShow = false;
			},
			chgaddr() {
				this.$router.push("/addr");
			}
		},
		created() {
			// bus.$on("closeNav", this.closeNavList);
			router.beforeEach((to, from, next)=>{
				this.closeNavList();
				next();
			});
		}
	};
</script>

<style scoped lang="scss">
	.tool-bar {
		background: #282828;
	    position: fixed;
	    z-index: 500;
	    top: 0;
	    right: 0;
	    left: 0;
	    width: auto;
	    height: 50px;
	    line-height: 50px;
	    overflow: hidden;

	    .left {
	    	color: #fff;
		    font-size: 16px;
		    line-height: 50px;
		    text-align: left;
		    text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
		    width: auto;
		    height: 50px;
		    margin: 0 auto;
		    float: left;

		    .title-icon {
		    	float: left;
			    width: 48px;
			    text-align: center;
			    border-right: 1px solid #222;
			    box-shadow: 1px 0 1px #363636;
			    color: #999;
		    }

		    .title {
		    	padding: 0 1em;
			    float: left;
			    font-size: 14px;
			    color: #efefef;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    displdday: inline-block;
			    overflow: hidden;
		    }
	    }

	    .right {
	    	float: right;
	    	color: #999;
	    	.city {
	    		float: left;
			    font-size: 14px;
			    padding: 0 6px;
	    	}
	    	.user {
	    		float: left;
			    font-size: 16px;
			    width: 48px;
			    text-align: center;
	    	}
	    }
	}
</style>