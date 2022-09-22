import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/HomeView.vue'),
      redirect: '/homeInfo',
      children: [
        {
          path: 'homeInfo',
          name: 'homeInfo',
          // meta: {
          //   isShow: true,//是否需要被展示出来
          //   title: "homeInfo"
          // },
          component: () => import('../views/home/HomeInfoView.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          // meta: {
          //   isShow: true,//是否需要被展示出来
          //   title: "blog"
          // },
          component: () => import('../views/blog/BlogView.vue')
        },
        {
          path: 'blogcont',
          name: 'blogcont',
          // meta: {
          //   isShow: true,//是否需要被展示出来
          //   title: "blog"
          // },
          component: () => import('../views/blog/BlogContentView.vue')
        },
        {
          path: 'blogedit',
          name: 'blogedit',
          // meta: {
          //   isShow: true,//是否需要被展示出来
          //   title: "blog"
          // },
          component: () => import('../views/blog/BlogEditView.vue')
        },
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import('../views/manage/ManageView.vue'),
      redirect: '/manage/user',
      children: [
        {
          path: 'user',
          name: 'user',
          meta: {
            isShow: true,//是否需要被展示出来
            title: "User Manage"
          },
          component: () => import('../views/manage/UserView.vue')
        },
        {
          path: 'goods',
          name: 'goods',
          meta: {
            isShow: true,//是否需要被展示出来
            title: "Goods Manage"
          },
          component: () => import('../views/manage/GoodsView.vue')
        },
      ]
    }
  ]
})

//路由守卫
router.beforeEach((to, from, next) => {
  const token: string | null = localStorage.getItem("token")
  // if (!token && to.path != "/login"&& to.path != "/register"&& to.path != "/homeInfo") {
  if(!token && (to.path == "/manage/user" || to.path == "/manage/goods")){
    next("/")
  } else {
    next()
  }
})

export default router
