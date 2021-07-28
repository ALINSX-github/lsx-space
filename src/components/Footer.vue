<template>
	<div class="footer">
		<div id="footer">
			<div>
				<ul class="title_img">
					<h3>项目基地</h3>
					<li><a href="/" title="WEB开发-返回项目基地首页">首页</a></li>
					<li><a href="/" title="关于项目基地">关于项目基地</a></li>
					<li><a href="/" title="友情链接">友情链接</a></li>
				</ul>
				<ul class="title_img">
					<h3>分享设计</h3>
					<li><a title="酷站欣赏" href="/">酷站欣赏</a></li>
					<li><a title="WEB开发_优秀用户界面设计" href="/">WEB开发</a></li>
					<li><a title="交互设计" href="/">交互设计</a></li>
					<li><a title="用户研究" href="/">用户研究</a></li>
					<li><a title="WEB开发理念" href="/">设计理念</a></li>
				</ul>
				<ul class="title_img">
					<h3>设计资源</h3>
					<li><a title="WEB开发必备工具" href="/">WEB开发必备工具</a></li>
					<li><a title="WEB开发师必读书籍" href="/">WEB开发师必读书籍</a></li>
				</ul>
				<ul class="freind_home">
					<li id="linkcat-535" class="linkcat">
						<h2>合作伙伴</h2>
						<ul class="xoxo blogroll">
							<li><a href="/" rel="me" title="WEB开发_什么是WEB开发_WEB开发是做什么的">WEB开发</a></li>
							<li><a href="http://bbs.ui.cn/" title="专业界面交互设计平台" target="_blank">Iconfans</a></li>
							<li><a href="http://www.offidea.com/" rel="friend met" title="WEB开发工作室" target="_blank">网站设计</a></li>
							<li><a href="http://www.ekoooo.com/" target="_blank">素材艺库</a></li>
							<li><a href="http://www.onhoo.com/" title="淘宝店铺装修设计" target="_blank">暗号设计</a></li>
							<li><a href="http://www.uimaker.com/" target="_blank">UI制造者</a></li>
							<li><a href="http://www.poluoluo.com/" target="_blank">破洛洛</a></li>
							<li><a href="http://www.woshipm.com/" target="_blank">人人都是产品经理</a></li>
						</ul>
					</li>
				</ul>
				<ul>
					<li><a href="/" target="_blank" title="项目基地网微博" class="icon_weibo"></a></li>
					<li>
						官方QQ群（技术交流、招聘求职）：
						<a href="/" target="_blank">888888</a>
					</li>
					<li><a href="/" rel="nofollow">粤ICP备9999999号</a></li>
					<li>
						Copyright © 2018-2021
						<a href="/" title="项目基地">项目基地</a>
						All rights reserved
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		
	}

</script>

<style>
	.footer {
		width: 100%;
		margin-top: 20px;
		padding: 0 20px;
		background-color: #333;
		border-top: 1px solid #e5e5e5;
		border-bottom: 1px solid #e5e5e5;
		line-height: 24px;
		text-align: left;
		font-size: 12px;
		overflow: hidden;
	}
	#footer {
		width: 1200px;
		margin: 0 auto;
	}
	
	#footer .title_img a {
		/*background: url(images/dot_right.png) 0 10px no-repeat;*/
		display: block;
		text-indent: 16px !important
	}
	
	#footer div>ul {
		float: left;
		padding: 0px 20px
	}
	
	#footer a {
		color: #666;
		font-size: 12px
	}
	
	#footer a:hover {
		color: #4ba6e5
	}
	
	#footer .freind_home {
		width: 400px !important
	}
	
	#footer .freind_home h2 {
		text-align: left;
		font-size: 14px;
		font-weight: 400;
		padding-left: 5px;
	}
	
	#footer .freind_home .blogroll {
		overflow: hidden;
		padding-left: 0;
	}
	
	#footer .freind_home .blogroll li {
		float: left
	}
	
	#footer .freind_home .blogroll li a {
		border: none;
		background-color: transparent;
		font-size: 12px;
		padding: 5px
	}
	
	#footer h3 {
		text-indent: 16px;
		color: #999
	}
	
	#footer .icon_weibo {
		/*background: url(images/icon_share_to.png) 0 0 no-repeat;*/
		width: 50px;
		height: 50px;
		display: block
	}
	
	#footer .icon_weibo:hover {
		background-position-y: -50px
	}
	
	#footer {
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none
	}
</style>
