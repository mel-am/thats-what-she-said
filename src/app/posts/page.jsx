
import Link from "next/link";
import { sql } from "@vercel/postgres";

export default async function PostListPage({ searchParams }) {

  const PostListPage = ({ searchParams }) => {
    console.log("searchParams", searchParams);

    const fetchPosts = async () => {
      const response = await sql`SELECT quote, title FROM quotes`;
      return response.rows || [];
    };

    const posts = fetchPosts();

    if (searchParams.sort === "desc") {
      posts.reverse();
    }

    return (
      <div>
        <h2>Post List</h2>
        <Link href="/posts?sort=asc">Sort ascending</Link> -{" "}
        <Link href="/posts?sort=desc">Sort descending</Link>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
}