'use strict';

const pathMatching = require('egg-path-matching');

module.exports = options => {
  return async function oauth2(ctx, next) {
    const authTable = options.authPath || [];
    const path = ctx.request.originalUrl || ctx.request.url;
    const isMatched = authTable.some(context => {
      const match = pathMatching({ match: context });
      const isMatched = match({ path });
      return isMatched;
    });

    if (isMatched) {
      await ctx.app.oAuth2Server.authenticate()(ctx, next);
    } else {
      await next();
    }
  };
};
