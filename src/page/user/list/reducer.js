import { GET_USER_LIST_DATA } from './actionTypes';

const initState = {
  userListData: [],
  pageSize: 0,
  pageNumber: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_LIST_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
