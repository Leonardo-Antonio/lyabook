import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg'
  }
})

Vue.use(Element, { locale })
