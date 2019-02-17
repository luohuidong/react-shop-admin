import { reducer as HomeReducer } from './home/index';
import { reducer as userReducer } from './user/index';
import { reducer as productReducer } from './product/index';
import { reducer as categoryReducer } from './category/index';
import { reducer as orderReducer } from './order';

const reducer = {
  home: HomeReducer,
  ...userReducer,
  ...productReducer,
  ...categoryReducer,
  ...orderReducer
};

export default reducer;
