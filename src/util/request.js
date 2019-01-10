import axios from 'axios';

/**
 * get 请求
 * @param {string} url 
 * @param {object} params 查询参数
 */
const get = (url, params) => {
  return axios.get(url, {
    params,
    timeout: 1000,
  });
};

/**
 * 将数据转换为表单格式
 * @param {object} data 表单数据
 */
const createFormData = data => {
  if (!data) return;

  let processedData = new FormData();
  Object.keys(data).forEach(element => {
    processedData.append(element, data[element]);
  });

  return processedData;
};

/**
 * post 请求
 * @param {string} url 
 * @param {object} data 数据
 */
const post = (url, data) => {
  return axios.post(url, createFormData(data), {
    timeout: 1000,
  });
};

export {
  get,
  post
};
