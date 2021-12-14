import React from "react";

function SinglePostCard({ post }) {
  return (
    <div className="SinglePostCard">
      <img className="image" src={post.imageSrc} alt={post.imageAlt} />

      <p className="location">{post.location}</p>
      <div className="postText">
        <p>Rating: {post.rating}/5</p>
        <p>Message: {post.message}</p>
        <p>
          Poster by: <a href={`/user/${post.userID}`}>{post.userName}</a>
        </p>
      </div>
    </div>
  );
}

export default SinglePostCard;
