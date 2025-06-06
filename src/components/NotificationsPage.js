import React, { useState } from "react";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  const handleRefresh = () => {
    setNotifications([
      "Alice liked your post",
      "Bob commented on React Rocks",
      "New follower: Charlie"
    ]);
  };

  return (
    <div>
      <h2>Notifications</h2>
      <button className="button" onClick={handleRefresh}>Refresh Notifications</button>
      <ul>
        {notifications.map((note, idx) => <li key={idx}>{note}</li>)}
      </ul>
    </div>
  );
};

export default NotificationsPage;
