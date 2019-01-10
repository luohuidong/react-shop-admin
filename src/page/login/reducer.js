import { DO_LOG_IN, DO_LOG_OUT } from './actionTypes';

const initialState = {
  data: {}
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case DO_LOG_IN:
      return Object.assign({}, state, {
        data: action.data
      });
    case DO_LOG_OUT:
      return Object.assign({}, state, {
        data: {}
      });
    default:
      return state;
  }
}

export default reducer;
