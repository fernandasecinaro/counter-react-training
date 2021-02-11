import * as actionTypes from '../actions';

const initialState = {
  results: [],
};

// reducer es una funcion que recibe state y action, y devuelve un state

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.counter,
        }),
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter(result => result.id !== action.resultElId);
      return {
        ...state,
        results: updatedArray,
      };
    default:
      return state;
  }
};

export default reducer;
