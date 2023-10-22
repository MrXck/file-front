import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Menu.vue'),
    redirect: '/file',
    children: [
      {
        path: 'file/:id',
        name: 'file',
        component: () => import('../views/File.vue'),
      },
      {
        path: 'file',
        name: 'File',
        component: () => import('../views/File.vue'),
      },
      {
        path: 'recycle-bin/:id',
        name: 'recycle-bin',
        component: () => import('../views/RecycleBin.vue'),
      },
      {
        path: 'recycle-bin',
        name: 'Recycle-bin',
        component: () => import('../views/RecycleBin.vue'),
      },
      {
        path: 'share',
        name: 'share',
        component: () => import('../views/Share.vue'),
      },
      {
        path: 'share/:id',
        name: 'Share',
        component: () => import('../views/Share.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
