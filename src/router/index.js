import Vue from 'vue'
import Router from 'vue-router'
// 全加载
import Index from '../components/Index'
import Layout from '../components/Layout'
import DevCli from '../components/DevCli'
import Preview from '../components/Preview'
import DevExpress from '../components/DevExpress'
import DevKoa from '../components/DevKoa'
import DevUp from '../components/DevUp'
import DevComponents from '../components/DevComponents'
import About from '../components/About'
// 懒加载
// const Index = () => import('../components/Index')
// const Layout = () => import('../components/Layout')
// const DevCli = () => import('../components/DevCli')
// const Preview = () => import('../components/Preview')
// const DevExpress = () => import('../components/DevExpress')
// const DevKoa = () => import('../components/DevKoa')
// const DevUp = () => import('../components/DevUp')
// const DevComponents = () => import('../components/DevComponents')
// const About = () => import('../components/About')


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Index
    }, {
        path: '/layout',
        component: Layout,
        children: [{
            path: 'preview',
            component: Preview
        }, {
            path: 'devcli',
            component: DevCli
        }, {
            path: 'devexpress',
            component: DevExpress
        }, {
            path: 'devkoa',
            component: DevKoa
        }, {
            path: 'devup',
            component: DevUp
        }, {
            path: 'devcomponents',
            component: DevComponents
        }, {
            path: 'about',
            component: About
        }]
    }]
})
