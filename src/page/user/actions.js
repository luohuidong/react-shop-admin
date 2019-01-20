import { message } from 'antd';

import { requestUserList } from 'service/user-service';
import { GET_USER_LIST_DATA } from './actionTypes';

const getUserList = (pageSize, pageNumber) => {
  return async dispatch => {
    try {
      const { list, total } = await requestUserList(pageSize, pageNumber);
			
      dispatch({
        type: GET_USER_LIST_DATA,
        payload: {
          userListData: list,
          pageSize,
          pageNumber,
          total
        }
      });
    } catch (error) {
      message.error(error);
    }
  };
};

export {
  getUserList
};
