import React from "react";

function PostCard({ post }) {
  return (
    <div className="PostCard">
      <img src={post.imageSrc} alt={post.imageAlt} />
      <p>Rating: {post.rating}</p>
      <p>Message: {post.message}</p>
      <p>
        Poster by: <a href={`/user/${post.userId}`}>{post.userName}</a>
      </p>
      <p>
        <a href={`/post/${post.id}`}>View Post</a>
      </p>
    </div>
  );
}

export default PostCard;
