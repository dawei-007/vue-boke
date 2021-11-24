// 入口文件
import "./mock"; //引入mock
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import showMessage from "./utils/showMessage";
import "./eventBus";//引入事件总线
import store from "./store"; //创建共享仓库
store.dispatch("setting/fetchSetting");
Vue.prototype.$showMessage = showMessage;//在所有实例里面添加showMessage方法

// 注册全局指令
import vLoading from "./directives/loading";//加载指令
import vLazy from "./directives/lazy";//图片懒加载指令
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
