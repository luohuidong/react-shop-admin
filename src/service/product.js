import { get, post } from 'util/request';

/**
 * 获取商品列表数据
 * @param {string} listType 列表类型，list 代表普通列表，search 表示搜索列表
 * @param {object} params 查询参数
 */
function requestProductList(listType, params) {
  let url = '';
  
  if (listType === 'list') {
    url = '/manage/product/list.do';
  } else if (listType === 'search') {
    url = '/manage/product/search.do';
  }
  
  return get(url, params);
}

/**
 * 变更商品上下架状态
 * @param {string} productId 商品 id
 * @param {string} status 状态
 */
function requestSetProductSaleStatus(productId, status) {
  const url = '/manage/product/set_sale_status.do';
  return post(url, {
    productId,
    status
  });
}

/**
 * 获取商品详情
 * @param {string} productId 
 */
function requestProductDetail(productId) {
  const url = '/manage/product/detail.do';
  return get(url, {
    productId
  });
}

/**
 * 新增商品
 * @param {object} data 表单数据
 */
function requestSaveProduct(data) {
  const url = '/manage/product/save.do';
  return post(url, data);
}

export {
  requestProductList,
  requestSetProductSaleStatus,
  requestProductDetail,
  requestSaveProduct
};
