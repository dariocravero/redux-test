# redux-test

[![Build Status](https://travis-ci.org/dariocravero/redux-test.svg)](https://travis-ci.org/dariocravero/redux-test)

Create a redux-like store for testing

```
import createTestStore from 'redux-test';

const store = createTestStore({some: 'state'});
store.dispatch() // => call sinon spy
store.getState() // => call sinon stub and return {some: 'state'}
store.subscribe() // => call sinon spy
```

MIT license
