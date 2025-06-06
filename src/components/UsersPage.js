import React, { useState } from "react";

const users = ["Alice", "Bob"];
const posts = [
  { id: 1, author: "Alice", title: "Hello World" },
  { id: 2, author: "Bob", title: "React Rocks" },
  { id: 3, author: "Alice", title: "Learning Hooks" },
];

const UsersPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredPosts = posts.filter(p => p.author === selectedUser);

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <button key={user} onClick={() => setSelectedUser(user)}>
          {user}
        </button>
      ))}

      {selectedUser && (
        <div>
          <h3>Posts by {selectedUser}</h3>
          <ul>
            {filteredPosts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
