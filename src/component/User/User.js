"use client";
import { useEffect, useState } from "react";

const User = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setusers(data));
  }, []);
  return (
    <div>
      <p>User : {users.length}</p>
      {users.map((post) => (
        <div
          key={post.id}
          className="card  bg-gray-100-100 shadow-xl w-[70%] mx-auto my-6"
        >
          <div className="card-body ">
            <h2 className="card-title">{post.name}</h2>
            <p>{post.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
