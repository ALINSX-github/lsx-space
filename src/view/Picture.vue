<template>
	<div>
		<div id="wrap">
			<section>
				<div class="img-wrapper" v-for="(url, key) in urls" :key="url.id">
					<img v-lazy="require('../static/dogs/dog(' + (key + 1) + ').jpg')" preview preview-text="描述" />
				</div>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			src: 'https://source.unsplash.com/user/erondu/400x300',
			urls: 67
		};
	}
};
</script>
<style>
#wrap{
	margin-top: 45px;
}
section {
	display: flex;
	flex-wrap: wrap;
	margin:0 8px 0 0;
}

section::after {
	content: '';
	flex-grow: 999999999999999999999;
}

.img-wrapper {
	flex-grow: 1;
	margin: 9px 2px 2px 9px;
	background: #ffffff;
	height: 282px;
	position: relative;
}

.img-wrapper img {
	height: 284px;
	object-fit: cover;
	min-width: 100%;
	vertical-align: bottom;
}

.img-wrapper .info {
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(77, 77, 77, 0.3);
	transition: all 0.5s;
}

.img-wrapper .info .title {
	transition: height 0.5s;
	padding: 0 10px;
	background: rgba(0, 0, 0, 0.5);
	color: white;
	line-height: 40px;
	text-align: center;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 0;
}

.img-wrapper:hover .info {
	opacity: 1;
}

.img-wrapper:hover .title {
	height: 40px;
}
</style>
