import { reducer as LoginReducer } from './login/index';
import { reducer as HomeReducer } from './home/index';

const reducer = {
  login: LoginReducer,
  home: HomeReducer
};

export {
  reducer,
};
