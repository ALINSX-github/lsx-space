<template>
	<div id="home">
		<div class="container">
			<div id="banner">
				<!-- 轮播图 start-->
				<div class="carousel" style="height: 390px;">
					<el-carousel indicator-position="inside" height="390px" loop>
						<el-carousel-item v-for="(url, key) in urls" :key="url.id">
							<h3>
								<a :href="srcList[key]">
									<img v-lazy="require('../static/banner/'+(key+1)+'.png')" width="100%"
										height="100%" />
								</a>
							</h3>
						</el-carousel-item>
					</el-carousel>
				</div>
				<!-- 轮播图 end-->

				<!-- CSDN博客精选 start-->
				<div class="post_list">
					<h2>CSDN博客精选</h2>
					<li>
						<a href="https://blog.csdn.net/qianduan666a/article/details/107380847" title="前端网站资源精编"
							target="_blank">前端网站资源精编</a>
						<div>web前端 | 07/16</div>
					</li>
					<li>
						<a href="https://blog.csdn.net/qq_39928481/article/details/108436666?utm_term=axios安装及使用&utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduweb~default-6-108436666&spm=3001.4430" title="axios的安装和使用"
							target="_blank">axios的安装和使用</a>
						<div>web前端 | 04/19</div>
					</li>
					<li>
						<a href="https://blog.csdn.net/vbirdbest/article/details/84871336" title="Vue.js + element-ui 扫盲"
							target="_blank">Vue.js + element-ui 扫盲</a>
						<div>web前端 | 04/19</div>
					</li>
					<li>
						<a href="https://blog.csdn.net/halo1416/article/details/81302419" title="vue-lazyload的使用"
							target="_blank">vue-lazyload的使用</a>
						<div>web前端 | 04/19</div>
					</li>
					<li>
						<a href="https://blog.csdn.net/sinat_17775997/article/details/80688397" title="vue-router详解"
							target="_blank">vue-router详解</a>
						<div>web前端 | 04/19</div>
					</li>
					<li id="msg_scroll" ref="msg_scroll">
						<ul style="margin-top: 0px;" id="ul_scroll" v-for="(item, index) in knowledge" :key="index">
							<li class="text_design_knowledge">
								小知识：
								<a :href="item.href" title="Hick定律" target="_blank">{{ item.name }}</a>
							</li>
						</ul>
					</li>
				</div>
				<!-- CSDN博客精选 end-->
			</div>

			<!-- WEB开发必备工具 start-->
			<div id="index_tool" class="post-home">
				<ul>
					<h2 class="title">WEB开发必备工具</h2>
				</ul>
				<ul class="tool_icon">
					<li v-for="(item,key) in toolslist" :key="key">
						<a :href='item.href' :title='item.name' target="_blank">
							<img @mouseover="toolover(key)" @mouseleave="toololeave(key)"
								:src="require('@/static/tools/'+item.src)" width="100%" />
						</a>
					</li>
				</ul>
				<ul class="tool_icon">
					<h3>开发辅助</h3>
					<li v-for="(item,key) in toolslist2" :key="key">
						<a :href='item.href' :title='item.name' target="_blank">
							<img @mouseover="toolover2(key)" @mouseleave="toololeave2(key)"
								:src="require('@/static/tools/'+item.src)" width="100%" />
						</a>
					</li>
				</ul>
			</div>
			<!-- WEB开发必备工具 end-->

			<!-- UI设计师必读书籍 start-->
			<el-tooltip class="item" effect="light" content="UI设计师必读书籍" placement="top">
				<div class="post-home clearfix" id="index_book"><a href="http://www.boxui.com/book" title="UI设计师必读书籍"
						target="_blank"></a></div>
			</el-tooltip>
			<!-- UI设计师必读书籍 end-->

			<div class="post-left">
				<div class="post-home" v-for="(item,i) in newslist" :key="i">
					<div class="post-thumbnail">
						<a :href="item.url" class="inimg">
							<img :src="item.picUrl" alt="">
						</a>
					</div>
					<div class="post-info">
						<ul class="title">
							<a :href="item.url" rel="bookmark" title="陈嗯嗯个人博客" target="_blank">{{item.title}}</a>
						</ul>
						<ul class="others">
							<li class="in_category">{{item.source}}</li>
							<li class="likes">
								<span class="wpfp-span">
									<a href="" class="wpfp-link wizylike_icon" title="已有0人收藏，点击可加入收藏">
										<img src="../static/images/collect.png" alt="" width="12px">
										0
									</a>
								</span>
							</li>
							<li class="comments">
								<a href="" >
									<img src="../static/images/comment.png" alt="" width="12px">
									0
								</a>
							</li>
							<li class="views">
								<img src="../static/images/look.png" alt="" width="12px">
								99+
							</li>
						</ul>	
					</div>
				</div>
			</div>



			<div class="post-right">
				
				<!-- 音乐 -->
				<music></music>
				
			</div>

		</div>

	</div>

