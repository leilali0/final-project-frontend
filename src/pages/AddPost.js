import React from "react";
import AddPostForm from "../components/AddPostForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;

function AddPost({ userInformation }) {
  const navigate = useNavigate();

  function submitPost(e) {
    e.preventDefault();

    const message = e.currentTarget.message.value;
    const imageSrc = e.currentTarget.imageSrc.value;
    const imageAlt = e.currentTarget.imageAlt.value;
    const rating = e.currentTarget.rating.value;
    const location = e.currentTarget.location.value;
    const userName = userInformation.displayName;
    const userID = userInformation.uid;

    const url = `https://glacial-woodland-33490.herokuapp.com/create?message=${message}&imageSrc=${imageSrc}&imageAlt=${imageAlt}&rating=${rating}&userName=${userName}&location=${location}&userID=${userID}`;
    axios
      .get(url)
      .then(function (response) {
        navigate("/", { replace: true });
      })
      .catch(function (error) {
        // handle error
        console.warn(error);
      });
  }

  return (
    <div className="PageWrapper">
      <div className="formWrapper">
        <h1>New Post</h1>
        <AddPostForm submitPost={submitPost} />
      </div>
    </div>
  );
}

export default AddPost;
