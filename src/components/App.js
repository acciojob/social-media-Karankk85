import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./../styles/App.css";
import LandingPage from "./LandingPage";
import UsersPage from "./UsersPage";
import NotificationsPage from "./NotificationsPage";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/users">Users</Link> |{" "}
          <Link to="/notifications">Notifications</Link> |{" "}
          <Link to="/create">Create Post</Link>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:postId" element={<EditPost />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
