var sinon = require('sinon');

module.exports = function createTestStore(state) {
  return {
    dispatch: sinon.spy(),
    getState: sinon.stub().returns(state),
    subscribe: sinon.spy()
  };
}
