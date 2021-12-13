import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostCard from "../components/PostCard";

const url = `http://localhost:4000`;

function UserProfile({ userInformation }) {
  // DISPLAY ALL POSTS BY ONE USER

  const [userPosts, setUserPosts] = useState();
  let { uid } = useParams();

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        console.log({ response });
        setUserPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.warn(error);
      });
  }, []);

  return (
    <div className="PageWrapper">
      <h1>User Name:</h1>
      <h2>Posts</h2>
      {userPosts &&
        userPosts.map((userPosts, i) => <PostCard post={userPosts} key={i} />)}
    </div>
  );
}

export default UserProfile;
