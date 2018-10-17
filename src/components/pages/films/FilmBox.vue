<template>
	<div class="file-box">
		<ul
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="loading"
			infinite-scroll-distance="10"
			infinite-scroll-immediate-check="false">
			<li
				is="film-item"
				v-for="film in films"
				:key="film.id"
				:film="film"></li>
		</ul>
	</div>
</template>

<script>
	import FilmItem from "./FilmItem.vue";
	import axios from "axios";
	import { Toast } from 'mint-ui';

	export default {
		name : 'FilmBox',
		props: ["type"],
		components : {
			FilmItem
		},
		data() {
			return {
				page : 1,
				count : 7,
				films : [],
				loading: false
			};
		},
		methods : {
			getFilms() {
				var toast = Toast({
					  message: 'Loading...',
					  duration: -1,
					  iconClass: 'fa fa-spinner fa-spin'
				});

				let {page, count} = this;
				axios.get("/mz/v4/api/film/" + this.type, {
					params : {
						page,
						count
					}
				}).then(res=>{
					this.films = this.films.concat(res.data.data.films);
					console.log(this.films);

					let {current, total} = res.data.data.page;
					console.log(current, total);
					if (current === total) {
						return;
					}

					toast.close();

					this.loading = false;
					this.page++;
					console.log(this.page);
				});
			},
			loadMore() {
				this.loading = true;
				this.getFilms();
			}
		},
		watch: {
			type : {
				immediate:true,
				handler(val) {
					console.log("in watch")
					this.page = 1;
					this.loading = false;
					this.films = [];
					this.getFilms();
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	
</style>