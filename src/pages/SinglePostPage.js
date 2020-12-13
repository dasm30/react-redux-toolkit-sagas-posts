import React from "react";
import { usePost } from "customHooks/usePost";
import { useComments } from "customHooks/useComments";

const SinglePostPage = () => {
  const { renderPost } = usePost();
  const { renderComments } = useComments();

  return (
    <section>
      {renderPost()}
      {renderComments()}
    </section>
  );
};

export default SinglePostPage;
