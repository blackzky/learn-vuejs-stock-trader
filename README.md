# Learn VueJS: Stock Trader

> A sample application to try the concepts learned from  VueJS tutorials

## Resources

* Vue.js Extension Pack for Visual Studio - [link](https://marketplace.visualstudio.com/items?itemName=mubaidr.vuejs-extension-pack)
* How to set favicon.ico properly on vue.js webpack project?
 - [link](https://stackoverflow.com/questions/40190524/how-to-set-favicon-ico-properly-on-vue-js-webpack-project)
* Material Design + Vue - [link](https://vuetifyjs.com/en/)

## Issues
- **ISSUE** `ERROR LOG: '[Vue warn]: Error in render: "TypeError: undefined is not an object (evaluating 'route.matched')"`
    - **Error Message** : 
        ```
        Error is shown in the unit test console when `new Vue(App).$mount()` from `App.spec.js` is used.
        ```
    - **Cause**: The router (dependency) is not loaded properly
    - **Solution**: [link](https://github.com/vuejs-templates/webpack/issues/709)
- **ISSUE** 
    - **Error Message** : 
        ```
        Module not found: Error: Can't resolve 'vue-server-renderer'
        ```
    - **Possible Solution**: [link](https://github.com/vuejs/vue-test-utils/issues/440)
    - **Fixed in v1.0.0-beta.13.** vue-test-utils has been split into two packages: @vue/test-utils and @vue/server-test-utils.
- **ISSUE [Vuetify #1]** 
    - **Error Message**:
        ```
        ERROR LOG: '[Vue warn]: Unknown custom element: <v-app> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
        ```
    - **Cause**: `Vuetify` was not added to Vue in the entry test file (index.js)
    - **Solution**: `Vue.use(Vuetify)` in `test/unit/index.js`. Next issue: **Check Vueifty #2**
- **ISSUE [Vuetify #2]** 
    - **Error Message**:
        ```
        TypeError: undefined is not a constructor (evaluating 'Array.from({ length: length }, function (v, k) {
      return k;
        })')
        at webpack:///node_modules/vuetify/dist/vuetify.js:303:0 <- index.js:22735
        ```
    - **Cause**: This is because pjs does not support ES6 features.
    - **Solution**: Import `babel-polyfill` in `test/unit/index.js`. Read more: Same issue - [link](https://github.com/vuetifyjs/vuetify/issues/3335) | [Babel Polyfill usage](https://babeljs.io/docs/usage/polyfill/)
        ```
        import "babel-polyfill";

        import Vue from 'vue'
        import Vuetify from 'vuetify'

        Vue.use(Vuetify)
        ...
        ```

# TODO
- [DONE] Migrate to vue-test-utils for unit test - [link](https://github.com/vuejs/vue-test-utils) **Currently on beta**
- [DONE] Fix Vuetify #2 Issue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
