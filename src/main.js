import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import Vant from 'vant'
import 'vant/lib/index.css'

import { router } from './router'
import { Lazyload } from 'vant'

import api from './api/common'
import calc from './tools/calc.js'

Vue.prototype.$api = api
Vue.prototype.$calc = calc


Vue.use(Vant)
Vue.use(Lazyload)
new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
