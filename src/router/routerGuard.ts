import NProgress from "nprogress"; // progress bar
import { ACCESS_TOKEN, PERMISSION } from "@/store/mutation-types";
import { generateAsyncRoutes } from "@/router/basicRouter";
import { useUserStore } from "@/store/user";
import { usePermissionStore } from "@/store/permission";
import type { RouteLocationNormalizedLoaded, Router,RouteLocationMatched } from "vue-router";
import setting from "@/config/defaultSettings";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["login", "register", "registerResult"]; // 不进行拦截的路由名称集合
const defaultRoutePath = "/dashboard/workplace";

export const setupBeforeEach = (router: Router) => {
  router.beforeEach((to, from, next) => {
    NProgress.start(); // 加载进度条
    const permissionStore = usePermissionStore();
    if (permissionStore.getMenus.length == 0) {
      // permissionStore.setMenus(setting.menus)
      generateAsyncRoutes(router, setting.menus);
      next({ path: to.path});
      return;
    }
    const userStore = useUserStore();
    if (userStore.isLogin) {
      /* has token */
      if (to.path === "/user/login") {
        next({ path: defaultRoutePath });
        NProgress.done();
      } else {
        next();
      }
    } else {
      if (whiteList.includes(to.name as any)) {
        // 在免登录白名单，直接进入
        next();
      } else {
        next({ path: "/user/login", query: { redirect: to.fullPath } });
        NProgress.done(); // if current page is login will not trigger afterEach hook, so manually handle it
      }
    }
  });
};

export const setupAfterEach = (router: Router) => {
  router.afterEach(() => {
    NProgress.done(); // finish progress bar
  });
};