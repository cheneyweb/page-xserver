import Vue from 'vue'
import App from './App'
import router from './router'
// import iView from 'iview'
import 'iview/dist/styles/iview.css'
import { Timeline, TimelineItem, Button, Row, Col, Icon, Card, Table, Breadcrumb, BreadcrumbItem, Affix, Menu, MenuItem, BackTop, Poptip, Modal } from 'iview'

Vue.component('Timeline', Timeline)
Vue.component('TimelineItem', TimelineItem)
Vue.component('Button', Button)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Icon', Icon)
Vue.component('Card', Card)
Vue.component('Table', Table)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('BreadcrumbItem', BreadcrumbItem)
Vue.component('Affix', Affix)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('BackTop', BackTop)
Vue.component('Poptip', Poptip)
Vue.component('Modal', Modal)

const isDebug_mode = process.env.NODE_ENV !== 'production'
Vue.config.debug = isDebug_mode
Vue.config.devtools = isDebug_mode
Vue.config.productionTip = isDebug_mode

// Vue.use(iView)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
