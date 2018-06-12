'use strict';

const mock = require('egg-mock');

describe('test/milink.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/milink-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, milink')
      .expect(200);
  });
});
