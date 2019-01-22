import { message } from 'antd';

import { 
  requestProductList, 
  requestSetProductSaleStatus, 
} from 'service/product';
import { GET_PRODUCT_LIST_DATA } from './actionTypes';

/**
 * 
 * @param {string} listType list 表示获取普通列表数据，search 表示获取搜索商品关键字的列表数据
 * @param {number} pageSize 
 * @param {number} pageNum 
 * @param {string} productName 
 */
const getProductList = (listType, pageSize, pageNum, productName) => {
  return async dispatch => {
    try {
      const { list, total } = await requestProductList(listType, {
        pageSize,
        pageNum,
        productName
      });
			
      dispatch({
        type: GET_PRODUCT_LIST_DATA,
        payload: {
          listType,
          pageSize,
          pageNum,
          productName,
          productListData: list,
          total
        }
      });
    } catch (error) {
      message.error(error);
    }
  };
};

/**
 * 设置商品的上架状态，并获取最新的列表信息
 * @param {string} productId 
 * @param {string} productStatus 商品目标上架状态
 * @param {number} pageSize 
 * @param {number} pageNum 
 */
const setProductSaleStatus = (productId, productStatus, pageSize, pageNum) => {
  return async dispatch => {
    try {
      const result = await requestSetProductSaleStatus(productId, productStatus);
      message.success(result);
      dispatch(getProductList(pageSize, pageNum));
    } catch (error) {
      message.error(error);
    }
  };
};

export {
  getProductList,
  setProductSaleStatus,
};
