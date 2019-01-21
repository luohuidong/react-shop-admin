import { get, post } from 'util/request';

/**
 * 获取商品列表数据
 * @param {number} pageNumber 
 * @param {number} pageSize 
 */
function requestProductList(pageNumber, pageSize) {
  const url = '/manage/product/list.do';
  return get(url, {
    pageNum: pageNumber,
    pageSize
  });
}

/**
 * 搜索商品信息
 * @param {number} pageNumber 
 * @param {number} pageSize 
 * @param {string} productName 
 * @param {string} productId 
 */
function requestSearchProduct(productName, productId) {
  const url = '/manage/product/search.do';
  return get(url, {
    productName,
    productId
  });
}

function requestUploadImage() {
  const url = '/manage/product/upload.do';
  return post(url);
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

export {
  requestProductList,
  requestSearchProduct,
  requestProductDetail,
  requestSetProductSaleStatus
};
