import { all, fork } from "redux-saga/effects";
import onGetPosts from "./postsSaga";

function* rootSaga() {
  yield all([fork(onGetPosts)]);
}

export default rootSaga;
