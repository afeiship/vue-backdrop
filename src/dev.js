import Vue from 'vue'
import VueBackdrop from './components/VueBackdrop.vue'

Vue.component(VueBackdrop.name, VueBackdrop)

console.log(VueBackdrop);

Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><vue-backdrop>Hello</vue-backdrop></div>',
  components: { VueBackdrop }
})
