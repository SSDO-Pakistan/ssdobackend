'use strict';

/**
 * tax-return service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tax-return.tax-return');
