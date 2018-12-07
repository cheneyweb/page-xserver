<template>
    <div>
        <Row type="flex" justify="start">
            <h1>CLI工具使用指引</h1>
        </Row>
        <br/>
        <Row>
            <Timeline>
                <TimelineItem>
                    <p class="time">Step 1：开发环境准备，安装CLI工具xserver-cli </p>
                    <Card>
                        <p class="content">npm install xserver-cli -g</p>
                    </Card>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">Step 2：使用CLI工具的x-cli命令初始化项目</p>注：<b>x-koa/x-express</b> 是项目模板，初始化的项目路径是当前文件夹
                    <Card>
                        <p class="content">x-cli x-koa myproject</p>
                    </Card>
                </TimelineItem>
                <TimelineItem color="green">
                    <Icon type="md-trophy" slot="dot"></Icon>
                    <p class="time">Step 3：在 {myproject} 目录下运行服务</p>注：<b>{myproject}</b> 替换成你的项目名称，同时应用会根据 <b>NODE_ENV</b> 环境变量来动态配置相应的config文件
                    <Card>
                        <p class="content">cd {myproject}</p>
                        <p class="content">node app.js</p>
                    </Card>
                </TimelineItem>
            </Timeline>
        </Row>
        <Row type="flex" justify="start">
            <h1>项目模板开发指引</h1>
        </Row>
        <br/>
        <Row>
            <Timeline>
                <TimelineItem>
                    <p class="time">Step 1：MySQL数据库连接 </p>注：在 <b>config</b> 文件夹下的配置文件中设置数据库连接
                    <Card>
                        <pre class="content">{
    "db": {
        "host": "localhost",
        "port": 3306,
        "dbname": "test",
        "username": "root",
        "password": "root"
    }
}</pre>
                    </Card>
                </TimelineItem>
                <TimelineItem color="green">
                    <Icon type="md-trophy" slot="dot"></Icon>
                    <p class="time">Step 2：Mongodb数据库连接 </p>注：在 <b>config</b> 文件夹下的配置文件中设置数据库连接
                    <Card>
                        <pre class="content">{
    "mongodb": {
        "url": "mongodb://localhost:27017/test"
    }
}</pre>
                    </Card>
                </TimelineItem>
            </Timeline>
        </Row>
        <Row>
            <h2>总结：</h2>
            <div class="normalfont">
                <p>1、<b>xserver-cli</b> 工具会全自动下载初始化项目模板，目前支持的项目模板有<b>x-koa</b>和<b>x-express</b></p>
                <br/>
                <p>2、基于<b>x-koa/x-expressa</b>可以快速进行开发，项目模板中已经集成了常用的应用中间件组件，例如 koa-xauth，koa-xlog，koa-xcontroller等</p>
                <br/>
                <p>3、基于应用中间件的项目模板 <b>x-koa/x-express</b> 轻量小巧，所有组件高度独立内聚，具备很强的拓展性，可以融合多种NodeJS的开发模式和设计</p>
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
