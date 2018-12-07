<template>
    <div class="index">
        <Icon type="ios-water" size="150"></Icon>
        <!-- <img src="../assets/logo.png"> -->
        <h1>{{ msg }}</h1>
        <br/>
        <h2>前言：伴随着对前端组件化进程的思考，后端同样使用<b>组件化</b>思路，则其架构和开发会焕发新的生命力</h2>
        <br/>
        <h3>xserver是对传统MVC后端架构的重新思考，基于NodeJS，通过应用中间件提供高质量可复用组件</h3>
        <br/>
        <Row type="flex" justify="space-around">
            <Col span="5">
            <Card>
                <div style="text-align:center">
                    <!-- <img src="../../images/logo.png"> -->
                    <router-link to="/layout/devcli">
                        <Icon type="md-hammer" size="100"></Icon>
                    </router-link>
                    <h2>CLI</h2>
                    <h3>构建工具</h3>
                </div>
            </Card>
            </Col>
            <Col span="5">
            <Card>
                <div style="text-align:center">
                    <!-- <img src="../../images/logo.png"> -->
                    <router-link to="/layout/devkoa">
                        <Icon type="logo-nodejs" size="100"></Icon>
                    </router-link>
                    <h2>Koa/Express</h2>
                    <h3>我是Koa/Express开发者</h3>
                </div>
            </Card>
            </Col>
            <Col span="5">
            <Card>
                <div style="text-align:center">
                    <!-- <img src="../../images/logo.png"> -->
                    <router-link to="/layout/devup">
                        <Icon type="md-cloud-upload" size="100"></Icon>
                    </router-link>
                    <h2>Up</h2>
                    <h3>我使用up无服务部署</h3>
                </div>
            </Card>
            </Col>
            <Col span="5">
            <Card>
                <div style="text-align:center">
                    <!-- <img src="../../images/logo.png"> -->
                    <router-link to="/layout/devcomponents">
                        <Icon type="ios-list" size="100"></Icon>
                    </router-link>
                    <h2>Components</h2>
                    <h3>所有组件一览</h3>
                </div>
            </Card>
            </Col>
        </Row>
        <br/>
        <br/>
        <ul>
            <li><a href="https://github.com/cheneyweb" target="_blank">Thanks</a></li>
            <li><a href="https://github.com/cheneyweb" target="_blank">Github</a></li>
            <li><a href="https://github.com/cheneyweb" target="_blank">Support</a></li>
            <li><a href="mailto:457299596@qq.com" target="_blank">Email</a></li>
            <br>
            <li><a href="https://github.com/cheneyweb" target="_blank">Donate</a></li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "index",
  mounted() {
    document.getElementById("asciinema_player").style.display = "inline";
  },
  data() {
    return {
      msg: "XServer——全新组件化后端构建"
    };
  }
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.index {
  text-align: center;
}
</style>
