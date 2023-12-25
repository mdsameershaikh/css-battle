import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//vue filters 
Vue.filter('capitalizeFirstLetterOfEachWord', function (value) {
  if (!value) {
    return ""
  }
  value = value.toString()

 value = value.split(' ').map((e) => {
     return e[0].toUpperCase() + e.slice(1)
  }).join(' ')
  return value
})
var app = new Vue({
  render: h => h(App),
})
app.$mount('#app')
