import { shallowEqual, useSelector } from "react-redux";
import {
  selectPostsList,
  selectPostsLoading,
  selectPostsErrors,
  selectPosts
} from "sagas/selectors";
import { selectPost } from "sagas/selectors";
import { selectComments } from "sagas/selectors";

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

// COMMENTS
// This way, we stay DRY
export const useCommentsSelector = (fieldName) =>
  useSelector(selectComments(fieldName), shallowEqual);
