<template>
	<div id="video_container">

		<ul class="video_mian">
			<li class="video_item" v-for="(item,i) in newslist" :key="i">
				<div class="video_pic">
					<a class="a_pic" :href="item.shareurl">
						<img :src="item.coverurl" alt="">
					</a>
					<a class="a_title" :href="item.shareurl">
						<p>
							<span>{{item.title}}</span>
						</p>
					</a>
					<div class="user_info">
						<a :href="item.shareurl">
							<div>
								<img :src="item.avatar" alt="">
							</div>
							<div>
								<span>{{item.author}}</span>
							</div>
						</a>
						<span class="create_time">{{item.createtime}}</span>
					</div>
				</div>
			</li>
		</ul>

		<!-- <div class="video_mian">
			<div class="video_item" v-for="(item,i) in adminList" :key="i">
				<div class="mr30 mt10">
					<span class="link-color fontExtraLarge">{{i+1}}、{{item.title}}</span>
					<video ref='video' :id="'myVideos'+i" class="video-js vjs-default-skin vjs-big-play-centered mt10">
						<source
							src="https://www.iesdouyin.com/share/video/6943940575011867908/?region=&mid=6943940627499764488&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1"
							type="video/mp4" />
					</video>
				</div>
			</div>
		</div> -->

		<!-- <iframe  src="//player.bilibili.com/player.html?aid=74592164&bvid=BV1EE411B7SU&cid=127585883&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 600px; height: 400px;"> </iframe> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				adminList: [

				],
				newslist: [{
					"hotindex": 0,
					"createtime": 0,
					"duration": 0,
					"playaddr": "",
					"coverurl": "",
					"title": "",
					"shareurl": "",
					"author": "",
					"signature": "",
					"avatar": ""
				}, ],
			}
		},
		methods: {
			initVideo() {
				let elementList = document.querySelectorAll(".video-js");
				this.element = elementList.length; //videojs 数量赋值
				for (let index = 0; index < elementList.length; index++) {
					let id = elementList[index].getAttribute('id');
					this.$videos(id, {
						autoplay: false, //自动播放
						//   muted:false, // 是否静音,
						controls: true, //控制条
						//   techOrder: ['html5','flash'],//设置flash播放
						language: "en", // 初始化语言
						preload: "auto", // 预加载
						width: '400',
						height: '200',
						// 倍速播放
						playbackRates: [0.5, 1, 1.5, 2],
					}, function() {
						this.volume(0);
						//这个地方很重要,一旦你的muted 不起作用 ,就一定要在设置当前的视频回调中设置声音为0
						//this.play(); //这个地方也一样 ,此方法this.play()==autoplay  是有相同的效果
						this.one("playing", function() { // 监听播放
							console.log("成功初始化视频");
						});

						this.one("error", function(error) { // 监听错误
							console.error("监听异常", error);
						});
					});
				}
			},
			//请求获取抖音视频数据
			getVideolist() {
				this.$axios.get("http://api.tianapi.com/txapi/dyvideohot/index", {
						params: {
							key: "dcba33a34834ddcede2d4cca77ff47a6"
						}
					})
					.then(res => {
						this.newslist = res.data.newslist;
						console.log(this.newslist);
					})
					.catch(error => {
						console.log(error)
					})
			},
		},
		mounted() {
			// this.initVideo();
			this.getVideolist();
		},
		beforeDestroy() {
			//控制 看你页面上显示的多少个  就循环多少次销毁
			// 这儿的element  就是上面 我初始化后获取节点个数
			for (let index = 0; index < this.element; index++) {
				this.$videos(`myVideos${index}`).dispose()
			}
		},
	}
</script>

<style scoped="scoped">
	#video_container {
		margin-top: 50px;

	}

	.video_mian {
		width: 1200px;
		margin: 0 auto;
		/* border: 1px solid #009966; */
		padding: 0;
	}

	.video_item {
		width: 285px;
		height: 340px;
		float: left;
		/* border: 1px solid #3079ED; */
		border-radius: 5px;
		margin: 10px 7.5px;
	}

	.video_pic {
		width: 100%;
		height: 300px;
	}
	/* 鼠标移入图片放大 */
	.video_pic:hover .a_pic img{
		opacity: 0.7;
		transition: .5s;
		transform: matrix(1.07, 0, 0, 1.07, 0, 0);
	}

	.a_pic {
		height: 200px;
		overflow: hidden;
	}


	.a_title {
		margin-top: 8px;
		color: #000000;

	}

	.a_title p {
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		color: #2f3035;
		display: -webkit-box;
		font-family: PingFang SC, DFPKingGothicGB-Medium, sans-serif;
		font-size: 16px;
		font-weight: 500;
		height: 48px;
		line-height: 24px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
	}

	.a_title p span {
		color: #2f3035;
		font-size: 16px;
		line-height: 24px;
	}
	.a_title:hover p span {
		color: #FF3333
	}
	

	.a_pic img {
		width: 100%;
		height: 200px;
		display: block;
		object-fit: cover;
		border-radius: 5px;
	}


	.user_info {
		width: 100%;
		height: 34px;
		padding: 10px 10px;
	}

	.user_info a {
		display: inline-block;
		height: 34px;
		float: left;
	}
	.user_info:hover a div span {
		color: #4BA6E5;
	}

	.user_info a div {
		float: left;
	}

	.user_info a div img {
		width: 34px;
		height: 34px;
		border-radius: 50%;
	}

	.user_info a div span {
		font-size: 16px;
		color: #292929;
		line-height: 34px;
		margin-left: 8px;
	}

	.user_info .create_time {
		height: 34px;
		float: right;
		line-height: 34px;
		margin-right: 20px;
	}
</style>
