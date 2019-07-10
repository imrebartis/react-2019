import React from "react";
import { Route } from "react-router-dom";
import SideBar from "./sidebar";
import Users from "./users";
import Posts from "./posts";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Route path="/dashboard/users" component={Users} />
      <Route path="/dashboard/posts" component={Posts} />
    </div>
  );
};

export default Dashboard;
