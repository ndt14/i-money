import { projectAuth } from '@/configs/firebases';
import { createRouter, createWebHistory } from 'vue-router';

const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;

  // console.log('before enter router: ', user);
  if (!user) next({ name: 'Login', params: {} });
  next();
};

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      text: 'Hey ,Thịnh',
      leading: true,
      isShowFooter: true,
    },
    component: () => import(/* webpackChunkName: "home" */ '../views/index.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'auth',
    },
    component: () => import(/* webpackChunkName: "register" */ '../views/register.vue'),
  },

  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'auth',
    },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/login.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      text: 'Profile',
      leading: false,
      isShowFooter: true,
    },
    component: () => import(/* webpackChunkName: "register" */ '../views/profile.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "register" */ '../views/logout.vue'),
  },
  {
    path: '/report',
    name: 'Report',
    meta: {
      text: 'Report',
      leading: false,
      isShowFooter: true,
    },
    component: () => import(/* webpackChunkName: "register" */ '../views/report.vue'),
  },
  {
    path: '/budget',
    name: 'Budget',
    meta: {
      text: 'Budget',
      leading: false,
      isShowFooter: true,
    },
    component: () => import(/* webpackChunkName: "register" */ '../views/budget.vue'),
  },
  {
    path: '/new-transaction',
    name: 'NewTransaction',
    // meta: {
    //   text: 'NewTransaction',
    //   leading: false,
    //   isShowFooter: true,
    // },
    component: () => import(/* webpackChunkName: "register" */ '../views/new-transaction.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
