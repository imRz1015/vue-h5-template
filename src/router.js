import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/a'
    },
    {
        path: '/a',
        name: 'a',
        component: () => import('./view/a'),
        meta: {
            title: 'a'
        }
    },
    {
        path: '/b',
        name: 'b',
        component: () => import('./view/b'),
        meta: {
            title: 'b'
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
