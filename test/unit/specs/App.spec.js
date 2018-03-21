import Vue from 'vue';
import App from '@/App';
import router from '@/router/index';
import Header from '@/components/common/Header';

const EXPECTED_COMPONENTS = ['router-view', 'router-link', Header.name];

describe('App.vue', () => {
  it('should have a name', () => {
    expect(App.name).to.equal('App');
  });

  it('should have the necessary components', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor({ router }).$mount();

    for (let i in EXPECTED_COMPONENTS) {
      expect(vm.$options.components).to.have.property(EXPECTED_COMPONENTS[i]);
    }
  });
});
