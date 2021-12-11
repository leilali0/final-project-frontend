import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";

export const MOCK_DATA = [
  {
    imageAlt: "Image of a happy Golden Retriever",
    imageSrc: "../golden_retriever",
    postId: "1",
    userId: "1",
    userName: "Leila",
  },
];

const url = `http://localhost:4000`;

function Dashboard() {
  const [post, setPost] = useState();

  // Getting all posts
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        console.log({ response });
        //setPost(response.data);
      })
      .catch(function (error) {
        // handle error
        console.warn(error);
      });
  }, []);

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
