import Vue from 'vue';
import Portfolio from '@/components/Portfolio';

describe('Portfolio.vue', () => {
    it('should have a name', () => {
        expect(Portfolio.name).to.equal('Portfolio');
    })
});