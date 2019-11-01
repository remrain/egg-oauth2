'use strict';

const pathMatching = require('egg-path-matching');

module.exports = options => {
  return async function auth(ctx, next) {
    const authTable = omit(options, [ 'enable', 'match', 'ignore' ]);
    const path = ctx.request.originalUrl || ctx.request.url;
    Object.keys(authTable).some(context => {
      const match = pathMatching({ match: context });
      const isMatch = match({ path });

      if (isMatch) {
      }
      return isMatch;
    });
    console.log('Auth for router');
    await next();
  }
};
