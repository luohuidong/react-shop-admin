import MUtil from 'util';

const { request } = new MUtil();

class User {
  // 用户登录
  login(loginInfo) {
    const param = {
      type: 'post',
      url: '/user/login.do',
      data: {
        username: loginInfo.userName,
        password: loginInfo.password
      }
    };
    return request(param);
  }

  logout() {
    return request({
      type: 'post',
      url: '/user/logout.do'
    });
  }
}

export default User;
