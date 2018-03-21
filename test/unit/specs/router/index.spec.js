import Vue from 'vue';
import router from '@/router/index';
import Home from '@/components/pages/Home';
import Portfolio from '@/components/pages/Portfolio';
import Stocks from '@/components/pages/Stocks';

const EXPECTED_ROUTES = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks }
];

describe('Router', () => {
    it('should have the correct mode', () => {
        expect(router.mode).to.equal('history');
    });

    it('should have the correct expected route mappings', () => {
        for(let i in EXPECTED_ROUTES) {
            let cmp = getComponent(EXPECTED_ROUTES[i].path);
            expect(cmp).to.equal(EXPECTED_ROUTES[i].component);
        }
    })
});

function getComponent(path) {
    let routes = router.options.routes.filter(route => route.path === path);
    return (routes.length === 1) ? routes[0].component : null;
}