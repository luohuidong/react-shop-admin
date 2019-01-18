import { GET_STATISTIC } from './actionTypes';

const initialState = {
  statisticData: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATISTIC:
      return {
        ...state,
        statisticData: action.statisticData
      };
    default:
      return state;
  }
};

export default reducer;
