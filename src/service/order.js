import { get, post } from 'util/request';

function requestOrderList() {
  const url = '/manage/order/list.do';
  return get(url).then(response => {
    const { status, data, msg } = response.data;

    if (status === 0) {
      return data;
    } else {
      return Promise.reject(msg);
    }
  });
}

export {
  requestOrderList
};
