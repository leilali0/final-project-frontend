import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostCard from "../components/PostCard";

//const url = process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;

function UserProfile() {
  const [userPosts, setUserPosts] = useState();
  let { userID } = useParams();

  useEffect(() => {
    axios
      .get(`https://glacial-woodland-33490.herokuapp.com/user/${userID}`)
      .then(function (response) {
        setUserPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.warn(error);
      });
  }, [userID]);

  return (
    <div className="PageWrapper">
      {/* <h1 className="userName">
        {userPosts && userPosts[0].userName}'s Profile
      </h1> */}
      <div className="postGrid">
        {userPosts &&
          userPosts.map((userPosts, i) => (
            <PostCard post={userPosts} key={i} />
          ))}
      </div>
    </div>
  );
}

export default UserProfile;
