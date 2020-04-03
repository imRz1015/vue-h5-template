import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./view/login/login'),
        meta: {
            title: '商家登录'
        }
    },
]


const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    // const title = to.meta && to.meta.title;
    // if (title) {
    //     document.title = title;
    // }
    next()
})

export { router }
