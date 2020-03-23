import { all } from 'redux-saga/effects';
import auth from './auth/sagas'
import recipe from './recipe/sagas'
import user from './user/sagas'

export default function* rootSaga() {
  return yield all([auth,recipe,user]);
}
