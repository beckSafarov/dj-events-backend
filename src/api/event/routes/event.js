'use strict';

/**
 * event router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::event.event', {
  config: {
    update: {
      policies: ['api::event.is-owner']
    },
    delete: {
      policies: ['api::event.is-owner']
    }
  }
});