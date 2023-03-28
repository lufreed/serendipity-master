const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	//关于WebSocketClient.js报错解决方式
	devServer:{
		port:8080,//端口配置
		https:false,
		proxy:{
			'/api':{
				target:'http://127.0.0.1:3308',//要请求的后端接口
				ws:true,//用于支持websocket,不写默认为true
				changeOrigin:true,//开启跨域
				pathRewrite:{//替换target中的请求地址，以后请求直接写api即可
					'^/api':''
				}
			}
		},
		host:'0.0.0.0',
		client:{
			webSocketURL:'ws://0.0.0.0:8080/ws',
		},
		headers:{
			'Access-Control-Allow-Origin':'*',
		}
	},
	transpileDependencies: true,
	lintOnSave:false,//关闭语法检查
})
