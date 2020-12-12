// POSTS
export const selectPosts = (state) => state.posts;
export const selectPostsList = (state) => state.posts.list;
export const selectPostsLoading = (state) => state.posts.loading;
export const selectPostsErrors = (state) => state.posts.errors;
// POST
export const selectPost = (state) => state.post;
export const selectPostData = (state) => state.post.data;
export const selectPostLoading = (state) => state.post.loading;
export const selectPostErrors = (state) => state.post.errors;
// COMMENTS
export const selectComments = (state) => state.comments;
export const selectCommentsList = (state) => state.comments.list;
export const selectCommentsLoading = (state) => state.comments.loading;
export const selectCommentsErrors = (state) => state.comments.errors;
