const assert = require('assert');
const app = require('../../src/server//app');

describe('\'tags\' service', () => {
  it('registered the service', () => {
    const service = app.service('tags');

    assert.ok(service, 'Registered the service');
  });
});
