import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const dummyPost = { title: "Hello World", content: "Initial content" };

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState(dummyPost.title);
  const [content, setContent] = useState(dummyPost.content);

  const handleUpdate = () => {
    alert(`Post ${postId} updated to: ${title} - ${content}`);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Post #{postId}</h2>
      <input
        id="postTitle"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <br /><br />
      <textarea
        id="postContent"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Edit content..."
      />
      <br /><br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditPost;
