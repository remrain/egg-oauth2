'use strict';

const mock = require('egg-mock');

describe('test/oauth2.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/oauth2-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, oauth2')
      .expect(200);
  });
});
