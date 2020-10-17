import app from '../../src/app';

describe('\'pilots\' service', () => {
  it('registered the service', () => {
    const service = app.service('pilots');
    expect(service).toBeTruthy();
  });
});
