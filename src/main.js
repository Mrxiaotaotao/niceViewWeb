// vue根实例
import { createApp } from 'vue'
// 引用根页面
import App from './App.vue';

// 引入ElementPlus ui库
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { Message } from './utils/message'

// 引入md插件
import MarkDown from './utils/markdown.js'

// 路由引入
import router from './router'
// vuex引入
import store from './store'
// 路由拦截引入
import './permission.js'
// 全局注册文件引入
import registerComponent from './register_workbench.js'
// 自定义指令
import Directives from './utils/directives'
// 全局样式
import './styles/index.scss'

// 注册App
const app = createApp(App)
// 挂载ElementPlus
app.use(ElementPlus)
// 调整elm消息提示
Message(app)
// 挂载router
app.use(router)
// vuex
app.use(store)
// 全局注册
registerComponent(app)
// 自定义指令注册
Directives(app)
// 挂载mavonEditor
MarkDown(app)
// 全局挂载自定义方法及数据
app.config.globalProperties.ljt = '江涛'
/**
 * setup 
 * import { getCurrentInstance } from 'vue'
 * getCurrentInstance().appContext.config.globalProperties.ljt
 * 其他可以正常使用 this.ljt
 */

// app.config.performance = true

// if (process.env.NODE_ENV !== 'development') {
//   console.log('99999');
//   app.config.performance = true;
// }

// 链接根节点
app.mount('#app')