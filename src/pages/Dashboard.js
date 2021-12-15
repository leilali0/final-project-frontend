import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";

//const url = process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;

function Dashboard() {
  const [post, setPost] = useState();

  // Getting all posts
  useEffect(() => {
    axios
      .get(`https://glacial-woodland-33490.herokuapp.com`)
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
