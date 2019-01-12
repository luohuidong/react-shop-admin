import { get, post } from 'util/request';

function requestOrderList() {
  const url = '/manage/order/list.do';
  return get(url);
}

export {
  requestOrderList
};
