<template>
    <div>
        <Row type="flex" justify="start">
            <h1>关于XServer</h1>
        </Row>
        <br/>
        <Row>
            <div class="normalfont">
            <p>感谢您的浏览，如有任何疑问或建议，以下是联系方式</p>
            <br/>
            <li><a href="https://github.com/cheneyweb" target="_blank">Github</a></li>
            <li><a href="mailto:457299596@qq.com" target="_blank">Email</a></li>
            <li><a href="http://www.jianshu.com/u/6ea041409b3b" target="_blank">我的简书主页</a></li>
            </div>
        </Row>
        <br/>
        <br/>
        <Row class="normalfont">
            <router-link to="/layout/devcomponents">查看更多应用服务中间件</router-link>
        </Row>
        <Row>
            <BackTop :height="100">返回顶部</BackTop>
        </Row>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.time {
  font-size: 16px;
  font-weight: bold;
}

.content {
  font-family: "Helvetica Neue";
  font-size: 14px;
  padding-left: 5px;
  color: #657180;
}

.normalfont {
  font-family: "Helvetica Neue";
  font-size: 15px;
}
</style>
