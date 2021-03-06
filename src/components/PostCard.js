import React from "react";

function PostCard({ post }) {
  return (
    <div className="PostCard">
      <img className="image" src={post.imageSrc} alt={post.imageAlt} />

      <p className="location">{post.location}</p>
      <div className="postText">
        <p>Rating: {post.rating}/5</p>
        <p>Message: {post.message}</p>
        <p>
          Poster by: <a href={`/user/${post.userID}`}>{post.userName}</a>
        </p>
        <p>
          <a href={`/post/${post.id}`}>View Post</a>
        </p>
      </div>
    </div>
  );
}

export default PostCard;
