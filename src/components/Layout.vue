<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 1000px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
}

.layout-content-main {
  padding: 10px;
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}

.layout-menu-left {
  background: #464c5b;
}

.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}

.layout-ceiling-main a {
  color: #9ba7b5;
}

.layout-hide-text .layout-text {
  display: none;
}

.ivu-col {
  transition: width 0.2s ease-in-out;
}
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <Col :span="spanLeft" class="layout-menu-left">
                <Affix>
                    <Menu active-name="1" theme="dark" width="auto" style="text-align: left">
                        <!-- <MenuItem name="1">
                            <router-link to="/layout/preview">
                                <Icon type="md-play" :size="iconSize"></Icon>
                                <span class="layout-text"><b>开发预览</b></span>
                            </router-link>
                        </MenuItem> -->
                        <MenuItem name="2">
                            <router-link to="/layout/devcli">
                                <Icon type="md-hammer" :size="iconSize"></Icon>
                                <span class="layout-text"><b>CLI工具</b></span>
                            </router-link>
                        </MenuItem>
                        <MenuItem name="3">
                            <router-link to="/layout/devkoa">
                                <Icon type="logo-nodejs" :size="iconSize"></Icon>
                                <span class="layout-text"><b>Koa应用快速上手</b></span>
                            </router-link>
                        </MenuItem>
                        <MenuItem name="4">
                            <router-link to="/layout/devexpress">
                                <Icon type="logo-nodejs" :size="iconSize"></Icon>
                                <span class="layout-text"><b>Express应用快速上手</b></span>
                            </router-link>
                        </MenuItem>
                        <MenuItem name="5">
                            <router-link to="/layout/devup">
                                <Icon type="logo-nodejs" :size="iconSize"></Icon>
                                <span class="layout-text"><b>Up无服务部署</b></span>
                            </router-link>
                        </MenuItem>
                        <MenuItem name="6">
                            <router-link to="/layout/devcomponents">
                                <Icon type="ios-list" :size="iconSize"></Icon>
                                <span class="layout-text"><b>组件一览</b></span>
                            </router-link>
                        </MenuItem>
                        <MenuItem name="7">
                            <router-link to="/layout/about">
                                <Icon type="ios-list" :size="iconSize"></Icon>
                                <span class="layout-text"><b>关于XServer</b></span>
                            </router-link>
                        </MenuItem>
                    </Menu>
                </Affix>
            </Col>
            <Col :span="spanRight">
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <router-link to="/">首页</router-link>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <router-view></router-view>
                </div>
                <div class="layout-copy">
                    2016-2018 &copy; cheneyxu
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
  mounted() {
    document.getElementById("asciinema_player").style.display = "none";
  },
  data() {
    return {
      spanLeft: 5,
      spanRight: 19
    };
  },
  computed: {
    iconSize() {
      return this.spanLeft === 5 ? 14 : 24;
    }
  },
  methods: {}
};
</script>
