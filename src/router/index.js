import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Portfolio from '@/components/pages/Portfolio';
import Stocks from '@/components/pages/Stocks';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home 
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio 
    },
    {
      path: '/stocks',
      name: 'Stocks',
      component: Stocks 
    }
  ]
});
