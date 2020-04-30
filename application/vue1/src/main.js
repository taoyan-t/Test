import './public-path'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

let instance = null
let router = null

function render () {
  router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped');
}

export async function mount (props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount () {
  console.log('unmount');
  instance.$destroy();
  instance = null;
  router = null;
}