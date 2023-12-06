import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const request = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(request);
    yield put(actions.clickedButtonSuccess());
  } catch {
    toast.error('Something went wrong');
    yield put(actions.clickedButtonFailure());
  }
}

export default all([takeLatest(types.CLICKED_BUTTON_REQUEST, exampleRequest)]);
