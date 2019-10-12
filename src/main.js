import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Buefy from 'buefy'
//import '../../../sass/quest/cocraftstyles.sass' //already includes importing bulma and buefy css.

//material-icons
Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: 'mdi',
  defaultContainerElement: '#content',
  defaultIconPrev: 'arrow_left',
  defaultIconNext: 'arrow_right',

  // ...
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
