const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: process.env.SCOPE,
    API_AUDIENCE: process.env.API_AUDIENCE,
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3001',
    REDIRECT_URI: process.env.REDIRECT_URI || 'http://localhost:3000/api/callback',
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI || 'http://localhost:3000/',
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: 7200 // 2 hours
  },
  webpackDevMiddleware: config => {
    // Don't ignore all node modules.
    config.watchOptions.ignored = config.watchOptions.ignored.filter(
      ignore => !ignore.toString().includes('node_modules')
    );

    // Ignore all node modules except those here.
    config.watchOptions.ignored = [
      ...config.watchOptions.ignored,
      /node_modules\/(?!@auth0\/.+)/,
      /@auth0\/.+\/node_modules/
    ];

    return config;
  },
};
