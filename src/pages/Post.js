import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  let { id } = useParams();

  return (
    <div class="PageWrapper">
      <h1>Post</h1>
    </div>
  );
}

export default Post;
