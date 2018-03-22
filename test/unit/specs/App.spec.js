import { shallow } from '@vue/test-utils';
import Vue from 'vue';
import App from '@/App';
// import router from '@/router/index';
import Header from '@/components/common/Header';

const EXPECTED_COMPONENTS = ['router-view', 'router-link', Header.tag];

describe('App.vue', () => {
  it('should have a name', () => {
    expect(App.name).to.equal('App');
  });

  xit('should have the necessary components', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor({ router }).$mount();

    for (let i in EXPECTED_COMPONENTS) {
      expect(vm.$options.components).to.have.property(EXPECTED_COMPONENTS[i]);
    }
  });

  it('should have the necessary components', () => {
    const wrapper = shallow(App, {
      components: { [Header.tag]: Header }
    });
    // const vm = wrapper.vm;
    // for(let i in wrapper) {
    //   console.log(i);
    // }
  });

  // should contain rendered "header"
});
