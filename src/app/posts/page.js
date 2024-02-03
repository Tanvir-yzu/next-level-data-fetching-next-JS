import Link from "next/link";

const postsPage = async () => {
  const res = await fetch("http://localhost:5000/posts");
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1>Total post:{data.length}</h1>
      <div className="w-full">
        {data.map((post) => (
          <div
            key={post.id}
            className="card  bg-gray-100-100 shadow-xl w-[70%] mx-auto my-6"
          >
            <div className="card-body ">
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

export default postsPage;
