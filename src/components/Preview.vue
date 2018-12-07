<template>
    <div>
        <Row type="flex" justify="start">
            <h1>开发预览</h1>
        </Row>
        <br/>
        <Row>
            <h2>总结：</h2>
            <div class="normalfont">
            <p>1、使用应用中间件组件开发就是这么简单，几乎无须编写业务逻辑代码，精简和内聚隐藏了传统后端架构的Controller,Server,Dao，没有中间商赚差价：）</p>
            <br/>
            <p>2、只需三步，就完成了实体对象插入数据库，而这一切是因为<b>express-xmodel</b>应用中间件已经提供基础的<b>CRUD</b>处理，url请求中的<b>user_model</b>会自动映射<b>UserModel.js</b>文件</p>
            <br/>
            <p>PS：该开发预览只是展示了最核心的代码结构，具体的中间件安装使用在左侧目录的<router-link to="/layout/devkoa"><b>Koa应用快速上手</b></router-link>或<router-link to="/layout/devexpress"><b>Express应用快速上手</b></router-link>文档中</p>
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
export default {

}
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
