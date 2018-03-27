import { shallow } from '@vue/test-utils';
import Vue from 'vue';
import App from '@/App';
import Header from '@/components/common/Header';

describe('App.vue', () => {

  it('should have a name', () => {
    expect(App.name).to.equal('App');
  });

  it('should have the necessary components', () => {
    const wrapper = shallow(App);

    expect(wrapper.find(Header).exists()).to.true;
  });

});
