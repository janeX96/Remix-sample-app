import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <main className="posts">
      <h1 className="header">Posts</h1>
      <Link to="admin" className="link">
        Admin
      </Link>
      <ul className="list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link className="link" to={post.slug}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
