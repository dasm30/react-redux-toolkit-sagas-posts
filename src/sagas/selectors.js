// POSTS
export const selectPosts = (state) => state.posts;
export const selectPostsList = (state) => state.posts.list;
export const selectPostsLoading = (state) => state.posts.loading;
export const selectPostsErrors = (state) => state.posts.errors;

// POST
export const selectPost = (state) => state.post;
export const selectPostField = (fieldName = "") => (state) =>
  state.post[fieldName];

// COMMENTS
// With a single selector this way we can get any data from
// the store and also use it as a normal selector
export const selectComments = (stateOrFieldName) => {
  // If field name is provided
  if (typeof stateOrFieldName === "string") {
    return (state) => {
      const field = state.comments[stateOrFieldName];
      return field || state.comments;
    };
  }
  // If state
  return (state) => state.comments;
};
