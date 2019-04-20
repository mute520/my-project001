# demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


Other contents ...

#############
  Vuex  ( 官网：https://vuex.vuejs.org/ )
    Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
    它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
    ( 下载vuex.js文件：https://unpkg.com/vuex )

    安装：
      npm install vuex --save  ( or  npm i vuex -S  )
    引用：
      import Vue from 'vue'
      import Vuex from 'vuex'

      Vue.use(Vuex)
  
#############
  Element-UI
    安装：
      npm i element-ui -S
    引用：
      import ElementUI from 'element-ui'

      Vue.use(ElementUI)


  Element-UI (react)
    安装：
      npm i element-react --save

  
#############
  Stylus
    Stylus是一个CSS预处理器

    安装：
      npm install stylus --save-dev
      npm install stylus-loader --save-dev

    全局安装
      npm install stylus -g


#############
  vuedraggable
    安装：
      npm install vuedraggable --save
    引用：
      import draggable from 'vuedraggable'
      export default {
        components: { 
          draggable
        }
      }

      <draggable>
        <div>content...</div>
      </draggable>


############
  更新npm包
  npm install npm@latest -g      or 
  npm install npm -g

    -D, --save-dev: Package will appear in your devDependencies

    定期更新你的应用所依赖的包（package）是个好习惯。
    因为依赖包的开发者更新了代码，你的应用也就能够获得提升。
    为了完成这个任务需要：
      在 package.json 文件所在的目录中执行 npm update 命令。
      执行 npm outdated 命令。不应该有任何输出。

    如需删除 node_modules 目录下面的包（package），请执行：
    npm uninstall <package>
    如需从 package.json 文件中删除依赖，需要在命令后添加参数 --save:
    npm uninstall --save lodash
    注意：如果你将安装的包作为 "devDependency"（也就是通过 --save-dev 参数保存的），
    那么 --save 无法将其从 package.json 文件中删除。
    所以必须通过 --save-dev 参数可以将其卸载

    安装到全局，你应该使用 
      npm install -g <package>
    通过如下命令将包（package）卸载：
      npm uninstall -g <package>

    npm install express      # 本地安装
    npm install express -g   # 全局安装


  
#############
  一个凑合的 Vue.js 移动端 UI 组件库
  开发的移动端UI组件库，主要服务于微信页面
  VUX 是库而非框架，虽然有专用的 vux-loader，但并不影响你自由地使用其他组件库或者工具库
  VUX 使用的 CSS 预处理工具是 less(同 WeUI)，但(利益于 .vue 单文件组件的灵活性)这并不影响你使用 SASS 等其他预处理器。
  用以表示该组件库时请使用大写名字 VUX，用在说明版本号时使用小写 vux@2.x
  安装
      npm install vux --save
  