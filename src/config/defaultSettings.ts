/**
 * 项目默认配置项
 * primaryColor - 默认主题色, 如果修改颜色不生效，请清理 localStorage
 * navTheme - sidebar theme ['dark', 'light'] 两种主题
 * colorWeak - 色盲模式
 * layout - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * fixedHeader - 固定 Header : boolean
 * fixSiderbar - 固定左侧菜单栏 ： boolean
 * contentWidth - 内容区布局： 流式 |  固定
 */

export default {
  navTheme: "light", // theme for nav menu
  primaryColor: "#1890FF", // ant design 默认主颜色(在node_modules/ant-design-vue/style/color/colors.less中@blue-base变量定义,实际上@primary-color = @blue-6 = @blue-base,禁止套娃,手动狗头)
  contentWidth: "Fluid", // layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
  fixedHeader: true, // sticky header
  fixSiderbar: true, // sticky siderbar
  colorWeak: false, //色盲模式
  title: "Ant Design Pro",
  storage: {
    namespace: "PRO_",
  },
  multiTab: true, //多标签
  grayMode: false, //黑白模式
  darkMode: false, // 色弱模式
  menus: [
    {
      name: "dashboard",
      path: "dashboard",
      meta: {
        icon: "bx-analyse",
        title: "仪表盘",
        hidden: false,
      },
      component: "RouteView",
      redirect: "/dashboard/analysis",
      children: [
        {
          path: "analysis",
          name: "analysis",
          meta: {
            title: "分析页",
            keepAlive: true,
          },
          component: "dashboard/analysis",
        },
        {
          name: "monitor",
          path: "monitor",
          meta: {
            title: "监控页（外部）",
            target: "http://www.baidu.com",
            blank: true,
          },
        },
        {
          path: "workplace",
          name: "workplace",
          meta: {
            title: "工作台",
            keepAlive: true,
          },
          component: "dashboard/workspace",
        },
      ],
    }, // account
    {
      name: "account",
      meta: {
        title: "个人页",
        icon: "bx-analyse",
        show: true,
      },
      redirect: "/account/center",
      component: "RouteView",
      children: [
        {
          name: "center",
          meta: {
            title: "个人中心",
            show: true,
            keepAlive: true,
          },
          component: "account",
        },
      ],
    },// Exception
    {
      name: 'exception',
      meta: {
        title: '异常页',
        icon: 'bx-analyse',
        show: true
      },
      redirect: '/exception/403',
      component: 'RouteView',
      children:[
        {
          name: '403',
          meta: {
            title: '403',
            show: true,
            keepAlive: true,
          },
          component: 'exception/403'
        },
        {
          name: '404',
          meta: {
            title: '404',
            show: true,
            keepAlive: true,
          },
          component: 'exception/404'
        },
        {
          name: '500',
          'meta': {
            title: '500',
            show: true,
            keepAlive: true,
          },
          component: 'exception/500'
        }
      ]
    },
    
  ],
};
