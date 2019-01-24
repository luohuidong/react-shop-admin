import { get } from 'util/request';

/**
 * 获取品类子节点
 * @param {number} parentId 父节点 id
 */
function requestCategory(parentId) {
  const url = '/manage/category/get_category.do';
  return get(url, {
    categoryId: parentId || 0
  });
}

export {
  requestCategory
};
