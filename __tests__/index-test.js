var createTestStore = require('../index');
var test = require('tape');

test('#createTestStore', function(t) {
  var someState = {
    some: {
      random: 'state'
    }
  };
  var store = createTestStore(someState);

  t.equals(typeof store.dispatch, 'function', 'has dispatch');
  t.equals(store.dispatch.displayName, 'spy', 'dispatch is a spy');

  t.equals(typeof store.getState, 'function', 'has getState');
  t.equals(store.getState.displayName, 'stub', 'getState is a stub');
  t.deepEquals(store.getState(), someState, 'returns the state we gave it');

  t.equals(typeof store.subscribe, 'function', 'has subscribe');
  t.equals(store.subscribe.displayName, 'spy', 'subscribe is a spy');

  t.end();
});
