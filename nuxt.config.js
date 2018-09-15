import PortfolioItems from './assets/portfolio-items';
import menuItems from './assets/menu-items';

const nuxtconfig = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Rebecca Deakin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#28dbdb' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
        integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
        crossorigin: 'anonymous',
      },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#28dbdb' },
  css: [
    '@/assets/scss/main.scss',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
      config.module.rules.push({
        test: /\.(md)$/,
        loader: 'raw-loader',
        exclude: /(node_modules)/,
      });
      config.node = { // eslint-disable-line
        console: false,
        fs: 'empty',
        path: 'empty',
      };
    },
  },
  generate: {
    dir: 'docs',
    routes: [
    ],
  },
};

for (let i = 0; i < PortfolioItems.length; i += 1) {
  const item = PortfolioItems[i];
  nuxtconfig.generate.routes.push(`/portfolio/${item.slug}`);
}

for (let i = 0; i < menuItems.length; i += 1) {
  const item = menuItems[i];
  nuxtconfig.generate.routes.push(`/${item.slug}`);
}


module.exports = nuxtconfig;
