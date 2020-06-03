/*eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

const router = new Router({
    mode : 'history', // 路由跳转 , history路由
    linkActiveClass : 'is-link-active',
    scrollBehavior : () => ({ y : 0 }),
    routes : [
        
    ]
})