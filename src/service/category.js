import { get, post } from 'util/request';

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

/**
 * 更新品类名称
 * @param {string} categoryId 
 * @param {string} categoryName 
 */
function requestEditCategoryName(categoryId, categoryName) {
  const url = '/manage/category/set_category_name.do';
  return post(url, {
    categoryId,
    categoryName
  });
}

function requestCreateCategory(parentId, categoryName) {
  const url = '/manage/category/add_category.do';
  return post(url, {
    parentId,
    categoryName
  });
}

export {
  requestCategory,
  requestEditCategoryName,
  requestCreateCategory
};
