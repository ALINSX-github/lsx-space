import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes:[
		{
			path:'/',
			name: 'Home',
			component: Home
		},
		{
		  path: '/picture',
		  name: 'picture',
		  component: () => import('./view/Picture.vue')
		},
		{
		  path: '/video',
		  name: 'video',
		  component: () => import('./view/Video.vue')
		},
	]
})