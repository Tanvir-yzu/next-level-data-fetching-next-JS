import Link from "next/link";
import React from "react";
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const ids = data.map((postss) => {
    return {
      id: (postss.id = ""),
    };
  });
  //console.log(ids);
  return ids;
}

const detells = async ({ params }) => {
  console.log(params.id);
  const ress = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await ress.json();
  //console.log(post);

  return (
    <div>
      <div className="card  bg-gray-100-100 shadow-xl w-[70%] mx-auto my-6">
        <div className="card-body ">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.like_counter}</p>
          <div className="card-actions justify-end">
            <Link href={`/posts`}>
              <button className="btn btn-primary">back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default detells;
