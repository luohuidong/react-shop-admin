import { GET_ORDER_LIST_DATA, SEARCH_ORDER } from './actionTypes';

const initState = {
  orderListData: [],
  pageSize: 0,
  pageNum: 0,
  orderNum: undefined,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ORDER_LIST_DATA:
    case SEARCH_ORDER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
