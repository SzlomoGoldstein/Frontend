// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/util/colors'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    defaults: {
      global: {
      },
      VList: {
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            'brand': colors.purple.lighten4,
          }
        },
        dark: {
          colors: {
            'brand': colors.purple.darken4,
          }
        }
      }
    }
  })
  app.vueApp.use(vuetify)
})
