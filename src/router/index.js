import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component:()=>import ("@/components/login")
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import ("@/components/login")
    },
    {
      path: '/index',
      name: 'index',
      component:()=>import ("@/components/index"),
      children:[
        {
          path: '',
          name: 'index-map',
          redirect: 'map'
        },
        {
          path: 'map',
          name: 'index-map',
          component:()=>import ("@/components/index-map"),
          children:[
            {
              path: '',
              name: 'zhjc',
              redirect: '1'
            },
            {
              path: '1',
              name: 'zhjc',
              component:()=>import ("@/components/navs-map/zhjc")
            },
            {
              path: '2',
              name: 'wsjc',
              component:()=>import ("@/components/navs-map/wsjc")
            },
            {
              path: '3',
              name: 'jxry',
              component:()=>import ("@/components/navs-map/jxry")
            },
            {
              path: '4',
              name: 'swjc',
              component:()=>import ("@/components/navs-map/swjc")
            },
            {
              path: '5',
              name: 'mkcn',
              component:()=>import ("@/components/navs-map/mkcn")
            },
            {
              path: '6',
              name: 'kzhdyl',
              component:()=>import ("@/components/navs-map/kzhdyl")
            },
            {
              path: '7',
              name: 'aqjc',
              component:()=>import ("@/components/navs-map/aqjc")
            },
            {
              path: '8',
              name: 'gysp',
              component:()=>import ("@/components/navs-map/gysp")
            },
            {
              path: '9',
              name: 'dpzs',
              component:()=>import ("@/components/navs-map/dpzs")
            },
            {
              path: 'mkcnchild',
              name: 'mkcn-child',
              component:()=>import ("@/components/mkcn-child/mkcn-child")
            },
            {
              path: 'mkcnleftone',
              name: 'mkcnleftone',
              component:()=>import ("@/components/mkcn-left-one/mkcn-left-one")
            },
            {
              path: 'mkcnlefttwo',
              name: 'mkcnlefttwo',
              component:()=>import ("@/components/mkcn-left-two/mkcn-left-two")
            },
          ]
        },
        {
          path: 'table',
          name: 'index-table',
          component:()=>import ("@/components/index-table")
        },
        {
          path: 'menhu',
          name: 'index-menhu',
          component:()=>import ("@/components/index-integration")
        }
      ]
    }
  ]
})

