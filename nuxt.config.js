export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'iVanService - Поможем с ремонтом вашей техники.',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
	  { name: 'title', content: 'iVanService - Поможем с ремонтом вашей техники.'},
	  { name: 'description', content: 'Мы занимаемся ремонтом стиральных машин, микроволновых печей и телевизионного оборудования, в городе Екатеринбург. Закажите ремонт прямо сейчас!'},
	  { property: 'og:type', content: 'website' },
	  { property: 'og:url', content: 'https://ivan-services.ru' },
	  { property: 'og:title', content: 'iVanService - Поможем с ремонтом вашей техники.' },
	  { property: 'og:description', content: 'Мы занимаемся ремонтом стиральных машин, микроволновых печей и телевизионного оборудования, в городе Екатеринбург. Закажите ремонт прямо сейчас!' },
	  { property: 'og:image', content: '/front-page.jpg' },
	  { property: 'twitter:card', content: 'summary_large_image' },
	  { property: 'twitter:url', content: 'https://ivan-services.ru' },
	  { property: 'twitter:title', content: 'iVanService - Поможем с ремонтом вашей техники.' },
	  { property: 'twitter:description', content: 'Мы занимаемся ремонтом стиральных машин, микроволновых печей и телевизионного оборудования, в городе Екатеринбург. Закажите ремонт прямо сейчас!' },
	  { property: 'twitter:image', content: '/front-page.jpg' },
	  { name: 'msapplication-TileColor', content: '#000000' },
	  { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
	  { name: 'theme-color', content: '#000000' },
    ],
    link: [
		{ rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
		{ rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
		{ rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
		{ rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
		{ rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
		{ rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
		{ rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
		{ rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
		{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
		{ rel: 'icon', type: 'image/png',  sizes: '192x192', href: '/android-icon-192x192.png' },
		{ rel: 'icon', type: 'image/png',  sizes: '32x32', href: '/favicon-32x32.png' },
		{ rel: 'icon', type: 'image/png',  sizes: '96x96', href: '/favicon-96x96.png' },
		{ rel: 'icon', type: 'image/png',  sizes: '16x16', href: '/favicon-16x16.png' },
		{ rel: 'manifest', href: '/manifest.json' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
	'~/assets/css/normalize.css',
	'~/assets/css/loader.css',
    '~/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-svg-loader',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // ...
  // Your loader options as svgLoader object
  svgLoader: {
    svgoConfig: {
      plugins: [
        { prefixIds: false } // Disables prefixing for SVG IDs
      ]
    }
  }
}
