import { all } from 'redux-saga/effects';
import { watchAuthSagas } from '../features/authSagas';

export function* rootSaga() {
  yield all([watchAuthSagas()]);
}