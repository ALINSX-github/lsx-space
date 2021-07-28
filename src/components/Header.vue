<template>
	<div class="header">
		<div class="header_container">
			<div class="header_box">
				<div class="logo">
					<h1><a href="/" title="LSX的学习基地">ALIN</a></h1>
					<span>LSX的学习基地</span>
				</div>
				<div class="menu">
					<ul class="menu_list">
						<li class="menu-item menu-item1">
							<a title="分享精彩WEB开发作品" href="/" style=" float:left;">首页</a>
							<el-tooltip class="item" effect="dark" content="该功能未完工" placement="bottom-end"><span
									id="show_status" class="show_status_up"></span></el-tooltip>
						</li>
						<li class="menu-item menu-item2"><a href="/picture">图片展</a></li>
						<li class="menu-item menu-item3">
							<a href="/video">视频库</a>
						</li>
					</ul>
				</div>
				<div class="search">

				</div>
				<div class="login">
					<a v-on:click="login($event)" title="登录" style="line-height: 40px;">登录</a>
					<div ref="logins" id="login-content" v-show="show">
						<form method="post">
							<div id="users">
								<p><span>用户名：</span></p>
								<input id="log" type="text" name="log" value="" size="20" tabindex="1" />
								<p>
									<span>密码：</span>
								</p>
								<input type="password" name="pwd" id="pwd" size="20" tabindex="2" />
							</div>
							<div id="actions">
								<p>
									<input type="submit" name="submit" value="登录" class="button" tabindex="3" />
								<p>
									<span>
										<input name="rememberme" id="rememberme" type="checkbox" checked="checked"
											value="forever" width="12px" height="12px" />
										保持登录状态
										
									</span>
									<a>忘记密码?</a>
								</p>

							</div>
							<div id="others">
								<p class="t_login_text t_login_text1">
									您可以用第三方帐号登录(
									<span style="color:#4ba6e5">免注册</span>
									):
								</p>
								<p class="connectBox1 t_login_button">
									<a title="QQ"
										href="http://www.boxui.com/blog/wp-content/plugins/wp-connect/login.php?go=qzone"
										rel="nofollow">
										<img src="data:image/png;base64,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" />
									</a>
									<a title="新浪微博"
										href="http://www.boxui.com/blog/wp-content/plugins/wp-connect/login.php?go=sina"
										rel="nofollow">
										<img src="data:image/png;base64,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" />
									</a>
									<a title="腾讯微博"
										href="http://www.boxui.com/blog/wp-content/plugins/wp-connect/login.php?go=qq"
										rel="nofollow">
										<img src="data:image/png;base64,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" />
									</a>
								</p>
								<br />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>


</template>

<script>
	export default {
		data() {
			return {
				input1: '',
				input2: '',
				input3: '',
				input4: '',
				//登录表单默认隐藏
				show: false,
			}
		},
		mounted() {},
		methods: {
			menuClick: function() {},
			login($event) {
				this.show = !this.show;
			}
		}


	}
</script>

