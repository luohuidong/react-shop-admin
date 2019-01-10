import { DO_LOG_IN, DO_LOG_OUT } from './actionTypes.js';

/**
 * 登录成功的 action
 * @param {object} data 登录后获取的用户信息
 */
const doLogin = data => ({
  type: DO_LOG_IN,
  data,
});

const doLogOut = () => ({
  type: DO_LOG_OUT
});

export {
  doLogin,
  doLogOut,
};
