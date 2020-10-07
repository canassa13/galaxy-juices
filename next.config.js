const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');

module.exports = withPlugins(
  [
    [withPWA, {
      pwa: {
        dest: 'public'
      }
    }],
    [withImages, { esModule: true }],
  ],
  {
    /* global config here ... */
  },
)



