import Vue from 'vue';
import Header from '@/components/common/Header';

describe('Header.vue', () => {
    it('should have a name and a tag', () => {
        expect(Header.name).to.equal('Header');
        expect(Header.tag).to.equal('app-header');
    });    

    // should contain links
});