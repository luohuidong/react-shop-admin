import { 
  GET_CATEGORY_LIST_DATA,
  OPEN_EDITOR,
  CANCEL_EDIT,
  HANDLE_EDIT,
  OPEN_CREATE_MODAL,
  CANCEL_CREATE,
  HANDLE_CREATE,
} from './actionTypes';

const initState = {
  categoryListData: [],
  editorModalVisible: false,
  currentEditCategoryData: {},
  createModalVisible: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CATEGORY_LIST_DATA:
    case OPEN_EDITOR:
    case CANCEL_EDIT:
    case HANDLE_EDIT:
    case OPEN_CREATE_MODAL:
    case CANCEL_CREATE:
    case HANDLE_CREATE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
