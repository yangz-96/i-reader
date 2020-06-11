import Vue from 'vue'
import router from './router'
import Vant from 'vant'

import 'vant/lib/index.css';
import './assets/font_1868598_i8u5wc2hr1/iconfont.css'

import App from './App.vue'


Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
