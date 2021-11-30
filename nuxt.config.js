require('dotenv').config()
export default {
  env:{
    API_IMAGES: process.env.API_IMAGES,
    API_PDFS: process.env.API_PDFS,
    API_MANAGER_ADMIN: process.env.API_MANAGER_ADMIN,
    API_CLIENT: process.env.API_CLIENT,
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LyaBook',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/global.css',
    '@/assets/css/admin.css',
    '@/assets/css/response.css',
    '@/assets/css/my-account.css',
    '@/assets/css/buttons.css',
    '@/assets/css/element-custom.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/leaflet.js', ssr: false },
    '@/plugins/charts.js',
    '@/plugins/maps.js',
    '@/plugins/axios/data.js',
    '@/plugins/axios/admin.js',
    '@/plugins/axios/manager.js',
    '@/plugins/axios/client.js',
    '@/plugins/axios/credentials.js',
    '@/plugins/axios/payment.js',
    '@/plugins/boxicons.js',
    '@/plugins/notify',
    '@/plugins/element-ui',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    //baseURL: 'http://localhost:8080/api/v1'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'es',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    // middleware: ['redirect/redirect' , 'redirect/auth'],
  },

  publicRuntimeConfig: {
    API_IMAGES: process.env.API_IMAGES,
    API_PDFS: process.env.API_PDFS,
    API_MANAGER_ADMIN: process.env.API_MANAGER_ADMIN,
    API_CLIENT: process.env.API_CLIENT,
  },
}
