import Vue from 'vue'
import router from '@/router/index'
import HelloWorld from '@/components/HelloWorld'

const EXPECTED_ROUTES = [
    {path: '/', component: HelloWorld}
]

describe('Router', () => {
    it('should have the correct mode', () => {
        expect(router.mode).to.equal('history')
    })
    it('should have the correct expected route mappings', () => {
        for(let i in EXPECTED_ROUTES) {
            let cmp = getComponent(EXPECTED_ROUTES[i].path);
            expect(cmp).to.equal(EXPECTED_ROUTES[i].component)
        }
    })
});

function getComponent(path) {
    let routes = router.options.routes.filter(route => route.path === path)
    return (routes.length === 1) ? routes[0].component : null
}