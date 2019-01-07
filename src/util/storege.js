/**
 * 在本地存储内容
 * @param {string} key 键名
 * @param {*} data 值
 */
function setStorage(key, data) {
  const dataType = typeof data;

  if (dataType === 'object') {
    // json 对象处理
    window.localStorage.setItem(key, JSON.stringify(data));
  } else if (['number', 'string', 'boolean'].includes(dataType)) {
    // 基础类型
    window.localStorage.setItem(key, data);
  } else {
    alert('该类型不能用于本地存储');
  }
}

/**
 * 取出本地存储内容
 * @param {string} key 
 */
function getStorage(key) {
  const data = window.localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  } else {
    return '';
  }
}

function removeStorage(name) {
  window.localStorage.removeItem(name);
}

export {
  setStorage,
  getStorage,
  removeStorage,
};
