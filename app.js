'use strict';

module.exports = app => {
  app.config.coreMiddleware.unshift('auth');
}
