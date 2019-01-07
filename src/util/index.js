import { ajax } from 'jquery';

class MUtil {
  request = (param) => {
    return new Promise((resolve, reject) => {
      ajax({
        type: param.type || 'get',
        url: param.url || '',
        dataType: param.dataType || 'json',
        data: param.data || null,
        success: res => {
          if (res.status === 0) {
            // status 等于 0 表示数据请求成功
            typeof resolve === 'function' && resolve(res.data, res.msg);
          } else if (res.status === 10) {
            // status 等于 10 表示用户未登录
            this.doLogin();
          } else {
            typeof reject === 'function' && reject(res.msg || res.data);
          }
        },
        error: err => {
          typeof reject === 'function' && reject(err.statusText);
        }
      });
    });
  }

  // 转跳登录
  doLogin = () => {
    window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
  }

  // 获取 URL 参数
  getUrlParam(name) {
    // ?param=123&param1=456
    const queryString = window.location.search.split('?')[1] || '';
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    const result = queryString.match(reg);
    return result ? decodeURIComponent(result[2]) : null;
  }

  // 错误提示
  errorTips(errMsg) {
    alert(errMsg || '好像哪里不对了~');
  }

}


export default MUtil;
