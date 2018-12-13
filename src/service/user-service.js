import { request } from 'util';

class User {
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
}

export { User };
