'use strict';

/**
 * event-report service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-report.event-report');
