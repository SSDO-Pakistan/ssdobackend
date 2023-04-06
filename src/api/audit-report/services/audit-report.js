'use strict';

/**
 * audit-report service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::audit-report.audit-report');
