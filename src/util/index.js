const request = (param) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: param.type || 'get',
      url: param.url || '',
      dataType: param.dataType || 'json',
      data: param.data || null,
      success: res => {
        if (res.status === 0) {
          // 数据请求成功
          typeof resolve === 'function' && resolve(res.data, res.msg);
        } else if (res.status === 10) {
          // 用户未登录
          doLogin();
        } else {
          typeof reject === 'function' && reject(res.msg || res.data);
        }
      },
      error: err => {
        typeof reject === 'function' && reject(err.statusText);
      }
    });
  });
};

const doLogin = () => {
  window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
};

export { request };
