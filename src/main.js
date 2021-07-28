import Vue from 'vue'
import App from './App.vue'
import router from './router'

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
	preLoad: 1.3,
	// error: require('./static/loading.gif'),
	loading: require('./static/loading.gif'),
	attempt: 1
})

//图片点击大图插件
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

//引用Video.js
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$videos = Video

// axios需要使用prototype将axios挂载到原型上 ，$后面是自己另起的名称，以后就可以使用该名称
import axios from 'axios'
Vue.prototype.$axios = axios
// 配置请求的跟路径
// Axios.defaults.baseURL = url
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
