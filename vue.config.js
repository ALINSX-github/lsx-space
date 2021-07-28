module.exports = {
	devServer: {
		host:"localhost",
		port:8081,
		https:false,
		open:true,
		proxy: {
			'/api': {
				// 用什么接口就填什么接口
				target: 'http://apis.juhe.cn',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		}
	}
}
