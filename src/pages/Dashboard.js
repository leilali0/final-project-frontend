import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";

export const MOCK_DATA = [
  {
    imageAlt: "Image of a sink",
    imageSrc:
      "https://thewindyside.com/wp-content/uploads/2017/02/img_4629.jpg",
    message: "sink is broken, but still works",
    rating: "2/5",
    postId: "mockdata",
    userId: "1",
    userName: "Leila",
    location: "Central Park, New York, NY 11206",
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
        setPost(response.data);
      })
      .catch(function (error) {
        // handle error
        console.warn(error);
      });
  }, []);

  return (
    <div className="PageWrapper">
      <h1 className="title">Dashboard</h1>
      <div className="postGrid">
        {post && post.map((post, i) => <PostCard post={post} key={i} />)}
      </div>
    </div>
  );
}

export default Dashboard;
