import React from "react";
import { usePrames } from "react-router-dom";

function Post() {
  let { id } = usePrames();

  return (
    <div class="PageWrapper">
      <h1>Post</h1>
    </div>
  );
}

export default Post;
