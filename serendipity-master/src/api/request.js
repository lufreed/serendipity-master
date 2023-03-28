//对axios进行二次封装
import axios from 'axios'

//利用axios对象的方法去创建一个axios实例
const requests = axios.create({
	baseURL:'/api',
	timeout:5000
});
//请求拦截器
requests.interceptors.request.use((config) =>{
	return config;//config是个配置对象，headers请求头
});
//响应拦截器
requests.interceptors.response.use((res) =>{
	return res.data
},(error) =>{
	return Promise.reject(new Error('faile'))
});
//暴露axios
export default requests;