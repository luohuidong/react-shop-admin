import { get, post } from 'util/request';

/**
 * 获取订单列表信息
 */
function requestOrderList(pageSize, pageNum) {
  let url = '/manage/order/list.do';
  return get(url, {
    pageSize,
    pageNum,
  });
}

function requestOrderSearch(orderNo) {
  const url = '/manage/order/search.do';
  return get(url, {
    orderNo
  });
}

/**
 * 获取订单详情
 * @param {string} orderNumber 订单号
 */
function requestOrderDetail(orderNumber) {
  const url = '/manage/order/detail.do';
  return get(url, {
    orderNo: orderNumber
  });
}

function requestsetOrderSend(orderNumber) {
  const url = '/manage/order/send_goods.do';
  return post(url, {
    orderNo: orderNumber
  });
}

export {
  requestOrderList,
  requestOrderSearch,
  requestOrderDetail,
  requestsetOrderSend,
};
