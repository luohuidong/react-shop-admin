import { GET_PRODUCT_LIST_DATA, SEARCH_PRODUCT_LIST_DATA } from './actionTypes';

const initState = {
  productListData: [],
  pageSize: 0,
  pageNumber: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST_DATA:
      return {
        ...state,
        ...action.payload
      };
    case SEARCH_PRODUCT_LIST_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
