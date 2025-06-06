import React, { useState } from "react";
import { Link } from "react-router-dom";

const dummyPosts = [
  { id: 1, author: "Alice", title: "Hello World", content: "This is my first post", reactions: 0 },
  { id: 2, author: "Bob", title: "React Rocks", content: "Let's build with React!", reactions: 3 },
];

const LandingPage = () => {
  const [posts, setPosts] = useState(dummyPosts);

  const handleReaction = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, reactions: post.reactions + 1 } : post
    ));
  };

  return (
    <div className="posts-list">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p><strong>Author:</strong> {post.author}</p>
          <button className="button" onClick={() => handleReaction(post.id)}>
            👍 {post.reactions}
          </button>
          <Link to={`/edit/${post.id}`}>
            <button className="button">Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
