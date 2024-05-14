import Link from "next/link";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function PostListPage({ searchParams }) {
  
  "use server";
  
  const response = await sql`SELECT quote, title FROM quotes`;
  const posts = response.rows;
  if (searchParams.sort === "desc") {
    posts.reverse();
  }
  // revalidatePath(`/posts/`);
  // redirect(`/posts`);



  return (
    <div>
      <h2>The Quotes Post in Episode Order</h2>
      <div>
        <Link href="/posts/?sort=asc">Sort ascending</Link> -{" "}
        <Link href="/posts?sort=desc">Sort descending</Link>
      </div>
      <div id="order_list">
      <ul>
        {posts.map((post) => (
         
          <li key={post.id}>
            <span>{post.quote} - {post.title}</span>
          </li>
        ))}
        </ul>
        </div>
    </div>
  );
}
