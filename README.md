# niceVieWeb

## Project setup
```
npm install
```

安装依赖可能会失败 请不要心急 请跑下边这个命令
```
npm i vue-loader-v16 --save-dev
或
cnpm i vue-loader-v16 --save-dev
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 关于github网站打开及提交代码问题
See [配置本地hosts](https://blog.csdn.net/fantasy_wxe/article/details/108957886)

### Customize configuration
#### Configuration Reference
See [vue-cli @3.0.0](https://cli.vuejs.org/config/)(https://www.vue3js.cn/docs/zh/).
See [vue-router @4.0.0-alpha.5](https://next.router.vuejs.org/).
See [element-plus @1.0.1-beta.10](https://element-plus.org/#/zh-CN/component/installation).
Set [vue3项目替代eventBus的两个第三方库](https://github.com/developit/mitt)(https://github.com/scottcorgan/tiny-emitter)
#### 其他ui框架参考地址
See [Vant 3.0](https://vant-contrib.gitee.io/vant/next).
See [Ant Design of Vue](https://2x.antdv.com/docs/vue/introduce-cn/).



# 3 目录详解
待调整
```
├── build                      # 构建相关
├── mock                       # 项目mock 模拟数据
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   │── index.html             # html模板
│   │── fonts                  # 项目所有 svg icons
│   └── images                 # 图片
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源 ---
│   ├── components             # 全局公用组件
│   ├── |——...                 # 其他的公用组件
│   ├── directive              # 全局指令 ---
│   ├── lang                   # 国际化 language
│   ├── layout                 # 公共布局
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── systemViews            # 后台管理页面
│   ├── utils                  # 全局公用方法
│   ├── |——validate.js         # 表单校验的公用方法 --
│   ├── |——auth.js             # 存储封装
│   ├── |——eventBus.js         # 兄弟传值
│   ├── |——iconfontPlus.json   # el ui 的图标列表维护
│   ├── |——http.js             # axios配置（请求拦截和返回拦截）的公用方法
│   ├── views                  # views 前台页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
│   └── register_workbench.js  # 全局组件注册及合并有等
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .editorconfig              # 项目格式化配置
├── .eslintrc.js               # eslint 配置项
├── .babelrc                   # babel-loader 配置
├── vue.config.js              # vue-cli 配置
└── package.json               # package.json
```

# vue
https://vue3js.cn/

#### Ant-design-vue
ant-design-vue 是 Ant Design 的 Vue 实现，组件的风格与 Ant Design 保持同步，组件的 html 结构和 css 样式也保持一致，真正做到了样式 0 修改，组件 API 也尽量保持了一致

现状：支持 Vue 3.0 的 2.0.0 测试版 已发布

地址：https://antdv.com/docs/vue/introduce-cn/

#### Vant 3.0
Vant 是有赞前端团队开源的移动端组件库，于 2016 年开源，已持续维护 4 年时间。

Vant 对内承载了有赞所有核心业务，对外服务十多万开发者，是业界主流的移动端组件库之一

现状：目前 Vant 已完成了对 Vue 3.0 的适配工作，并发布了 Vant 3.0 Beta 版本，计划在十月底或十一月发布 Vant 3.0 正式版

地址：https://vant-contrib.gitee.io/vant/next

#### Element-plus
elementui风格的组件库，Vue3.0 重构版

现状：没有明确发布计划，目前还在紧急开发中，有兴趣参与开源项目的也可以去issues认领任务

地址：https://element-plus.org/#/zh-CN/component/installation