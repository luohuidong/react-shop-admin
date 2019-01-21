import { reducer as LoginReducer } from './login/index';
import { reducer as HomeReducer } from './home/index';
import { reducer as userReducer } from './user/index';
import { reducer as productReducer } from './product/index';

const reducer = {
  login: LoginReducer,
  home: HomeReducer,
  user: userReducer,
  ...productReducer,
};

export {
  reducer,
};
