import { get, post } from 'util/request';

/**
 * 用户登录
 * @param {string} username 账号
 * @param {string} password 密码
 */
function requestUserLogin(username, password) {
  const url = '/manage/user/login.do';
  const data = {
    username,
    password,
  };
  return post(url, data).then(response => {
    const { status, data, msg } = response.data;

    if (status === 0) {
      return data;
    } else {
      return Promise.reject(msg);
    }
  });
}

/**
 * 用户登出
 */
function userLogout() {
  const url = '/user/logout.do';
  return post(url).then(response => {
    const { status } = response.data;
    if (status === 0) {
      return '退出登录成功';
    } else {
      return Promise.reject('推出登录失败');
    }
  });
}

/**
 * 获取用户列表
 */
function requestUserList() {
  const url = '/manage/user/list.do';
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
  requestUserLogin,
  userLogout,
  requestUserList,
};