</template>

<script>
	import music from '../components/music.vue'
	export default {
		name: 'home',
		components: {
			music,
		},
		data() {
			return {
				scrollUp: false,
				//banner轮播图
				urls: 5,
				srcList: [
					'https://cn.vuejs.org',
					'https://element.eleme.cn/#/zh-CN',
					'https://uniapp.dcloud.io',
					'https://http://nodejs.cn',
					'https://jquery.com',
				],
				knowledge: [{
						href: 'https://blog.csdn.net/weixin_41018304/article/details/102530806',
						name: '面试常见面试题(1)'
					},
					{
						href: 'https://blog.csdn.net/weixin_41018304/article/details/102631052',
						name: '面试常见面试题(2)'
					},
					{
						href: 'https://blog.csdn.net/weixin_41018304/article/details/116482821',
						name: '2021前端面试'
					}
				],
				toolslist: [{
						href: 'https://www.runoob.com/css/css-tutorial.html',
						src: 'css.png',
						name: 'css'
					},
					{
						href: 'https://www.runoob.com/html/html-tutorial.html',
						src: 'html.png',
						name: 'html'
					},
					{
						href: 'https://www.runoob.com/php/php-tutorial.html',
						src: 'php.png',
						name: 'php'
					},
					{
						href: 'https://www.runoob.com/js/js-tutorial.html',
						src: 'javascript.png',
						name: 'javascript',
					},
				],
				toolslist2: [{
						href: 'https://cn.vuejs.org/',
						src: 'vue.png',
						name: 'vue'
					},
					{
						href: 'http://nodejs.cn/api/',
						src: 'nodejs.png',
						name: 'nodejs'
					},
					{
						href: 'https://segmentfault.com/a/1190000017949680',
						src: 'vscode.png',
						name: 'vscode'
					},
					{
						href: 'https://react.docschina.org/',
						src: 'react.png',
						name: 'react',
					},
				],
				//今日头条数据
				newslist:[
					// ctime: ""		​​
					// description: "",				​​
					// picUrl: "",				​​
					// source: "",				​​
					// title: "",
					// url: "",
				],
			}
		},
		mounted() {
			this.getNews();
			this.timer = setInterval(this.auto_scroll, 5000); //垂直滚动文字
		},
		methods: {
			//获取今日头条数据
			getNews(){
				this.$axios.get("http://api.tianapi.com/topnews/index", {
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
//
			auto_scroll: function() {
				console.log(this.knowledge.length);
				this.scrollUp = true;
				if (this.knowledge.length > 0) {
					setTimeout(() => {
						this.knowledge.push(this.knowledge[0]);
						this.knowledge.shift();
						this.scrollUp = false;
					}, 500);
				}
			},
			toolover(key) {
				this.toolslist[key].src = 'hv' + this.toolslist[key].name + '.png'
			},
			toololeave(key) {
				this.toolslist[key].src = this.toolslist[key].name + '.png'
			},
			toolover2(key) {
				this.toolslist2[key].src = 'hv' + this.toolslist2[key].name + '.png'
			},
			toololeave2(key) {
				this.toolslist2[key].src = this.toolslist2[key].name + '.png'
			},
		},
		destroyed() {
			clearInterval(this.timer);
		}

	}
</script>

<style>
	#home {
		width: 100%;
		height: auto;
	}

	.container {
		width: 1200px;
		/* border: 1px solid blueviolet; */
		margin: 0px auto;
		margin-top: 50px;
		position: relative;
		padding-bottom: 60px;
		overflow: hidden;
		min-height: 320px;
	}

	#banner {
		width: 885px;
		height: 390px;
		float: left;
		border-bottom: 1px solid #e5e5e5;
		margin: 0 7px 15px 8px;
		overflow: hidden;
		background: white;
		border-radius: 5px;
	}

	.carousel {
		width: 66%;
		margin-right: 20px;
		float: left;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 390px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	.el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 12px 4px;
    width: 30px;
    }

	.post_list {
		width: 260px;
		height: 390px;
		float: left;
		/* background: #3079ED; */
		text-align: left;
	}

	.post_list h2 {
		text-indent: 15px;
		color: #4ba6e5;
		font-size: 16px !important;
		font-weight: 400 !important;
		margin: 25px 0 5px;
	}

	.post_list li {
		height: 42px;
		padding: 6px 0;
		overflow: hidden;
		border-bottom: 1px dotted #e5e5e5;
		display: inherit;
	}

	.post_list li a {
		padding: 0 0 0 15px !important;
		margin: 0;
		background-color: transparent;
		font-size: 14px;
		display: block;
		float: none !important;
		/* background: url(../static/images/dot_right.png) 0 10px no-repeat; */
		color: #333 !important;
		white-space: nowrap !important;
		overflow: hidden;
		position: relative;
	}

	.post_list li a:hover {
		color: #4ba6e5 !important;
	}

	.post_list li div {
		padding: 0 0 0 15px;
		font-size: 12px;
		margin: 5px 0;
	}

	#msg_scroll {
		padding: 0;
		margin: 15px 0;
		height: 25px;
		text-align: left;
		width: 100%;
		overflow: hidden;
		border: none
	}

	#msg_scroll li {
		/* background: url(images/icon_title.png) no-repeat; */
		width: 270px;
		white-space: nowrap;
		overflow: hidden;
		padding: 5px 0;
		text-align: left;

	}

	#msg_scroll li a {
		background: 0 0;
		padding: 0 !important;
		display: inline;
		white-space: nowrap;
		color: #4ba6e5 !important;
		;
		overflow: hidden;
	}

	#msg_scroll .text_news {
		background-position: 0 -2px
	}

	#msg_scroll .text_party {
		background-position: 0 -34px
	}

	#msg_scroll .text_job {
		background-position: 0 -66px
	}

	#msg_scroll .text_design_knowledge {
		background-position: 0 -98px
	}

	#index_tool {
		float: left;
		padding-bottom: 20px;
		margin: 0 7px 15px 8px;
	}

	#index_tool ul {
		overflow: hidden;
		padding-left: 0px;
		margin-top: 0px;
	}

	#index_tool ul li {
		float: left;
		padding-left: 15px
	}

	#index_tool h2 {
		font-weight: 400;
		display: block;
		height: 30px;
		line-height: 30px;
		word-spacing: 5px;
		letter-spacing: 1px;
		margin-top: 0;
	}

	#index_tool h3 {
		font-size: 14px;
		font-weight: 400;
		padding: 20px 10px 10px
	}

	#index_tool .title {
		background-color: #4ba6e5;
		border-bottom: 1px solid #f5f5f5;
		padding: 10px 20px;
		color: #fff
	}

	.tool_icon {
		padding: 5px 0 8px 5px;
		color: #999
	}

	.tool_icon h3 {
		padding: 0 0 15px 15px !important;
		margin-top: -6px;
		height: 18px;
		overflow: hidden
	}

	.tool_icon li a {
		/* background: url(./images/icon_tool.png) no-repeat; */
		width: 48px;
		height: 48px;
		display: block;
		border: 1px dotted #e5e5e5
	}

	.tool_icon li .ps {
		background-position: 0 0
	}

	.tool_icon li .ps:hover {
		background-position: 0 -60px
	}

	.tool_icon li .ai {
		background-position: -60px 0
	}

	.tool_icon li .ai:hover {
		background-position: -60px -60px
	}

	.tool_icon li .axure {
		background-position: -120px 0
	}

	.tool_icon li .axure:hover {
		background-position: -120px -60px
	}

	.tool_icon li .mindmanage {
		background-position: -180px 0
	}

	.tool_icon li .mindmanage:hover {
		background-position: -180px -60px
	}

	.tool_icon li .markman {
		background-position: -300px 0
	}

	.tool_icon li .markman:hover {
		background-position: -300px -60px
	}

	.tool_icon li .cutAndSliceMe {
		background-position: -240px 0
	}

	.tool_icon li .cutAndSliceMe:hover {
		background-position: -240px -60px
	}

	.tool_icon li .kuler {
		background-position: -360px 0
	}

	.tool_icon li .kuler:hover {
		background-position: -360px -60px
	}

	.tool_icon li .guideguide {
		background-position: -420px 0
	}

	.tool_icon li .guideguide:hover {
		background-position: -420px -60px
	}


	#index_book {
		height: 78px;
		background-color: #a0cf67;
		margin: 0 7px 15px 8px;
		border-radius: 5px;

	}

	#index_book a {
		background: url(../static/images/img_book.png) no-repeat;
		display: block;
		width: 100%;
		height: 100%;
		background-position: 0 -15px;
	}

	#index_book a:hover {
		background-position: 0 -125px
	}

	.post-left {
		width: 75%;
		float: left;
	}

	.post-home {
		float: left;
		width: 285px;
		margin: 0 7px 15px 8px;
		background-color: #fff;
		overflow: hidden;
		border-radius: 5px;
	}
	.post-left .post-home:hover{
		opacity: 0.75;
		box-shadow: #666 0px 5px 5px;
		transition: .5s;
		transform: matrix(1.07, 0, 0, 1.07, 0, 0);
	}

	.post-thumbnail {
		height: 140px;
		overflow: hidden;
		position: relative;
	}
	

	.post-thumbnail a {
		display: inline-block;
		min-height: 100px;
		max-height: 307px;
		overflow: hidden;
	}

