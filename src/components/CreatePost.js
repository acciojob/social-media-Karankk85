import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert(`Post added by ${author}: ${content}`);
    navigate("/");
  };

  return (
    <div>
      <h2>Create Post</h2>
      <select id="postAuthor" value={author} onChange={e => setAuthor(e.target.value)}>
        <option value="">Select Author</option>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
      </select>
      <br /><br />
      <textarea
        id="postContent"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Write something..."
      />
      <br /><br />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
};

export default CreatePost;
