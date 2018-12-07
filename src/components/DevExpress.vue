<template>
    <div>
        <Row type="flex" justify="start">
            <h1>Express应用中间件使用指引</h1>
        </Row>
        <br/>
        <Row>
            <Timeline>
                <TimelineItem>
                    <p class="time">Step 1：引入中间件 </p>
                    注：本文中以express-xlog中间件为例，该中间件可实现全局错误异常捕获
                    <Card>
                        <p class="content">const xlog = require('express-xlog')</p>
                    </Card>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">Step 2：加载中间件</p>注：app为express实例
                    <Card>
                        <pre class="content">app.use(xlog())</pre>
                    </Card>
                </TimelineItem>
                <TimelineItem color="green">
                    <Icon type="md-trophy" slot="dot"></Icon>
                    <p class="time">Step 3：基于标准RESTful请求测试</p>注：所有RESTful请求均会有详细日志记录，且可自定义拓展日志处理，更多请参考express-xlog中间件的文档
                    <Card>
                        <p class="content">Example：http://localhost:8080/xmodel/UserModel/create</p>
                        <p class="content">{ "username":"cheney", "password":"123" }</p>
                    </Card>
                </TimelineItem>
            </Timeline>
        </Row>
        <Row>
            <h2>总结：</h2>
            <div class="normalfont">
                <p>1、基于Express的中间件框架理念，XServer更进一步制作了大量高效易用的中间件，大部分中间件只需要<b>两步</b>便可引入使用，并且耦合度极低，再没有传统模块化开发的复杂和冗余</p>
                <br/>
                <p>2、开发服务时，通过对所需中间件的引入和控制，完成实际的业务功能，而非传统的模块化部署，<b>XServer的目标是：以中间件为单位开发，以服务为单位部署</b></p>
                <br/>
                <p>3、本例中间件的演示项目代码位于 <a href="https://github.com/cheneyweb/express-xlog" target="_blank">express-xlog演示项目</a>，<b>xserver</b>所有的演示项目代码都会力求最精简易懂：）</p>
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
