import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  counter: 0,
};

// reducer es una funcion que recibe state y action, y devuelve un state

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.val });
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.val });

    default:
      return state;
  }
};

export default reducer;
