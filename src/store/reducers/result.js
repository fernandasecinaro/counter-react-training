import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(result => result.id !== action.resultElId);
  return updateObject(state, { results: updatedArray });
};

// reducer es una funcion que recibe state y action, y devuelve un state

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.counter * 2,
        }),
      });
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default reducer;
