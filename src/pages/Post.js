import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SinglePostCard from "../components/SinglePostCard";

//const url = process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;

function Post() {
  const [singlePost, setSinglePost] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://glacial-woodland-33490.herokuapp.com/post/${id}`)
      .then(function (response) {
        setSinglePost(response.data);
      })
      .catch(function (error) {
        // handle error
        console.warn(error);
      });
  }, [id]);

  return (
    <div className="PageWrapper">
      <div className="singlePostWrapper">
        <SinglePostCard post={singlePost} />
      </div>
    </div>
  );
}

export default Post;
