import _siteconfig from './_siteconfig';

const imagesSettings = {
    screens: {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
        '2xl': 1536
    },
    domains: []
}

export const modules = [
    '@nuxt/content',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ]
  if (_siteconfig.googleAnalytics.on && _siteconfig.googleAnalytics.id) {
    modules.push('@nuxtjs/google-gtag')
  }

  export const modulesSettings = {
    image: imagesSettings,
    pwa: {
        manifest: {
            lang: 'en'
        }
    },
    sitemap: {
        hostname: _siteconfig.hostname,
    },
    'google-gtag': {
      id: _siteconfig.googleAnalytics.id
    }
  }