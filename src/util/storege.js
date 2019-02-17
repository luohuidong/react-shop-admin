
/**
 * 在本地存储内容
 * @param {string} key 键名
 * @param {any} data 值
 */
function setStorage(key, data) {
  const dataType = typeof data;

  if (dataType === 'object') {
    // json 对象处理
    sessionStorage.setItem(key, JSON.stringify(data));
  } else if (['number', 'string', 'boolean'].includes(dataType)) {
    // 基础类型
    sessionStorage.setItem(key, data);
  } else {
    alert('该类型不能用于本地存储');
  }
}

/**
 * 取出本地存储内容
 * @param {string} key 
 */
function getStorage(key) {
  const data = sessionStorage.getItem(key);
  
  if (data) {
    return JSON.parse(data);
  } else {
    return '';
  }
}

function removeStorage(key) {
  sessionStorage.removeItem(key);
}

/**
 * 本地存储用户信息
 * @param {object} data 用户信息
 */
function saveUserDataStorage(data) {
  setStorage('user', data);
}

/**
 * 获取本地存储的用户信息
 */
function getUserDataStorage() {
  return getStorage('user');
}

/**
 * 移除本地存储的用户信息
 */
function removeUserDataStorage() {
  removeStorage('user');
}

export {
  saveUserDataStorage,
  getUserDataStorage,
  removeUserDataStorage,
};
