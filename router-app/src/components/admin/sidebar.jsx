import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ul>
      <li>
        <Link to="/dashboard/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard/users">Users</Link>
      </li>
    </ul>
  );
};

export default SideBar;
