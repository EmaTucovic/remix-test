// Before we used to creating two things here: an API route to provide data and a frontend component that consumes it.
// In Remix your frontend component is also its own API route and it already knows how to talk to itself on the server from the browser.
// That is, you don't have to fetch it.
// it could be from db or api

import { useLoaderData, Link } from "remix";

export const loader = () => {
  // runs on the server!
  // get the data from db for example
  console.log("1");

  const data = {
    posts: [
      { id: 1, title: "Post 1", body: "this is a test post " },
      { id: 2, title: "Post 2", body: "this is a test post " },
      { id: 3, title: "Post 3", body: "this is a test post " },
    ],
  };
  return data;
};

function PostsHome() {
  const { posts } = useLoaderData();
  return (
    <div>
      Hello from posts home
      <ul className="posts-list">
        {posts.map((item) => (
          <li key={item.id}>
            <Link to={item.id}>
              <h3>{item.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsHome;
