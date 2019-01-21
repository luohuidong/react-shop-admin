import { message } from 'antd';

import { 
  requestProductList, 
  requestSetProductSaleStatus, 
  requestSearchProduct 
} from 'service/product';
import { GET_PRODUCT_LIST_DATA, SEARCH_PRODUCT_LIST_DATA } from './actionTypes';

/**
 * 获取商品列表数据
 * @param {number} pageSize 
 * @param {number} pageNumber 
 */
const getProductList = (pageSize, pageNumber) => {
  return async dispatch => {
    try {
      const { list, total } = await requestProductList(pageNumber, pageSize);
			
      dispatch({
        type: GET_PRODUCT_LIST_DATA,
        payload: {
          productListData: list,
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

/**
 * 设置商品的上架状态，并获取最新的列表信息
 * @param {string} productId 
 * @param {string} productStatus 商品目标上架状态
 * @param {number} pageSize 
 * @param {number} pageNumber 
 */
const setProductSaleStatus = (productId, productStatus, pageSize, pageNumber) => {
  return async dispatch => {
    try {
      const result = await requestSetProductSaleStatus(productId, productStatus);
      message.success(result);
      dispatch(getProductList(pageSize, pageNumber));
    } catch (error) {
      message.error(error);
    }
  };
};

/**
 * 通过商品名字和 id 搜索商品
 * @param {string} productName 
 * @param {string} productId 
 */
const searchProduct = (productName, productId) => {
  return async dispatch => {
    try {
      const result = await requestSearchProduct(productName, productId);
			console.log("​searchProduct -> result", result)
      const { list, total } = result;

      dispatch({
        type: SEARCH_PRODUCT_LIST_DATA,
        payload: {
          productListData: list,
          pageSize: 10,
          pageNumber: 1,
          total
        }
      });
    } catch (error) {
      message.error(error);
    }
  };
};

export {
  getProductList,
  setProductSaleStatus,
  searchProduct
};
