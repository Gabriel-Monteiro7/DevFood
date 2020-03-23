import { combineReducers } from 'redux';
import auth from './auth/redurce'
import recipe from './recipe/redurce'
import user from './user/redurce'
const reducers = combineReducers({
  user,
  auth,
  recipe
});

export default reducers;