/* 	a:link,
	a:visited {
		color: #4ba6e5;
		text-decoration: none;
	}
 */
	a:hover{
		color: #4ba6e5;
	}
	.post-thumbnail a img {
		display: inline-block;
		position: static;
		width: 285px;
		height: 320px;
		display: block;
		object-fit: cover;
	}

	img {
		border: 0 none;
		position: relative;
	}
	
	.post-info {
		height: auto;
		text-align: center;
		text-shadow: 0 1px 0 #fff;
		border-width: 1px;
		border-style: solid;
		border-color: #fff;
		background-color: #fff;
		border-top: 1px solid #f1f1f1;
		color: #333;
		
	}
	.post-info, .post-info a, .post-noimg a, .post-noimg p {
	    color: #333;
	}
	.post-info a:hover{
		color: #4ba6e5;
	}
	.post-info .title {
	    white-space: nowrap !important;
	    overflow: hidden;
	    min-height: 21px;
	    line-height: 1em;
		/* 标题溢出隐藏 */
		overflow:hidden;
		white-space:nowrap; 
		text-overflow:ellipsis
	}
	
	.post-info .title {
	    text-align: left;
	    color: #333;
	    font-size: 16px;
	    marging-top: 10px;
	    margin-bottom: 15px;
	    overflow: hidden;
		padding: 2px 10px 0px 10px;
	}
	.post-info .others {
	    overflow: hidden;
	    color: #999;
		padding: 0 10px;
	}
	.post-info .others .in_category {
	    /* width: 80px; */
	    margin: 0;
	    float: left;
	}
	.post-info .others > li {
	    float: right;
	    text-align: left;
	    font-size: 11px;
	    margin: 0 0 0 5px;
	}
	.post-info .views {
	    background-repeat: no-repeat;
	    background-position: 0 center;
	    text-indent: 18px;
	}
	.post-info .likes .wizylike_icon {
	    background-repeat: no-repeat;
	    background-position: 0 2px;
	    cursor: pointer;
	    text-indent: 18px;
	    width: auto !important;
	    display: block;
	    height: 16px;
	    color: #999;
	}
	.post-info .likes .wizylike_icon {
	    cursor: pointer;
	    text-indent: 18px;
	    color: #999;
	}
	.post-info .comments a {
	    background-repeat: no-repeat;
	    background-position: 0 0;
	    text-indent: 18px;
	    display: block;
	    text-decoration: none;
	    color: #999;
	}
	.post-info .comments a {
	    text-indent: 18px;
	    color: #999;
	}
	.post-info .views {
	    text-indent: 18px;
	}
	

	.post-right {
		float: left;
		width: 285px;
		margin: 0px 7px 15px 8px;
		height: auto;
		/* background-color: #2299BB; */
		border-radius: 5px;
	}
</style>
