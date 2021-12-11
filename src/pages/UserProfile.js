import React from "react";
import PostCard from "../components/PostCard";
import { MOCK_DATA } from "./Dashboard";

function UserProfile({ userInformation }) {
  console.log({ userInformation });
  // DISPLAY ALL POSTS BY ONE USER
  return (
    <div className="PageWrapper">
      <h1>User Name:</h1>
      <h2>Posts</h2>
      {MOCK_DATA.map((post, i) => (
        <PostCard post={post} key={i} />
      ))}
    </div>
  );
}

export default UserProfile;
