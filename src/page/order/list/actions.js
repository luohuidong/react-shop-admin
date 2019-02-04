import { message } from 'antd';

import { 
  requestOrderList,
  requestOrderSearch
} from 'service/order';
import { GET_ORDER_LIST_DATA, SEARCH_ORDER } from './actionTypes';

/**
 * 获取订单列表
 * @param {number} pageSize 
 * @param {number} pageNum 
 */
const getOrderList = (pageSize, pageNum) => {
  return async dispatch => {
    try {
      const { list, total } = await requestOrderList(pageSize, pageNum);
			
      dispatch({
        type: GET_ORDER_LIST_DATA,
        payload: {
          pageSize,
          pageNum,
          orderListData: list,
          total
        }
      });
    } catch (error) {
      message.error(error || '查询订单列表出错');
    }
  };
};

/**
 * 通过订单号查询订单
 * @param {string} orderNum 订单号
 */
const handleOrderSearch = (orderNum) => {
  return async dispatch => {
    try {
      const { list, total, pageSize, pageNum } = await requestOrderSearch(orderNum);
      dispatch({
        type: SEARCH_ORDER,
        payload: {
          pageSize,
          pageNum,
          orderListData: list,
          total
        }
      });
    } catch (error) {
      message.error(error || '查询订单失败');
    }
  };
};

export {
  getOrderList,
  handleOrderSearch
};
