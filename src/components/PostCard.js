import React from "react";

function PostCard({ post }) {
  return (
    <div className="PostCard">
      <img src={post.imageSrc} alt={post.imageAlt} />
      <p>
        Poster by: <a href={`/user/${post.userId}`}>{post.userName}</a>
      </p>
      <p>
        <a href={`/post/${post.postId}`}>View Post</a>
      </p>
    </div>
  );
}

export default PostCard;
