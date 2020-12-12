import { call, put, takeLeading } from "redux-saga/effects";
import { postsActions } from "slices/posts";
import { postActions } from "slices/post";
import { fetchPosts, fetchPost, fetchComments } from "api/postsApi";
import { commentsActions } from "../slices/comments";
// import waitMessage from 'data/wait-message';
// import { errorToast } from 'data/toast';

// ----- WORKERS -------------------------------------------------------
function* getPosts() {
  try {
    const posts = yield call(fetchPosts);
    yield put(postsActions.getPostsSuccess(posts));
  } catch (err) {
    // yield errorToast({ messageText: err });
    yield put(postsActions.getPostsError(err));
  } finally {
    // yield put(waitMessage.close());
  }
}

function* getPost({ payload: id }) {
  try {
    const post = yield call(fetchPost, id);
    yield put(postActions.getPostSuccess(post));
  } catch (err) {
    // yield errorToast({ messageText: err });
    yield put(postActions.getPostError(err));
  } finally {
    // yield put(waitMessage.close());
  }
}

function* getComments({ payload: postId }) {
  try {
    const comments = yield call(fetchComments, postId);
    yield put(commentsActions.getCommentsSuccess(comments));
  } catch (err) {
    // yield errorToast({ messageText: err });
    yield put(commentsActions.getCommentsError(err));
  } finally {
    // yield put(waitMessage.close());
  }
}
// ---------------------------------------------------------------------

export default function* watchers() {
  yield takeLeading(postsActions.getPosts.type, getPosts);
  yield takeLeading(postActions.getPost.type, getPost);
  yield takeLeading(commentsActions.getComments.type, getComments);
}
