<template>
	<div class="wrap">
		<div class="wrap-box">
			<div class="wrap-cont">
				<div class="cont-left">
					<p>在这里</p>
					<p>找到只属于你的另一半</p>
					<p>遇见有缘人</p>
				</div>
				<div class="cont-right">
					<n-form ref="formRef">
						<n-form-item class="form-sty">
							<n-input placeholder="请输入手用户名"/>
						</n-form-item>
						<n-form-item class="form-sty">
							<n-input type="password" placeholder="请输入密码"/>
						</n-form-item>
						<n-form-item class="form-sty btn">
							<n-input type="button" value="登录" style="text-align:center;"/>
						</n-form-item>
						<n-form-item class="form-sty btn">
							<n-input type="button" value="注册" style="text-align:center;"/>
						</n-form-item>
					</n-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Login',
		
	}
</script>

<style lang="scss" scoped>
	.wrap{
		background-image: url('../assets/home/bg-4.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		opacity: 0.8;
	}
	.wrap-box{
		margin: 0 auto;
		overflow: hidden;
		padding: 15% 1%;
	}
	.wrap-cont{
		display: flex;
		justify-content: space-around;
		width: 50%;
		background: linear-gradient(to bottom,#ffdde1 0%,#ee9ca7 100%);//#da22ff 0%,#9733ee 100%
		box-shadow: 1px 2px 6px #ffa6a6;
		margin: 0 auto;
	}
	.cont-left{
		float: left;
		width: 25%;
		padding: 30px 0;
		text-align: center;
		margin: auto;
		p{
			color: #fff;
			font-family: 'Times New Roman', Times, serif;
			font-size: 14px;
			line-height: 22px;
		}
	}
	.cont-right{
		padding: 30px 0;
		float: left;
		width: 45%;
		margin: auto;
		.form-sty{
			display: block;
			outline: none;
			border: none;
			.btn{
				cursor: pointer;
			}
		}
	}

	// 媒体查询
	@media (min-width: 768px) and (min-width: 992px) {
		
	}

	@media (min-width: 576px) and (min-width: 768px) {
		
	}

	

	@media (min-width: 360px) {
		
	}
</style>