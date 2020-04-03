
export default {
    methods: {
        /**
         * 向页面栈添加记录，
         * @params route {object}
         *      path:'' 跳转地址
         *      query: {} 携带参数
         * */
        MIXIN_Push(route = {}) {
            let currentPageInfo = {
                path: this.$route.path,
                query: this.$route.query,
                scrollPos: document.documentElement.scrollTop || document.body.scrollTop
            };
            let routeStack = JSON.parse(sessionStorage.getItem('routeStack')) || [];
            routeStack.push(currentPageInfo);
            sessionStorage.setItem('routeStack', JSON.stringify(routeStack))
            if (!route.path) return new Error('no path');
            this.$router.replace({ path: route.path, query: { ...route.query, stack: 'forward' } });
        },
        /**
         * 返回到页面栈里最后一个记录
         *
         * */
        MIXIN_Back(query = {}) {
            let routeStack = JSON.parse(sessionStorage.getItem('routeStack')) || [];
            if (routeStack.length) {
                let lastPage = JSON.parse(JSON.stringify(routeStack[routeStack.length - 1]));
                this.$router.replace({
                    path: lastPage.path,
                    query: { ...lastPage.query, ...query, stack: 'back', scrollPos: lastPage.scrollPos }
                });
                routeStack.splice(-1, 1);
                sessionStorage.setItem('routeStack', JSON.stringify(routeStack));
            } else {
                this.$router.replace({
                    path: '/',
                    query: { stack: 'back' }
                });
            }
        },
        /**
         *  跳转到全新的页面 并清空页面栈
         * @param route
         * @constructor
         */
        MIXIN_Replace(route = {}) {
            sessionStorage.setItem('routeStack', JSON.stringify([]));
            let routeDefaultParams = {
                path: '/', query: { stack: 'normal' }
            }
            routeDefaultParams.path = route.path || '/'
            Object.assign(routeDefaultParams.query, route.query || {});
            this.$router.replace({ path: routeDefaultParams.path, query: { ...routeDefaultParams.query, stack: routeDefaultParams.query.stack } });
        },
    }
}
