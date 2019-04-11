import Vue from 'vue/dist/vue.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  components: {
    gSheet: App
  },
  data: () => ({
    fields: ['heading', 'href', 'imagesrc', 'description']
  })
}).$mount('#app')
