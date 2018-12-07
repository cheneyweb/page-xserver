<template>
    <div>
        <Row type="flex" justify="start">
            <h1>UP无服务部署使用指引</h1>
        </Row>
        <br/>
        <Row>
            <h2>UP是什么？</h2>
            <div class="normalfont">
                <li>首先说明Serverless是无服务器架构，理念是开发者无须关心任何与服务器相关的配置，例如无须提前购买服务器或者配置集群等繁琐工作</li>
                <br/>
                <li>关于Serverless架构，虽然理念新进，但存在与传统应用部署不互相兼容的问题，例如已经比较成熟的同名<a href="https://serverless.com/" target="_blank">Serverless开发部署框架</a></li>
                <br/>
                <li>而<a href="https://github.com/apex/up" target="_blank">UP</a>是一个帮助开发者部署本地Web应用至AWS Serverless云平台的工具，该项目由TJ Holowaychuk创建主导<i>（TJ是谁？Koa、Co、Express、jade、mocha、node-canvas、commander.js等知名开源项目的创建和贡献者...）</i></li>
                <br/>
                <li>由于目前UP仍出于快速迭代构建阶段，而且相关文档资料较少，新手直接使用会遇到大量错误，所以基于XServer的众多中间件和之前积累，完成了一个稳定且可用于生产部署的UP快速开发框架<a href="https://github.com/cheneyweb/up-koa" target="_blank">up-koa</a></li>
            </div>
        </Row>
        <br/>
        <Row>
            <h2>使用：</h2>
            <Timeline>
                <TimelineItem>
                    <p class="time">Step 1：开发环境准备，需要安装<a href="https://github.com/apex/up" target="_blank">UP</a></p>
                    注：UP无服务部署依托于<a href="https://aws.amazon.com" target="_blank">AWS</a>的Lambda函数计算核心服务，需要有AWS开发帐号，即.aws/credentials文件需要配置aws_access_key_id与aws_secret_access_key
                    <Card>
                        <p class="content">git clone https://github.com/cheneyweb/up-koa</p>
                        <p class="content">cd up-koa && npm install</p>
                    </Card>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">Step 2：执行UP命令部署</p>
                    <Card>
                        <p class="content">cd up-koa && up</p>
                    </Card>
                </TimelineItem>
            </Timeline>
        </Row>
        <Row>
            <h2>总结：</h2>
            <div class="normalfont">
                <p>1、是的，所有的工作已经完成，您已经拥有了一个<b>无限性能拓展的云端服务</b> <i>PS：难以置信是么，但这就是Serverless ：）</i></p>
                <br/>
                <p>2、无须提前购买配置任何服务器，依托<b>AWS的Serverless(API Gateway,Lambda,Dynamodb)</b>等服务，即可获得无限自动扩容服务应用，费用方面AWS Serverless服务是按量计费</p>
                <br/>
                <p>3、本例演示项目代码位于 <a href="https://github.com/cheneyweb/up-koa" target="_blank">uo-koa演示项目</a>，<b>xserver</b>所有的演示项目代码都会力求最精简易懂：）</p>
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
