const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// reducer (recibe estado y action)
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};

// store (Le pasas el reducer)
const store = createStore(rootReducer);

// Subscription (recibe funcion que se ejecuta cada vez que el estado es actualizado)
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

// Dispatching action (le pasas una action)
store.dispatch({ type: 'INC_COUNTER' }); // + 1
store.dispatch({ type: 'ADD_COUNTER', value: 10 }); // + 10
