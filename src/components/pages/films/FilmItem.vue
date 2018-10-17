<template>
	<router-link 
		tag="li"
		class="film-item-li"
		:to="{name: 'detail', params: {id: film.id}}">
		<div class="film-item">
			<div class="film-item-img">
				<img :src="film.cover.origin">
			</div>
			<div class="film-desc">
				<div class="film-next-arrow">
					<i class="fa fa-angle-right"></i>
				</div>
				<div class="film-grade">{{film.grade}}</div>
				<div class="film-name">{{film.name}}</div>
				<div class="film-intro">{{film.intro}}</div>
				<div class="film-counts">{{film.cinemaCount}} 家影院 {{film.watchCount}}人观影</div>
			</div>
		</div>
	</router-link>
</template>

<script>
	export default {
		name : 'FilmItem',
		props : ["film"]
	}
</script>

<style scoped lang="scss">
	.film-item-li {
		.film-item {
			width: 100%;
		    padding: 20px 0;
		    border-bottom: dashed 1px #c9c9c9;
		    cursor: pointer;

		    .film-item-img {
		    	width: 60px;
		    	height: 82px;
			    float: left;
			    overflow: hidden;
		    }

		    .film-desc {
		    	padding-left: 15px;
			    display: inline-block;
			    width: 75%;

			    .film-next-arrow {
			    	float: right;
				    line-height: 29px;
				    color: #c6c6c6;
			    }
		    }

		    .film-grade {
		    	float: right;
			    font-size: 16px;
			    line-height: 32px;
			    color: #fc7103;
		    }

		    .film-name {
		    	font-size: 16px;
			    line-height: 32px;
			    color: #000;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
		    }

		    .film-intro {
		    	height: 24px;
			    line-height: 24px;
			    color: #8e8e8e;
			    font-size: 12px;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    width: 100%;
			    display: inline-block;
		    }

		    .film-counts {
		    	line-height: 24px;
			    color: #8e8e8e;
			    font-size: 12px;
		    }
		}
	}
</style>