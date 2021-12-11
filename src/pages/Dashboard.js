import React from "react";
import PostCard from "../components/PostCard";

export const MOCK_DATA = [
  {
    imageAlt: "Image of a happy Golden Retriever",
    imageSrc: "../golden_retriever",
    postId: "1",
    userId: "1",
    userName: "Leila",
  },
];

function Dashboard() {
  return (
    <div className="PageWrapper">
      <h1>Dashboard</h1>
      {MOCK_DATA.map((post, i) => (
        <PostCard post={post} key={i} />
      ))}
    </div>
  );
}

export default Dashboard;
