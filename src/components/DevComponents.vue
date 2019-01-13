<template>
    <div>
      <Modal v-model="modal1" :title="modalTitle1">
        安装
          <li>{{modalStep1}}</li>
        使用
          <li>{{modalStep2}}</li>
          <li>{{modalStep3}}</li>
          <li v-show="modalStep4">{{modalStep4}}</li>
      </Modal>
      <Row type="flex" justify="start">
          <h1>XServer组件一览</h1>
      </Row>
      <Row class="tablefont">
          <Table :columns="columns1" :data="data1" size="large"></Table>
      </Row>
      <Row>
          <BackTop :height="100">返回顶部</BackTop>
      </Row>
      <Row class="normalfont">
          <h2>说明：</h2>
          <div class="normalfont">
              <p>1、xserver的组件分为两大类，分别是<b>Koa的应用中间件</b>和<b>Express的应用中间件</b></p>
              <br/>
              <p>2、xserver所有的中间件组件都是<b>开源</b>的，均在Github上开放源码下载，同时也提供了快速开发时 npm install 的安装方式</p>
              <br/>
              <p>3、xserver后续还会逐步贡献例如购物车应用组件，用户地址管理应用组件等常见业务组件，真正避免重复造轮子，同时也非常欢迎热心的朋友们贡献更多更好简单，轻量，有意义的业务应用组件</i></p>
          </div>
      </Row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      modal1: false,
      modalTitle1: '使用说明',
      modalStep1: '',
      modalStep2: '',
      modalStep3: '',
      modalStep4: '',
      columns1: [
        {
          title: "名称",
          align: "center",
          key: "name"
        },
        {
          title: "版本",
          align: "center",
          key: "version"
        },
        {
          title: "描述",
          align: "center",
          key: "descript"
        },
        {
          title: "操作",
          key: "operate",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.jump(params.index);
                    }
                  }
                },
                "Github"
              ),
              h(
                // "Poptip",
                // {
                //   props: {
                //     trigger: "hover",
                //     content: "构建中...",
                //     placement: "right"
                //   }
                // },
                // [
                // h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.showModel(params.index);
                    }
                  }
                },
                "使用方式"
                // )
                // ]
              )
            ]);
          }
        }
      ],
      data1: [
        {
          name: "koa-xauth",
          version: "1.1.0",
          descript: "TOKEN令牌式身份认证集成",
          github: "https://github.com/cheneyweb/koa-xauth"
        },
        {
          name: "koa-xlog",
          version: "1.1.0",
          descript: "异步日志中间件",
          github: "https://github.com/cheneyweb/koa-xlog.git"
        },
        {
          name: "koa-xerror",
          version: "1.1.0",
          descript: "全局错误捕获中间件",
          github: "https://github.com/cheneyweb/koa-xerror.git"
        },
        {
          name: "koa-xcontroller",
          version: "1.2.0",
          descript: "自动路由映射控制器文件",
          github: "https://github.com/cheneyweb/koa-xcontroller"
        },
        {
          name: "koa-xmodel",
          version: "1.1.0",
          descript: "只需写实体类，然后直接RESTful请求，全自动CRUD",
          github: "https://github.com/cheneyweb/koa-xmodel"
        },
        {
          name: "koa-xbatis",
          version: "1.1.0",
          descript: "只需写SQL，然后直接RESTful请求，全自动CRUD",
          github: "https://github.com/cheneyweb/koa-xbatis"
        },
        {
          name: "koa-xnosql",
          version: "1.8.0",
          descript: "NoSql服务应用路由中间件，快速构建轻量小巧灵活的NoSql服务",
          github: "https://github.com/cheneyweb/koa-xnosql"
        },
        {
          name: "express-xauth",
          version: "1.1.0",
          descript: "TOKEN令牌式身份认证集成",
          github: "https://github.com/cheneyweb/express-xauth"
        },
        {
          name: "express-xlog",
          version: "1.1.0",
          descript: "异步日志中间件",
          github: "https://github.com/cheneyweb/express-xlog"
        },
        {
          name: "express-xerror",
          version: "1.1.0",
          descript: "全局错误捕获中间件",
          github: "https://github.com/cheneyweb/express-xerror"
        },
        {
          name: "express-xcontroller",
          version: "1.1.0",
          descript: "自动路由映射控制器文件",
          github: "https://github.com/cheneyweb/express-xcontroller"
        },
        {
          name: "express-xmodel",
          version: "1.1.0",
          descript: "只需写实体类，然后直接RESTful请求，全自动CRUD",
          github: "https://github.com/cheneyweb/express-xmodel"
        },
        {
          name: "express-xbatis",
          version: "1.1.0",
          descript: "只需写SQL，然后直接RESTful请求，全自动CRUD",
          github: "https://github.com/cheneyweb/express-xbatis"
        },
        {
          name: "express-xnosql",
          version: "1.8.0",
          descript: "NoSql服务应用路由中间件，快速构建轻量小巧灵活的NoSql服务",
          github: "https://github.com/cheneyweb/express-xnosql"
        }
      ]
    };
  },
  methods: {
    jump(index) {
      window.open(this.data1[index].github);
    },
    showModel(index) {
      switch(index){
        case 0:
        this.modalTitle1 = 'koa-xauth 安装/使用'
        this.modalStep1 = 'npm install koa-xauth'
        this.modalStep2 = "const xauth = require('koa-xauth')"
        this.modalStep3 = 'app.use(xauth())'
        this.modalStep4 = ""
        break
        case 1:
        this.modalTitle1 = 'koa-xlog 安装/使用'
        this.modalStep1 = 'npm install koa-xlog'
        this.modalStep2 = "const xlog = require('koa-xlog')"
        this.modalStep3 = 'app.use(xlog())'
        this.modalStep4 = ""
        break
        case 2:
        this.modalTitle1 = 'koa-xerror 安装/使用'
        this.modalStep1 = 'npm install koa-xerror'
        this.modalStep2 = "const xerror = require('koa-xerror')"
        this.modalStep3 = 'app.use(xerror())'
        this.modalStep4 = "PS：需要在首位路由使用"
        break
        case 3:
        this.modalTitle1 = 'koa-xcontroller 安装/使用'
        this.modalStep1 = 'npm install koa-xcontroller'
        this.modalStep2 = "const xcontroller = require('koa-xcontroller')"
        this.modalStep3 = 'xcontroller.init(app)'
        this.modalStep4 = ""
        break
        case 4:
        this.modalTitle1 = 'koa-xmodel 安装/使用'
        this.modalStep1 = 'npm install koa-xmodel'
        this.modalStep2 = "const xmodel = require('koa-xmodel')"
        this.modalStep3 = 'xmodel.init(app, sequelize)'
        this.modalStep4 = ""
        break
        case 5:
        this.modalTitle1 = 'koa-xbatis 安装/使用'
        this.modalStep1 = 'npm install koa-xbatis'
        this.modalStep2 = "const xbatis = require('koa-xbatis')"
        this.modalStep3 = 'xbatis.init(app, nodebatis)'
        this.modalStep4 = ""
        break
        case 6:
        this.modalTitle1 = 'koa-xnosql 安装/使用'
        this.modalStep1 = 'npm install koa-xnosql'
        this.modalStep2 = "const xnosql = require('koa-xnosql')"
        this.modalStep3 = 'xnosql.init(app)'
        this.modalStep4 = ""
        break
        case 7:
        this.modalTitle1 = 'express-xauth 安装/使用'
        this.modalStep1 = 'npm install express-xauth'
        this.modalStep2 = "const xauth = require('express-xauth')"
        this.modalStep3 = 'app.use(xauth())'
        this.modalStep4 = ""
        break
        case 8:
        this.modalTitle1 = 'express-xlog 安装/使用'
        this.modalStep1 = 'npm install express-xlog'
        this.modalStep2 = "const xlog = require('express-xlog')"
        this.modalStep3 = 'app.use(xlog())'
        this.modalStep4 = ""
        break
        case 9:
        this.modalTitle1 = 'express-xerror 安装/使用'
        this.modalStep1 = 'npm install express-xerror'
        this.modalStep2 = "const xerror = require('express-xerror')"
        this.modalStep3 = 'app.use(xerror())'
        this.modalStep4 = "PS：需要在最后一位路由使用"
        break
        case 10:
        this.modalTitle1 = 'express-xcontroller 安装/使用'
        this.modalStep1 = 'npm install express-xcontroller'
        this.modalStep2 = "const xcontroller = require('express-xcontroller')"
        this.modalStep3 = '文档完善中...'
        this.modalStep4 = ""
        break
        case 11:
        this.modalTitle1 = 'express-xmodel 安装/使用'
        this.modalStep1 = 'npm install express-xmodel'
        this.modalStep2 = "const xmodel = require('express-xmodel')"
        this.modalStep3 = '文档完善中...'
        this.modalStep4 = ""
        break
        case 12:
        this.modalTitle1 = 'express-xbatis 安装/使用'
        this.modalStep1 = 'npm install express-xbatis'
        this.modalStep2 = "const xbatis = require('express-xbatis')"
        this.modalStep3 = '文档完善中...'
        this.modalStep4 = ""
        break
        case 13:
        this.modalTitle1 = 'express-xnosql 安装/使用'
        this.modalStep1 = 'npm install express-xnosql'
        this.modalStep2 = "const xnosql = require('express-xnosql')"
        this.modalStep3 = '文档完善中...'
        this.modalStep4 = ""
        break
      }
      this.modal1 = true;
    }
  }
};
</script>
<style scoped>
.tablefont {
  font-size: 16px;
  font-weight: bold;
}

.normalfont {
  font-family: "Helvetica Neue";
  font-size: 15px;
}
</style>
