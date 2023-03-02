// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      title: "Yari's blog",
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {charset: 'utf-16'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content: ''},
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Coda:wght@400;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,700&family=Open+Sans:wght@300;400;500;600;700;800&display=swap',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  },
  modules: ['@vueuse/nuxt'],
});
