const assert = require('assert');
const app = require('../../src/server//app');

describe('\'testthu\' service', () => {
  it('registered the service', () => {
    const service = app.service('testthu');

    assert.ok(service, 'Registered the service');
  });
});
