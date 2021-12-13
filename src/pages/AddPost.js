import React from "react";
import AddPostForm from "../components/AddPostForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:4000/";

function AddPost({ userInformation }) {
  const navigate = useNavigate();
  function submitPost(e) {
    e.preventDefault();

    const message = e.currentTarget.message.value;
    const imageSrc = e.currentTarget.imageSrc.value;
    const imageAlt = e.currentTarget.imageAlt.value;
    const rating = e.currentTarget.rating.value;
    const location = e.currentTarget.location.value;
    //const userName = userInformation.displayName;
    const userID = userInformation.uid;

    console.log(userID);

    const url = `${baseUrl}/create?message=${message}&imageSrc=${imageSrc}&imageAlt=${imageAlt}&rating=${rating}&location=${location}&userID=${userID}`;
    axios
      .get(url)
      .then(function (response) {
        console.log({ response });
        navigate("/", { replace: true });
      })
      .catch(function (error) {
        // handle error
        console.warn(error);
      });
  }

  return (
    <div className="PageWrapper">
      <h1>Add Post</h1>
      <AddPostForm submitPost={submitPost} />
    </div>
  );
}

export default AddPost;
