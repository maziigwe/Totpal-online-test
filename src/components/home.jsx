import React from "react";
import {Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <Link to="/todo" className="btn btn-primary">Todo List</Link>
      
    </div>
  );
}
