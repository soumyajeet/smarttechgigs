import { call, put, takeEvery } from 'redux-saga/effects'
import {getAllSoftware} from './services/services';

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* getTools(action) {
   console.log(action)
   try {
      const tools = yield call(getAllSoftware);
      console.log(tools);
      yield put({type: "TOOLS_FETCH_SUCCEEDED", tools: tools});
   } catch (e) {
      yield put({type: "TOOLS_FETCH_FAILED", message: e.message});
   }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* Sagas() {
  yield takeEvery("TOOLS_FETCH_REQUESTED", getTools);
}


export default Sagas;