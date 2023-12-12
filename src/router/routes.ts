import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'comp1', component: () => import('components/TheComp1.vue') },
      { path: 'comp2', component: () => import('components/TheComp2.vue') },
      { path: 'comp3', component: () => import('components/TheComp3.vue') },
      { path: 'comp4', component: () => import('components/TheComp4.vue') },
      { path: 'comp5', component: () => import('components/TheComp5.vue') },
      { path: 'comp6', component: () => import('components/TheComp6.vue') },
      { path: 'comp7', component: () => import('components/TheComp7.vue') },
      { path: 'comp8', component: () => import('components/TheComp8.vue') },
      { path: 'comp9', component: () => import('components/TheComp9.vue') },
      { path: 'comp10', component: () => import('components/TheComp10.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
