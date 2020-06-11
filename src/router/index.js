import Vue from 'vue'
import Router from 'vue-router'

const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};

import index from '@/pages/index';
import bookshelf from '@/pages/bookshelf';
import bookstore from '@/pages/bookstore';
import discover from '@/pages/discover';
import individual from '@/pages/individual';
import classification from '@/pages/classification';
import ranking from '@/pages/ranking';
import bookInfo from '@/pages/bookinfo';
import catalog from '@/pages/catalog';
import read from '@/pages/read';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            children:[
                {
                    path: 'bookshelf',
                    component: bookshelf
                },
                {
                    path: 'store',
                    component: bookstore
                },
                {
                    path: 'discover',
                    component: discover
                },
                {
                    path: 'individual',
                    component: individual
                }
            ]
        },
        {
            path:'/classification',
            component: classification
        },
        {
            path:'/ranking',
            component: ranking
        },
        {
            path:'/bookInfo',
            component: bookInfo
        },
        {
            path:'/catalog',
            component: catalog
        },
        {
            path:'/read',
            component: read
        }
    ]
})