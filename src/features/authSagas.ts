import { call, CallEffect, ForkEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import { auth } from '../config/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut, UserCredential } from 'firebase/auth';
import { login, logout, setUser } from '../features/auth/authSlice';  

type SagaEffect = CallEffect | PutEffect | ForkEffect;

function* loginSaga(): Generator<CallEffect | PutEffect, void, UserCredential> {
  try {
    const provider = new GoogleAuthProvider();
    const result = yield call(signInWithPopup, auth, provider);
    const userData = result.user;
    yield call([localStorage, 'setItem'], 'user', JSON.stringify(userData));
    yield put(setUser(userData));
  } catch (error) {
    console.error('Login error:', error);
    yield put(setUser(null));
  }
}

function* logoutSaga(): Generator<CallEffect | PutEffect, void, void> {
  try {
    yield call(signOut, auth);
    yield call([localStorage, 'removeItem'], 'user');
    yield put(setUser(null));
  } catch (error) {
    console.error('Logout error:', error);
  }
}

export function* watchAuthSagas(): Generator<SagaEffect, void, void> {
  yield takeLatest(login.type, loginSaga);
  yield takeLatest(logout.type, logoutSaga);
}