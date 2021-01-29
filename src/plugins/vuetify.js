import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
//import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#BD4252',
        secondary: '#A0336D',
        accent: '#E3C139',
        error: '#0F5252',
        info: '#0196F3',
        success: '#0CAF50',
        warning: '#0FC107',
      }
    }
  }
});
