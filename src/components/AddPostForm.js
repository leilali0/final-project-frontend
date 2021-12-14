import React from "react";

function AddPostForm({ submitPost }) {
  return (
    <div className="Form">
      <form onSubmit={(e) => submitPost(e)}>
        <label htmlFor="message">Message</label>
        <input type="text" name="message" placeholder="Enter Message" />

        <label htmlFor="imageSrc">Image Scource</label>
        <input
          type="text"
          name="imageSrc"
          placeholder="Image type: JPG, PNG, GIF"
        />

        <label htmlFor="imageAlt">Image Alt</label>
        <input type="text" name="imageAlt" placeholder="Describe Image" />

        <label htmlFor="rating">Rating (out of 5)</label>
        <input type="number" name="rating" placeholder="5/5" min="0" max="5" />

        <label htmlFor="location">Location</label>
        <input type="text" name="location" placeholder="Enter Location" />

        <button className="submitButton" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default AddPostForm;
