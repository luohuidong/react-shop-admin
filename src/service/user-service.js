import { get, post } from 'util/request';
import { saveUserDataStorage, removeUserDataStorage } from 'util/storege';
import { emitUserDataEvent } from 'util/custom-event';

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
  return post(url, data).then(userData => {
    saveUserDataStorage(userData);
    emitUserDataEvent('login');
    return userData;
  });
}

/**
 * 用户登出
 */
function userLogout() {
  const url = '/user/logout.do';
  return post(url).then(() => {
    removeUserDataStorage();
    emitUserDataEvent('logout');
    return '退出成功';
  });
}

/**
 * 获取用户列表
 */
function requestUserList(pageSize, pageNum) {
  const url = '/manage/user/list.do';
  return get(url, { pageSize, pageNum });
}

export {
  requestUserLogin,
  userLogout,
  requestUserList,
};
