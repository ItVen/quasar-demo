import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'test1', component: () => import('pages/Test3.vue') },
      { path: 'test2', component: () => import('pages/Test1.vue') },
      { path: 'pwcore', component: () => import('pages/PwCoreDemo.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
