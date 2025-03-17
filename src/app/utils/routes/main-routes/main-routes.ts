// routes using on this app
export const routes = {
  // modules routes
  MAIN_MODULE: '/module:main/*',
  AUTH_MODULE: '/auth/:page/*',

  //   pages routes
  WELCOME_PAGE: '/',
  GENERAL_PAGE: 'general',
  SERVICES_PAGE: 'services',
  OUR_WORKS_PAGE: '/our-works',
  ABOUT_PAGE: '/about',
  BLOG_PAGE: '/blog',
  CONTACTS_PAGE: '/contacts',

  //   not exists pages
  NOT_EXIST_PAGE: '*',
};
