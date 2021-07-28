<template>
  <div id="app">
	  
	  <!-- 头部 -->
	  <Header></Header>
	  
	  <!-- 路由占位符 -->
	  <router-view></router-view>
	
      <!-- 尾部 -->
	  <Footer></Footer>
	  
	  <!-- 返回顶部 -->
	  <BackTop></BackTop>
    
  </div>
</template>

<script>
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'
	import BackTop from '@/components/BackTop.vue'
	
	export default {
	  name: 'app',
	  components: {
		Header,
		Footer,
		BackTop
	  }
	}
</script>

<style>
	
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}
html,
body {
	margin: 0;
	padding: 0;
	color: #999;
	font-size: 14px;
	background-color: #f2f2f2;
}
.nav {
	height: 100%;
}
ul,li {
	list-style: none;
}
a {
	text-decoration: none;
}
</style>

