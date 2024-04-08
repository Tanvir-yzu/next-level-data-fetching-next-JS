"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array to run effect only once when component mounts

  return (
    <div>
      <h1>Total post: {posts.length}</h1>
      <div className="w-full">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card bg-gray-100-100 shadow-xl w-[70%] mx-auto my-6"
          >
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.description}</p>
              <p>{post.like_counter}</p>
              <div className="card-actions justify-end">
                <Link href={`/posts/${post.id}`}>
                  <button className="btn btn-primary">See more</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
