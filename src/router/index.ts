import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
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
      component: () => import('../views/ManageView.vue'),
      redirect: '/manage/goods',
      children: [
        {
          path: 'user',
          name: 'user',
          meta: {
            isShow: true,//是否需要被展示出来
            title: "User Manage"
          },
          component: () => import('../views/UserView.vue')
        },
        {
          path: 'goods',
          name: 'goods',
          meta: {
            isShow: true,//是否需要被展示出来
            title: "Goods Manage"
          },
          component: () => import('../views/GoodsView.vue')
        },
      ]
    }
  ]
})

//路由守卫
router.beforeEach((to, from, next) => {
  const token: string | null = localStorage.getItem("token")
  if (!token && to.path != "/login") {
    next("/login")
  } else {
    next()
  }
})

export default router
