import Vue from 'vue';
import Home from '@/components/pages/Home';

describe('Home.vue', () => {
    it('should have a name', () => {
        expect(Home.name).to.equal('Home');
    });    
});