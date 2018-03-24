# Learn VueJS: Stock Trader

> A sample application to try the concepts learned from  VueJS tutorials

## Resources

* Vue.js Extension Pack for Visual Studio - [link](https://marketplace.visualstudio.com/items?itemName=mubaidr.vuejs-extension-pack)
* How to set favicon.ico properly on vue.js webpack project?
 - [link](https://stackoverflow.com/questions/40190524/how-to-set-favicon-ico-properly-on-vue-js-webpack-project)
* Material Design + Vue - [link](https://vuetifyjs.com/en/)

## Issues
- **ISSUE** `ERROR LOG: '[Vue warn]: Error in render: "TypeError: undefined is not an object (evaluating 'route.matched')"`
    - **Details** : 
        ```
        Error is shown in the unit test console when `new Vue(App).$mount()` from `App.spec.js` is used.
        ```
    - **Cause**: The router (dependency) is not loaded properly
    - Solution: [link](https://github.com/vuejs-templates/webpack/issues/709)
- **ISSUE** `Module not found: Error: Can't resolve 'vue-server-renderer'`
    - Possible solution: [link](https://github.com/vuejs/vue-test-utils/issues/440)

# TODO
- Migrate to vue-test-utils for unit test - [link](https://github.com/vuejs/vue-test-utils) **Currently on beta**

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
