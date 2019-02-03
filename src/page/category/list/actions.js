import { message } from 'antd';

import { 
  GET_CATEGORY_LIST_DATA, 
  OPEN_EDITOR, 
  CANCEL_EDIT, 
  HANDLE_EDIT,
  OPEN_CREATE_MODAL,
  CANCEL_CREATE,
  HANDLE_CREATE,
} from './actionTypes';

import { requestCategory, requestEditCategoryName, requestCreateCategory } from 'service/category';

const getCategoryListData = (parentCategoryId) => {
  if (!parentCategoryId) {
    parentCategoryId = 0;
  }

  return async dispatch => {
    try {
      const data = await requestCategory(parentCategoryId);

      dispatch({
        type: GET_CATEGORY_LIST_DATA,
        payload: {
          categoryListData: data,
        }
      });
    } catch (error) {
      message.error(error || '查询商品分类数据出错');
    }
  };
};

const handleOpenEditModal = (record) => ({
  type: OPEN_EDITOR,
  payload: {
    editorModalVisible: true,
    currentEditCategoryData: record
  }
});

const handleCancelEdit = () => ({
  type: CANCEL_EDIT,
  payload: {
    editorModalVisible: false,
    currentEditCategoryData: {}
  }
});

const handleEditCategoryName = (parentCategoryId, categoryId, categoryName) => {
  return dispatch => {
    requestEditCategoryName(categoryId, categoryName).then((msg) => {
      message.success(msg);
      dispatch({
        type: HANDLE_EDIT,
        payload: {
          editorModalVisible: false,
          currentEditCategoryData: {}
        }
      });
      dispatch(getCategoryListData(parentCategoryId));
    }).catch(error => message.error(error));
  };
};

const handleOpenCreateModal = () => ({
  type: OPEN_CREATE_MODAL,
  payload: {
    createModalVisible: true,
  }
});

const handleCancelCreate = () => ({
  type: CANCEL_CREATE,
  payload: {
    createModalVisible: false
  }
});

const handleCreateCategory = (parentId, categoryName) => {
  return dispatch => {
    requestCreateCategory(parentId, categoryName).then(msg => {
      message.success(msg);
      dispatch({
        type: HANDLE_CREATE,
        payload: {
          createModalVisible: false
        }
      });
    }).catch(error => message.error(error));
  };
};

export {
  getCategoryListData,
  handleEditCategoryName,
  handleOpenEditModal,
  handleCancelEdit,
  handleOpenCreateModal,
  handleCancelCreate,
  handleCreateCategory,
};
