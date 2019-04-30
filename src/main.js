import Vue from 'vue/dist/vue.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  components: {
    gSheet: App
  },
  methods: {
    dataReceived (data) {
      console.log('success', data)
    }
  }
}).$mount('#app')
