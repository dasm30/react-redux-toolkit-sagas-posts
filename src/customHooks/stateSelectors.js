import { shallowEqual, useSelector } from "react-redux";
import {
  selectPostsList,
  selectPostsLoading,
  selectPostsErrors,
  selectPosts
} from "sagas/selectors";
import { selectPost } from "sagas/selectors";
import {
  selectPostData,
  selectPostErrors,
  selectPostLoading
} from "sagas/selectors";
import {
  selectComments,
  selectCommentsErrors,
  selectCommentsList,
  selectCommentsLoading
} from "../sagas/selectors";

// POSTS
export const usePostsSelector = () => useSelector(selectPosts, shallowEqual);
export const usePostsListSelector = () =>
  useSelector(selectPostsList, shallowEqual);
export const usePostsLoadingSelector = () =>
  useSelector(selectPostsLoading, shallowEqual);
export const usePostsErrorsSelector = () =>
  useSelector(selectPostsErrors, shallowEqual);

// POST
export const usePostSelector = () => useSelector(selectPost, shallowEqual);
export const usePostDataSelector = () =>
  useSelector(selectPostData, shallowEqual);
export const usePostLoadingSelector = () =>
  useSelector(selectPostLoading, shallowEqual);
export const usePostErrorsSelector = () =>
  useSelector(selectPostErrors, shallowEqual);

// COMMENTS
export const useCommentsSelector = () =>
  useSelector(selectComments, shallowEqual);
export const useCommentsListSelector = () =>
  useSelector(selectCommentsList, shallowEqual);
export const useCommentsLoadingSelector = () =>
  useSelector(selectCommentsLoading, shallowEqual);
export const useCommentsErrorsSelector = () =>
  useSelector(selectCommentsErrors, shallowEqual);