<style>
	.header {
		width: 100%;
		font-size: 14px;
		background-color: #333;
		background: -moz-linear-gradient(center top, #1B1A1B 0%, #363735 100%) repeat scroll 0 0 transparent;
		position: fixed;
		_position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999
	}

	.header_container {
		height: 40px;
	}

	.header_box {
		margin-left: auto;
		margin-right: auto;
		width: 1200px;
	}

	.logo {
		float: left;
		width: 200px;
		margin: 3px 10px;
		overflow: hidden;
		position: relative;
	}

	.logo h1 {
		font-size: 16px;
		color: #4ba6e5;
		float: left;
		margin: 0;
		padding: 0;
		border: none;
		line-height: 32px
	}

	.logo h1 a {
		background: url(../static/images/logo.png) no-repeat;
		background-size: 33px 33px;
		text-decoration: none;
		display: block;
		height: 32px;
		line-height: 32px;
		padding: 2px 0 0 42px;
		color: #4ba6e5;
		font-size: 16px;
		font-weight: 700;
		float: left
	}

	.logo span {
		float: left;
		display: block;
		margin-left: 10px;
		font-size: 14px;
		height: 32px;
		line-height: 36px;
		color: #666;
	}

	.menu {}

	.menu_list {
		float: left;
		margin: 10px 10px;
	}

	.menu-item {
		float: left;
		margin-right: 20px;
	}

	.menu-item a {
		color: #ccc;
		font-size: 14px;
	}

	.menu-item1 a {
		color: #4ba6e5
	}

	.menu-item a:hover {
		color: #4ba6e5
	}

	.search {
		float: right;
	}

	.search_input {
		background-color: #000000;
	}



	.login {
		float: right;
	}

	.login a {
		color: #ccc;
		font-size: 14px;
		
	}

	#login-content {
		position: absolute;
		top: 40px;
		right: 2px;
		z-index: 999;
		width: 250px;
		padding: 20px 30px;
		background-color: #fff;
		overflow: hidden;
		border: 2px solid #d9d9d9;
		-webkit-box-shadow: #e6e6e6 0 1px 0;
		-moz-box-shadow: #e6e6e6 0 1px 0;
		box-shadow: #e6e6e6 0 1px 0;
		border-radius: 5px;

	}
	
	#login-content p {
		padding-top: 20px;
		line-height: 24px;
		margin: 0;
		overflow: hidden;
	}

	#login-content input[type=text],
	#login-content input[type=password] {
		-webkit-border-radius: 1px;
		-webkit-box-sizing: border-box;
		background-color: #fff;
		border: 1px solid #d9d9d9;
		border-top: 1px solid silver;
		color: #333;
		display: inline-block;
		font-size: 14px;
		height: 30px;
		line-height: 27px;
		margin-top: 8px;
		padding-left: 8px;
		vertical-align: top;
		width: 250px;
		float: none !important
	}

	#login-content input[type=text]:hover,
	#login-content input[type=password]:hover {
		-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
		border: 1px solid #b9b9b9;
		border-top: 1px solid #a0a0a0
	}

	#login-content input[type=text]:focus,
	#login-content input[type=password]:focus {
		box-shadow: inset 0 1px 2px rgba(0, 0, 0, .3);
		-moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .3);
		-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .3);
		border: 1px solid #4ba6e5;
		outline: 0
	}
	
	#actions p{

	}

	#actions p span {
		float: left;
	}

	#actions p span input {
		border: none;
		float: left;
	}
	#actions a{
		color: #4ba6e5;
		float: right;
	}


	#login-content input[type=submit] {
		-webkit-transition: all .2s ease-out;
		-moz-transition: all .2s ease-out;
		-o-transition: all .2s ease-out;
		-webkit-user-select: none;
		user-select: none;
		-moz-user-select: none;
		background-color: #4ba6e5;
		border: 1px solid #3079ed;
		border-radius: 2px;
		color: #fff;
		display: inline-block;
		font-size: 14px;
		height: 26px;
		width: 60px;
		padding: 0 10px;
		cursor: pointer
	}

	#login-content input[type=submit]:hover,
	#commentform #submit:hover {
		-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
		box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
		-mozbox-shadow: 0 1px 1px rgba(0, 0, 0, .1);
		background-color: #4ba6e5;
		background-image: -webkit-linear-gradient(top, #4ba6e5, #357ae8);
		background-image: -moz-linear-gradient(top, #4ba6e5, #357ae8);
		background-image: -0-linear-gradient(top, #4ba6e5, #357ae8);
		border: 1px solid #2f5bb7;
		color: #fff
	}

	#login-content p img {
		display: block;
		float: left;
		width: 24px;
		height: 24px;
		margin-right: 10px;
	}
	#login-content p img:hover {
		opacity: 0.5;
	}

</style>
